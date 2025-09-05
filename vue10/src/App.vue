

<script lang="ts" setup>
import { ref } from "vue"
import TodoList from "./components/TodoList.vue"
import TodoAddForm from "./components/TodoAddForm.vue"

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

const text = ref('')

const addTodo = (newTitle:string) => {
  todos.value.push({
    id: todos.value.length + 1,
    title: newTitle,
    completed: false,
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
    <TodoAddForm v-model="text" :todos="todos" @add-todo="addTodo" ></TodoAddForm>
    <TodoList
    :todos="todos"
      @delete-todo="delateTodo"
      @toggle-completed="completedTodo"/>
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
.title{
  font-size: 24px;
  margin-bottom: 32px;
}

</style>