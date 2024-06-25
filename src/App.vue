<!-- App.vue -->
<template>
  <q-layout view="hHh lpR fFf">

    <!-- Header with Toolbar and Tabs -->
    <q-header elevated class="bg-primary text-white" height-hint="98">
      <q-toolbar>
        <q-btn flat round dense icon="menu" class="q-mr-sm" />
        <q-toolbar-title>
          Title <!-- Hanya teks tanpa logo -->
        </q-toolbar-title>
        <q-space />
      </q-toolbar>

      <q-tabs align="left" v-model="tab" class="text-white">
        <q-route-tab to="/todos" label="Todos" />
        <q-route-tab to="/post" label="Post" />
        <q-route-tab to="/albums" label="Albums" />
      </q-tabs>
    </q-header>

    <!-- Page Container with Router View -->
    <q-page-container class="main-container">
      <router-view />
    </q-page-container>

    <!-- Footer -->
    <q-footer elevated class="bg-grey-8 text-white">
      <q-toolbar>
        <q-toolbar-title>
          <div>Title</div> <!-- Hanya teks tanpa logo -->
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>

  </q-layout>
</template>

<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';

const tab = ref(useRoute().path);
</script>

<style scoped>
.main-container {
  background-image: url('./assets/tik.jpg');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 100vh;
  background-attachment: fixed; /* Menjadikan background tetap pada posisi */
}

/* Mengubah warna teks tab menjadi putih */
.text-white .q-tab__label {
  color: white;
}
</style>
