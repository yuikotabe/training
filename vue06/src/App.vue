<script setup lang="ts">
import { ref } from 'vue';

const timeOfDay = ref<string | null>(null);
</script>


<template>
  <div>
    <button @click=" timeOfDay = '朝'">朝</button>
    <button @click=" timeOfDay = '昼'">昼</button>
    <button @click=" timeOfDay = '夜'">夜</button>
  </div>
  <div>
    <p v-show="timeOfDay === null">これから挨拶します</p>
    <p v-show="timeOfDay === '朝'">おはようございます</p>
    <p v-show="timeOfDay === '昼'">こんにちは</p>
    <p v-show="timeOfDay === '夜'">こんばんは</p>
  </div>
</template>