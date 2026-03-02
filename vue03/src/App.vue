<script setup lang="ts">
import { ref } from 'vue'

const isOpen = ref(false)

type date = {
 lastName:string,
 firstName:string
}

const date = ref({
  lastName:'',
  firstName:''
})

function displayMessage(){
  console.log(date.value.firstName + date.value.lastName)
}

</script>

<template>
  <button class="open-button" @click="isOpen=true">モーダルを開く</button>

  <div class="modal" :class="{ 'modal--open': isOpen }">
    <div class="modal__inner">
      <div class="model__header">
        <h1>フォーム</h1>
        <button class="model__close-button" @click="isOpen=false">閉じる</button>
      </div>

      <form class="form">
        <div class="form__field">
          <label>姓</label>
          <input type="text" v-model="date.firstName"/>
          <span>入力した姓の値: {{ date.firstName }}</span>
        </div>
        <div class="form__field">
          <label>名</label>
          <input type="text" v-model="date.lastName"/>
          <span>入力した名の値: {{ date.lastName }}</span>
        </div>

        <button type="submit" class="form__submit" @click.prevent="displayMessage">送信する</button>
      </form>
    </div>
  </div>
</template>

<style scoped>
button {
  display: block;
  border: none;
  cursor: pointer;
  outline: none;
  appearance: none;

  padding: 8px 16px;
  background-color: #3895ff;
  color: #fff;
  border-radius: 4px;
}

input {
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #ccc;
}

.modal {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}

.modal--open {
  display: block;
}

.modal__inner {
  position: relative;
  width: 480px;
  margin: 100px auto;
  padding: 32px;
  background-color: #fff;
  border-radius: 8px;
}

.model__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 48px;
}

.model__close-button {
  margin-left: auto;
  background-color: #fff;
  border: 1px solid #3895ff;
  color: #3895ff;
  transition: 0.3s;
}

.model__close-button:hover {
  background-color: #3895ff;
  color: #fff;
}

.form {
  display: grid;
  gap: 24px;
}

.form__field {
  display: grid;
  gap: 8px;
}
</style>