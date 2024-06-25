
import { createRouter, createWebHistory } from 'vue-router';
import Todos from '../views/Todos.vue';
import Post from '../views/Post.vue';
import Albums from '../views/Albums.vue';
import IsiAlbum from '../views/IsiAlbum.vue';

const routes = [
  {
    path: '/',
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
    path: '/albums/:albumId',
    name: 'AlbumDetails',
    component: IsiAlbum,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
