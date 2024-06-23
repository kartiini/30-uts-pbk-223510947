<template>
  <div class="post-container">
    <h1>Daftar Post</h1>
    <form @submit.prevent="submitSelection">
      <label for="post-select">Pilih Post:</label>
      <select v-model="selectedPostId" id="post-select">
        <option v-for="post in posts" :key="post.id" :value="post.id">{{ post.title }}</option>
      </select>
      <button type="submit" class="submit-button">Submit</button>
    </form>
    <div v-if="submitted">
      <h2>{{ selectedPost.title }}</h2>
      <p>{{ selectedPost.body }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const posts = ref([]);
const selectedPostId = ref(null);
const submitted = ref(false);
const selectedPost = ref({});

const fetchPosts = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    if (!response.ok) {
      throw new Error('Failed to fetch posts');
    }
    posts.value = await response.json();
  } catch (error) {
    console.error(error);
  }
};

fetchPosts();

const submitSelection = () => {
  if (selectedPostId.value) {
    selectedPost.value = posts.value.find(post => post.id === selectedPostId.value);
    submitted.value = true;
  }
};
</script>

<style scoped>
.post-container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  background-color: white; /* Menambahkan latar belakang putih */
}

form {
  margin-bottom: 20px;
}

.submit-button {
  margin-top: 10px;
  background-color: #2196f3; /* Warna biru untuk tombol submit */
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 5px;
}

.submit-button:hover {
  background-color: #0d8bf0; /* Warna biru yang sedikit lebih gelap saat tombol dihover */
}
</style>
