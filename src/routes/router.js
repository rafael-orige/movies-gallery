import { createRouter, createWebHistory } from 'vue-router';

import Home from '@/screens/Home.screen.vue';
import Movies from '@/screens/Movies.screen.vue';
import Shows from '@/screens/Shows.screen.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/movies', name: 'Movies', component: Movies },
  { path: '/shows', name: 'Shows', component: Shows },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
