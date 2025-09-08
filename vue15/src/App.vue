

<script lang="ts" setup>
import { onMounted, ref } from "vue"
import TodoList from "./components/TodoList.vue"
import TodoAddForm from "./components/TodoAddForm.vue"
import axios from 'axios'

type Todo = {
  userId?:number
  id: number
  title: string
  completed: boolean
}

const todos = ref<Todo[]>([])
const text = ref('')

async function fetchTodos () {  
  try {
    const apiUrl = 'https://jsonplaceholder.typicode.com/todos?_limit=5'
    const response = await axios.get(apiUrl)
    todos.value = response.data
  } catch (error) {
    // エラー時の処理
    console.error(error)
  }}

onMounted(()=>{
  fetchTodos()
})

async function postData(newTitle:string) {
  const apiUrl = 'https://jsonplaceholder.typicode.com/todos'
  const postData = {
    userId:1 ,
    id: todos.value.length + 1,
    title: newTitle,
    completed: false,
  }
  try {
    const response = await axios.post(apiUrl, postData)
    todos.value.push(postData)
    console.log(todos.value)
  } catch (error) {
    console.error(error)
  }
}

async function updateData(todo:Todo) :Promise<void>{
  console.log(todo)
  todo.completed = !todo.completed
  const apiUrl = `https://jsonplaceholder.typicode.com/todos/${todo.id}`
  const updateData = {
    userId:todo.userId,
    id:todo.id,
    title:todo.title,
    completed:todo.completed
  }
  try {
    const response = await axios.put(apiUrl, updateData)
  } catch (error) {
    console.error(error)
  }
}

async function deleteData(id:number) {
  const apiUrl = `https://jsonplaceholder.typicode.com/todos/${id}`
  try {
    const response = await axios.delete(apiUrl)
    todos.value = todos.value.filter(todo => todo.id !== id)
  } catch (error) {
    // エラー時の処理
    console.error(error)
  }
}
</script>

<template>
  <div class="todo-wrapper">
  <h1 class="title">今日やること</h1>
    <TodoAddForm v-model="text" :todos="todos" @add-todo="postData" ></TodoAddForm>
    <TodoList
    :todos="todos"
      @delete-todo="deleteData"
      @toggle-completed="updateData"/>
  </div>
</template>

<style scoped>
.todo-wrapper{
  width: auto;
  padding: 24px;
  border-radius: 24px;
  box-shadow: 0px 6px 6px #0000001A;
  background-color: #FFFFFF;
  margin: 0 auto;
}
.title{
  font-size: 24px;
  margin-bottom: 32px;
}

</style>