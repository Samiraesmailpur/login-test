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
    },
    {
      path: '/employee-management',
      name: 'employee-management',
      component: () => import('../views/HumanResourcesView.vue')
    },
    {
      path: '/employee-engagement',
      name: 'employee-engagement',
      component: () => import('../views/HumanResourcesView.vue')
    },
    {
      path: '/employee-assessment',
      name: 'employee-assessment',
      component: () => import('../views/HumanResourcesView.vue')
    }
  ]
})

export default router




