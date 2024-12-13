import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/category/:name',
      name: 'category',
      component: () => import('../views/CategoryView.vue'),
      props: (route) => ({ category: route.params.name }),
    },
  ],
});

export default router;
