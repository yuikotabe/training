<template>
<ul>
    <li class="todo-item" v-for="todo in todos">
      <p class="todo-text" :class="{ completed:todo.completed}">{{ todo.title }}</p>
      <div class="todo-buttons">
        <BaseButton color="#FF3700" @click="$emit('delete-todo', todo.id)" >削除</BaseButton>
        <BaseButton :color= "todo.completed ? '#C1C1C1': '#008CFF'" @click="emit('toggle-completed',todo)">完了</BaseButton>
      </div>
    </li>
  </ul>
</template>

<script setup lang="ts">
import BaseButton from './BaseButton.vue';

type Todo = {
  id: number
  title: string
  completed: boolean
}

const props = defineProps<{
    todos: Todo[]
}>()

const emit = defineEmits<{
  (e: 'delete-todo', id: number): void
  (e: 'toggle-completed', todo:Todo): Promise<void>
}>()

</script>

<style scoped>

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
.todo-text{
  line-height: 32px;
  font-size: 16px;
}
.completed{
  text-decoration: line-through;
}

</style>