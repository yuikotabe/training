<template>
        <input class="todo-input" v-model="text"></input>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue';

const props = defineProps<{
    modelValue: string
}>()

const emit = defineEmits<{
    (e: 'update:modelValue', value: string): void
    (e: 'update:isValid', value: boolean): void
}>()

const text = ref<string>(props.modelValue)

watch(() => props.modelValue, (newVal) => {
  text.value = newVal
})

watch(text,(val) => {
    emit('update:modelValue',val)
})

const isValid = computed(() => text.value.trim() !== '')

watch(isValid,(val)=>{
    emit('update:isValid',val)
})

</script>

<style scoped>
.todo-input{
  height: 100%;
  width: 100%;
  font-size: 16px;
  padding: 8px;
}
</style>