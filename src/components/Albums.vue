<template>
  <div class="album-container">
    <h1>Daftar Album</h1>
    <div class="album-grid">
      <div v-for="album in albums" :key="album.id" class="album-card" @click="goToAlbum(album.id)">
        <img :src="album.coverPhoto" :alt="album.title" class="album-cover">
        <div class="album-info">
          <h2>{{ album.title }}</h2>
          <p>{{ album.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const albums = ref([]);
const router = useRouter();

const fetchAlbums = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/albums');
    if (!response.ok) {
      throw new Error('Failed to fetch albums');
    }
    albums.value = await response.json();
  } catch (error) {
    console.error(error);
  }
};

onMounted(fetchAlbums);

const goToAlbum = (albumId) => {
  router.push({ name: 'AlbumDetails', params: { albumId } });
};
</script>

<style scoped>
.album-container {
  max-width: 900px;
  margin: 0 auto;
  padding: 20px;
}

.album-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.album-card {
  border: 1px solid #fff;
  background-color: #fff;
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
  width: calc(33.333% - 20px);
  box-sizing: border-box;
  transition: transform 0.3s;
}

.album-card:hover {
  transform: scale(1.05);
}

.album-cover {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.album-info {
  padding: 10px;
}

h2 {
  margin-top: 0;
  font-size: 18px;
}
</style>
