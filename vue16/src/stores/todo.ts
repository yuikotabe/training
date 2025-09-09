import { defineStore } from "pinia";

type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};
type State = {
  todos: Todo[];
  nextId: number;
};

export const useTodoStore = defineStore("todo", {
  state: (): State => ({
    todos: [],
    nextId: 201,
  }),
  getters: {
    todoList(state): Todo[] {
      return state.todos;
    },
  },
  actions: {
    async getTodos(): Promise<void> {
      const API_URL = "https://jsonplaceholder.typicode.com/todos?_limit=5";
      const response = await fetch(API_URL);
      const data: Todo[] = await response.json();
      this.todos = data;
    },
    async postTodo(newTitle: string) {
      const apiUrl = "https://jsonplaceholder.typicode.com/todos";
      const postData = {
        userId: 1,
        id: this.nextId++,
        title: newTitle,
        completed: false,
      };
      try {
        const response = await fetch(apiUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(postData),
        });
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        // const data = await response.json();
        this.todos.push(postData);
      } catch (error) {
        console.error(error);
      }
    },
    async updateTodo(todo: Todo): Promise<void> {
      todo.completed = !todo.completed;
      const apiUrl = `https://jsonplaceholder.typicode.com/todos/${todo.id}`;
      try {
        const response = await fetch(apiUrl, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            completed: todo.completed,
          }),
        });
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const updated = await response.json();
        console.log("Updated Todo:", updated);
      } catch (error) {
        console.error(error);
      }
    },
    async deleteTodo(todo: Todo) {
      const apiUrl = `https://jsonplaceholder.typicode.com/todos/${todo.id}`;
      try {
        const response = await fetch(apiUrl, {
          method: "DELETE",
        });
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
      } catch (error) {
        // エラー時の処理
        console.error(error);
      }
      this.todos = this.todos.filter((t) => t.id !== todo.id);
    },
  },
});
