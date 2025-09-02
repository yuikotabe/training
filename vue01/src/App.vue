<script setup lang="ts">
import { ref } from 'vue'

type User = {
  name: string
  isAdmin: boolean
}

const user = ref<User>({
  name: '山田太郎',
  isAdmin: false
});
</script>

<template>
  <!-- 1問目 -->
  <p>ユーザー名:{{ user.name }}</p>
  <p>権限:{{ user.isAdmin? '管理者':'一般'}}</p>
  
  <!-- 2問目 -->
  <button :disabled="!user.isAdmin">編集</button>
</template>