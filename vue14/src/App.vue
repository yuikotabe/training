<script setup lang="ts">
import { RouterView } from 'vue-router'

</script>
<template>
  <div>
    <h1>Router 総復習</h1>
    <nav>
      <RouterLink to="/home">ホーム</RouterLink> |
      <RouterLink to="/users">ユーザーリスト</RouterLink>
    </nav>
    <RouterView />
  </div>
</template>