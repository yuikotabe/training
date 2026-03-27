

<script lang="ts" setup>
import { computed, ref } from "vue"
import BaseButton from "./components/BaseButton.vue"

type Todo = {
  id: number
  title: string
  completed: boolean
}

const todos = ref<Todo[]>([
  {
    id: 1,
    title: 'Todoのタイトル1',
    completed: true,
  },
  {
    id: 2,
    title: 'Todoのタイトル2',
    completed: false,
  },
  {
    id: 3,
    title: 'Todoのタイトル3',
    completed: false,
  },
])
const text = ref<string>('')

const isValid= computed(()=>{
  return text.value

})

const addTodo = () => {

  todos.value.push({
  id:todos.value.length +1,
  title:text.value,
  completed: false
})

 text.value = ''
}

const delateTodo = (id:number) => {
  todos.value = todos.value.filter( todo => todo.id !== id)
}

const completedTodo = (id:number) => {
 const todo = todos.value.find(t => t.id === id)
 if(todo){
 todo.completed = !todo.completed
 }
 console.log(todo)
}

</script>

<template>
  <div class="todo-wrapper">
  <h1 class="title">今日やること</h1>
  <div class="add-block">
    <input class="todo-input" v-model="text"></input>
    <BaseButton :disabled="!isValid" :color="!isValid ? '#C1C1C1' : '#008CFF' " @click="addTodo" >追加</BaseButton>
  </div>
    <ul>
    <li class="todo-item" v-for="todo in todos">
      <p class="todo-text" :class="{ completed:todo.completed}">{{ todo.title }}</p>
      <div class="todo-buttons">
        <BaseButton color="#FF3700" @click="delateTodo(todo.id)">削除</BaseButton>
        <BaseButton :color= "todo.completed ? '#C1C1C1': '#008CFF'" @click="completedTodo(todo.id)">完了</BaseButton>
      </div>
    </li>
  </ul>
  </div>
</template>

<style scoped>
.todo-wrapper{
  width: 375px;
  padding: 24px;
  border-radius: 24px;
  box-shadow: 0px 6px 6px #0000001A;
  background-color: #FFFFFF;
  margin: 0 auto;
}
.add-block{
  height: 32px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;
}
.todo-item{
  height: 48px;
  padding: 8px 0;
  display: flex;
  justify-content: space-between;
  text-align: center;
  border-bottom: 1px solid #CDCDCD;
}
.todo-buttons{
  display: flex;
  gap: 20px
}
.todo-input{
  height: 100%;
  width: 250px;
  font-size: 16px;
  padding: 8px;
}
.title{
  font-size: 24px;
  margin-bottom: 32px;
}

.todo-text{
  line-height: 32px;
  font-size: 16px;
}
.completed{
  text-decoration: line-through;
}

</style>