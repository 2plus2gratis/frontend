import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      // route level code-splitting
      // this generates a separate chunk (Dashboard.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/DashboardView.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/RegisterView.vue')
    },
    {
      path: '/Event',
      name: 'Event',
      component: () => import('../views/EventAddEditView.vue')
    },
    {
      path: 'ForgotPassword',
      name: 'ForgotPassword',
      component: () => import('../views/ForgotPassword.vue')
    }
  ]
})

export default router
