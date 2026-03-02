<script setup lang="ts">
import { ref } from 'vue'
import { computed } from 'vue'

type FormData = {
  firstName: string
  lastName: string
}

const formData = ref<FormData>({
  lastName: '',
  firstName: '',
})

function changeFormData(event: Event) {
  if (event.target instanceof HTMLInputElement) {
    formData.value = {
      ...formData.value,
      [event.target.name]: event.target.value,
    }
  }
}

const isValid= computed(()=>{
  return formData.value.firstName !=='' && formData.value.lastName !==''
})

function submitForm() {
  console.log(
    `フルネーム: ${formData.value.lastName} ${formData.value.firstName}`,
  )
}



</script>

<template>
  <form class="form" @submit.prevent="submitForm">
    <div class="form__field">
      <label for="lastName">姓</label>
      <input
        id="lastName"
        name="lastName"
        type="lastName"
        @input="changeFormData"
      />
    </div>
    <div class="form__field">
      <label for="firstName">名</label>
      <input
        id="firstName"
        name="firstName"
        type="firstName"
        @input="changeFormData"
      />
    </div>

    <button class="form__submit" :disabled="!isValid">送信する</button>
  </form>
</template>

<style scoped>
input {
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #ccc;
}

.form {
  display: grid;
  gap: 24px;
  max-width: 480px;
  margin: 0 auto;
}

.form__field {
  display: grid;
  gap: 8px;
}

.form__submit {
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

.form__submit:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}
</style>