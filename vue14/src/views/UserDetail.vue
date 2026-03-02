// UserDetail.vue
<script setup lang="ts">
import { computed } from 'vue'
import { RouterView, useRoute, useRouter } from 'vue-router'; 

const route = useRoute()
const userId = computed(() => route.params.id)
const router = useRouter();
function goBack(): void {
  router.replace('/users')
}
</script>

<template>
  <div>
    <h3>ユーザー情報</h3>
    <p>ユーザーID: {{ userId }}</p>
    <button @click="goBack">ユーザーリストへ戻る</button>
  </div>
  <RouterView />
</template>