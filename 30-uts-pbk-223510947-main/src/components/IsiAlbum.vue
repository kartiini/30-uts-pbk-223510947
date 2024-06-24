<template>
  <div class="album-details">
    <h2>{{ album.title }}</h2>
    <p>{{ album.description }}</p>
    <div class="photo-list">
      <div v-for="photo in photos" :key="photo.id" class="photo-item" @click="showFullSize(photo.url)">
        <img :src="photo.thumbnailUrl" :alt="photo.title" class="photo-thumbnail">
        <p>{{ photo.title }}</p>
      </div>
    </div>
    <!-- Dummy content to simulate scroll -->
    <div style="height: 1000px;"></div>
  </div>
</template>

<script setup>
import { ref, onMounted, defineProps } from 'vue';

const props = defineProps({
  albumId: Number // Mendefinisikan props albumId sebagai Number
});

const photos = ref([]);
const album = ref({});

const fetchAlbum = async () => {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/albums/${props.albumId}`);
    if (!response.ok) {
      throw new Error('Failed to fetch album details');
    }
    album.value = await response.json();
  } catch (error) {
    console.error(error);
  }
};

const fetchPhotos = async () => {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${props.albumId}`);
    if (!response.ok) {
      throw new Error('Failed to fetch photos');
    }
    photos.value = await response.json();
  } catch (error) {
    console.error(error);
  }
};

onMounted(() => {
  fetchAlbum();
  fetchPhotos();
});

const showFullSize = (photoUrl) => {
  window.open(photoUrl, '_blank');
};
</script>

<style scoped>
.album-details {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
}

.photo-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 10px;
}

.photo-item {
  cursor: pointer;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  transition: transform 0.3s;
  background-color: #f0f0f0; /* Warna latar belakang untuk foto */
}

.photo-item:hover {
  transform: scale(1.05);
}

.photo-thumbnail {
  width: 100%;
  height: auto;
  object-fit: cover;
}
</style>
