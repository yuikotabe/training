<script setup lang="ts">
import { ref } from 'vue';
import { useInputCopy } from './useInputCopy'

const { inputValue, copyData, inputValueCopy, changeInputValue } = useInputCopy()

</script>
<template>
  <p class="text">子コンポーネントです。</p>
  <div class="form">
    <input
      type="text"
      class="input"
      :value="inputValue"
      @input="changeInputValue"
    />
    <button class="form-button" @click="inputValueCopy">
      コピー
    </button>
  </div>
  <p>{{ copyData }}</p>
</template>
<style scoped>
.text {
  margin-bottom: 16px;
}
.input {
  appearance: none;
  background-color: #fff;
  width: 250px;
  border: 1px solid #d1d5db;
  border-radius: 4px;
  padding: 8px 12px;
  font-size: 16px;
}
.form {
  display: flex;
  gap: 12px;
  margin-bottom: 12px;
}
.form-button {
  appearance: none;
  outline: none;
  cursor: pointer;
  border: none;
  background-color: #27adff;
  font-size: 16px;
  padding: 8px 16px;
  border-radius: 4px;
  color: #fff;
}
</style>