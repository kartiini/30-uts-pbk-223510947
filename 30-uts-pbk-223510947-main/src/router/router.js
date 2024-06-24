// router.js
import { createRouter, createWebHistory } from 'vue-router';
import Todos from '../components/Todos.vue';
import Post from '../components/Post.vue';
import Albums from '../components/Albums.vue';
import IsiAlbum from '../components/IsiAlbum.vue'; // Import komponen IsiAlbum.vue

const routes = [
  {
    path: '/',
    redirect: '/todos' // Rute default ke /todos
  },
  {
    path: '/todos',
    name: 'Todos',
    component: Todos
  },
  {
    path: '/post',
    name: 'Post',
    component: Post
  },
  {
    path: '/albums',
    name: 'Albums',
    component: Albums
  },
  {
    path: '/albums/:albumId', // Menyesuaikan path dengan parameter dinamis albumId
    name: 'AlbumDetails', // Menyesuaikan nama rute dengan AlbumDetails
    component: IsiAlbum,
    props: true // Mengaktifkan props untuk menyertakan parameter sebagai props ke komponen IsiAlbum.vue
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
