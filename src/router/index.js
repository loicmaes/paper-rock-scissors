import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('../views/HomeView')
  },
  {
    path: '/game/:type',
    component: () => import('../views/GameView')
  },
  {
    path: '/result/:char',
    component: () => import('../views/ResultView')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
