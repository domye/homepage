import { createRouter, createWebHistory } from 'vue-router'
import { ROUTES } from '@/config/constants'

const routes = [
  {
    path: ROUTES.HOME,
    component: () => import('@/views/RightFirst.vue'),
  },
  {
    path: ROUTES.CONTENT,
    component: () => import('@/views/RightSecond.vue'),
  },
  {
    path: ROUTES.FAQ,
    component: () => import('@/views/RightThird.vue'),
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: ROUTES.HOME,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
