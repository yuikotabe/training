<script setup lang="ts">
import { reactive, ref } from 'vue'


type Person = {
  name: string
  age: number
}

const person = ref<Person>({name:'山田太郎',age:20})

</script>
<template>
  <p>名前: {{ person.name }}</p>
  <p>年齢: {{ person.age }}</p>
</template>