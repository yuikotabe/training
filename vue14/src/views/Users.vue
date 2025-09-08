// Users.vue
<script setup lang="ts">
import UserList from '../components/UserList.vue'
</script>

<template>
  <div>
    <h2>ユーザーリスト</h2>
    <UserList />
    <RouterView />
  </div>
</template>