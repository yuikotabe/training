<!-- 作成したフォルダ内にあるApp.vueを以下へ書き換えましょう。 -->
<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'

type Product = {
  id: number
  title: string
  price: number
  description: string
  images: string[]
  creationAt: string
  updatedAt: string
  category: {
    id: number
    name: string
    image: string
    creationAt: string
    updatedAt: string
  }
}

const query = ref<string>('')
const products = ref<Product[]>([])
const loading = ref<boolean>(false)

const fetchResults = async (searchQuery:string):Promise<void> => {
  if(!searchQuery) {
    products.value = ([])
    return
  }
  loading.value = true
  try {
    const res = await fetch(`https://api.escuelajs.co/api/v1/products?offset=1&limit=20&title=${searchQuery}`)
    if (!res.ok) throw new Error('APIエラー')
    const json = await res.json()
    products.value = json
  } catch (err) {
    if (err instanceof Error) {
    console.log(err.message)
  } else {
    console.log('エラー', err)
  }
  } finally {
    loading.value = false
  }
}

watch(
  query,
  (newQuery: string, oldQuery: string) => {
    fetchResults(newQuery)
  },
  { deep: true },
)

</script>

<template>
  <input type="text" class="input" placeholder="商品名を入力してください。" v-model="query"/>

  <p v-if="loading">データ取得中。。。</p>
  <p v-else-if="query && products.length === 0 ">データがありませんでした。</p>
  <ul class="products">
    <li v-for="product in products" :key="product.id">
      <div v-for="(image , index) in product.images" key="index" >
        <img :src="image" alt="productImage{{ index + 1 }}" />
      </div>
      <h2 class="product-title">
        {{product.title}}
      </h2>
      <span>${{product.price}}</span>
    </li>
  </ul>
</template>

<style scoped>
img {
  max-width: 100%;
  height: auto;
  box-sizing: border-box;
}

.input {
  width: 100%;
  padding: 8px;
  margin-bottom: 16px;
  box-sizing: border-box;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.products {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 32px;
  list-style: none;
}

.product-title {
  font-size: 18px;
  margin-bottom: 12px;
}
</style>