<script setup lang="ts">
import { ref } from 'vue'
import ChildComponent from './ChildComponent.vue'
import { useCopy } from './UseCopy'

const COPY_TEXT = 'https://google.com'

const { copyData, urlCopy } = useCopy()
</script>

<template>
  <div class="container">
    <p class="text">親コンポーネントです。</p>
    <div class="copy">
      <span class="copy-text">{{ COPY_TEXT }}</span>
      <button class="copy-button" @click="urlCopy(COPY_TEXT)">
        <svg
          stroke="currentColor"
          fill="currentColor"
          stroke-width="0"
          viewBox="0 0 24 24"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path fill="none" d="M0 0h24v24H0V0z"></path>
          <path
            d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 
            2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"
          ></path>
        </svg>
      </button>
    </div>
  </div>

  <ChildComponent />
</template>

<style scoped>
.container {
  margin-bottom: 64px;
}

.text {
  margin-bottom: 16px;
}

.copy {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 400px;
  padding: 8px 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.copy-text {
  user-select: none;
}

.copy-button {
  appearance: none;
  outline: none;
  cursor: pointer;
  border: none;
  background-color: transparent;
  padding: 8px;
  border-radius: 4px;
  font-size: 16px;
  transition: 0.3s;
}

.copy-button:hover {
  background-color: #eaf6ff;
}
</style>