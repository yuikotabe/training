

<script lang="ts" setup>
import { onMounted, ref } from "vue"
import TodoList from "./components/TodoList.vue"
import TodoAddForm from "./components/TodoAddForm.vue"
import { useTodoStore } from "./stores/todo";

type Todo = {
  userId:number
  id: number
  title: string
  completed: boolean
}
const todoStore = useTodoStore()
const todos = ref<Todo[]>([])
const text = ref('')

async function getTodoList() {
  try {
    await todoStore.getTodos()
  } catch (error) {
    console.log(error)
    alert('データの取得に失敗しました')
  }
}

onMounted(()=>{
  getTodoList()
})

async function postData(newTitle:string) {
todoStore.postTodo(newTitle)
}

async function updateData(todo:Todo) {
todoStore.updateTodo(todo)
}

async function deleteData(todo:Todo) {
  todoStore.deleteTodo(todo)
}

</script>

<template>
  <div class="todo-wrapper">
  <h1 class="title">今日やること</h1>
    <TodoAddForm v-model="text" :todos="todos" @add-todo="postData" ></TodoAddForm>
    <TodoList
    :todos="todoStore.todos"
      @delete-todo="deleteData"
      @toggle-completed="updateData"/>
  </div>
</template>

<style scoped>
.todo-wrapper{
  width: 700px;
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