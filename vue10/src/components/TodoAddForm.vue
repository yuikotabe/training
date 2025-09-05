<template>
<div class="add-block">
    <BaseInput v-model="text" @update:isValid="isValid = $event"/>
    <BaseButton :disabled="!isValid" :color="!isValid ? '#C1C1C1' : '#008CFF' " @click="addTodo" >追加</BaseButton>
</div>
</template>

<script setup lang="ts">
import BaseButton from "./BaseButton.vue"
import BaseInput from "./BaseInput.vue"

import { ref, watch } from 'vue'


const props = defineProps<{
    modelValue: string
}>()

const text = ref<string>(props.modelValue)
const isValid = ref(false)

const emit = defineEmits<{
    (e:'add-todo', newTitle:string):void
}>()

const addTodo = () => {
    if(!isValid.value) return
    emit('add-todo', text.value)

    text.value = ''
}

watch(() => props.modelValue, val => {
  text.value = val
})
</script>


<style scoped>
.add-block{
  height: 32px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;
}

</style>