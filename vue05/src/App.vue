<script setup lang="ts">
import { ref } from 'vue'

const activeTab = ref<number>(1)

</script>


<template>
  <div class="tabs">
    <button class="tab-button" @click="activeTab = 1" :class="{ 'tab-button--active' : activeTab === 1 }">タブ1</button>
    <button class="tab-button" @click="activeTab = 2" :class="{ 'tab-button--active' : activeTab === 2 }">タブ2</button>
    <button class="tab-button" @click="activeTab = 3" :class="{ 'tab-button--active' : activeTab === 3 }">タブ3</button>
  </div>

  <div :class="['tab-content', activeTab === 1 ? 'show' : 'hide']">タブ1のコンテンツです。</div>
  <div :class="['tab-content', activeTab === 2 ? 'show' : 'hide']">タブ2のコンテンツです。</div>
  <div :class="['tab-content', activeTab === 3 ? 'show' : 'hide']">タブ3のコンテンツです。</div>
</template>

<style scoped>
.tabs {
  display: flex;
  gap: 16px;
  list-style: none;
}

.tab-button {
  padding: 8px 16px;
  border: 1px solid #ccc;
  border-bottom: none;
  background-color: #fff;
  color: #333;
  cursor: pointer;
  border-radius: 4px 4px 0 0;
}

.tab-button--active {
  background-color: #bae1ff;
}

.tab-content {
  width: 400px;
  height: 200px;
  padding: 16px;
  border: 1px solid #ccc;
  border-top: none;
  background-color: #bae1ff;
  color: #333;
  box-sizing: border-box;
  border-radius: 0 0 4px 4px;
}

.show {
  display: block;
}

.hide {
  display: none;
}
</style>