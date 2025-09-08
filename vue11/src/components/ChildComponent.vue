<template>
    <div class="child-component">
        <p>子コンポーネント</p>
    </div>
</template>

<script setup lang="ts">
import { onUnmounted } from 'vue'
onUnmounted(() => {
  console.log('子コンポーネントが削除されました。')
})
</script>

<style scoped>
.child-component{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 200px;
    height: 50px;
    border-radius: 4px;
    background-color: #20f776;
}
</style>