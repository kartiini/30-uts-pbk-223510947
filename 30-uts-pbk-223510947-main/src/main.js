// main.js
import { createApp } from 'vue';
import { Quasar } from 'quasar';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router/router.js';

// Import icon libraries
import '@quasar/extras/material-icons/material-icons.css';

// Import Quasar css
import 'quasar/src/css/index.sass';

const app = createApp(App);

// Integrate Quasar
app.use(Quasar, {
  plugins: {}, // Import Quasar plugins and add here
});

// Integrate Pinia
const pinia = createPinia();
app.use(pinia);

// Integrate Router
app.use(router);

// Mount the app
app.mount('#app');
