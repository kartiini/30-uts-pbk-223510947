<template>
  <div class="todos-container">
    <h1 class="title">List Kegiatan</h1>
    <div class="form-container">
      <input class="input-field" placeholder="Tambahkan kegiatan" v-model="newTodo">
      <button class="add-button" @click="addTodo">Tambahkan</button>
    </div>
    <ul class="todos-list">
      <li v-for="todo in filteredTodos" :key="todo.id" class="todo-item">
        <input type="checkbox" v-model="todo.done">
        <span :class="{ 'done': todo.done }">{{ todo.text }}</span>
        <button class="remove-button" @click="removeTodo(todo)">Hapus</button>
      </li>
    </ul>
    <button class="toggle-button" @click="hideCompleted = !hideCompleted">
      {{ hideCompleted ? 'Tampilkan Semua' : 'Sembunyikan yang Selesai' }}
    </button>
    <p class="total-todos">Jumlah tugas yang belum selesai: {{ remainingTodos }}</p>
  </div>
</template>


<script setup>
import { ref, computed } from 'vue';

const todos = ref([
  { id: 1, text: 'Belajar Vue.js', done: false },
  { id: 2, text: 'Mengerjakan Tugas', done: true },
  { id: 3, text: 'Bermain Game', done: false }
]);

const newTodo = ref('');
const hideCompleted = ref(false);

const addTodo = () => {
  if (newTodo.value.trim() !== '') {
    todos.value.push({ id: Date.now(), text: newTodo.value, done: false });
    newTodo.value = '';
  }
};

const filteredTodos = computed(() => {
  return hideCompleted.value ? todos.value.filter(todo => !todo.done) : todos.value;
});

const removeTodo = todo => {
  const index = todos.value.indexOf(todo);
  if (index !== -1) {
    todos.value.splice(index, 1);
  }
};

const remainingTodos = computed(() => {
  return todos.value.filter(todo => !todo.done).length;
});

const totalTodos = computed(() => todos.value.length);
</script>

<style scoped>
.todos-container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: white; /* Mengubah warna background */
  border-radius: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.title {
  text-align: center;
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 20px;
  color: #171717;
}

.total-todos {
  text-align: center;
  color: #666; /* Warna teks jumlah tugas */
  margin-bottom: 10px;
}

.form-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
}

.input-field {
  flex: 1;
  border: 2px solid black; /* Warna hitam dan ketebalan 2px */
  border-radius: 8px;
  padding: 12px;
  margin-right: 10px;
  font-size: 16px;
}

.add-button {
  border: none;
  border-radius: 8px;
  background-color: #4caf50;
  color: #ffffff;
  padding: 12px 24px;
  cursor: pointer;
  font-size: 16px;
}

.todos-list {
  list-style: none;
  padding: 0;
}

.todo-item {
  display: flex;
  align-items: center;
  margin-bottom: 16px;
}

.todo-text {
  flex: 1;
  margin-left: 16px;
  font-size: 18px;
  color: #333333;
}

.done {
  text-decoration: line-through;
}

.remove-button {
  background-color: #f44336;
  color: #ffffff;
  border: none;
  border-radius: 8px;
  padding: 8px 16px;
  cursor: pointer;
  font-size: 16px;
}

.remove-button:hover {
  background-color: #d32f2f;
}

.toggle-button {
  display: block;
  margin-top: 20px;
  border: none;
  background-color: #2196f3;
  color: #ffffff;
  padding: 12px 24px;
  cursor: pointer;
  font-size: 16px;
}
</style>
