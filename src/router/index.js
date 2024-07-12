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
      name: 'talent-acqusition',
      component: () => import('../views/TalentAcquisitionView.vue')
    },
    {
      path: '/human-resources',
      name: 'home2',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/all-responses',
      name: 'all-responses',
      component: () => import('../views/AllResponsesView.vue')
    }
  ]
})

export default router




