import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/talent-acqusition',
      name: 'home1',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/human-resources',
      name: 'home2',
      component: () => import('../views/HomeView.vue')
    }
  ]
})

export default router
