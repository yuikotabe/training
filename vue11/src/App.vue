<script setup lang="ts">
import { onMounted, onUpdated, ref } from 'vue'
import ChildComponent from './components/ChildComponent.vue'

const status = ref<boolean>(true)

onMounted(() => {
  console.log('Hello Vue！')
})

const statusChange = () => {
  status.value = !status.value
}

onUpdated(() => {
  console.log('値が変更されました')
})
</script>

<template>
  <p>親コンポーネントです。</p>
  <button @click="statusChange">ボタン</button>
  <p>{{ status ? '表示されました。' : '非表示になりました。' }}</p>
  <ChildComponent v-if="status"/>
</template>