import { createRouter, createWebHistory } from 'vue-router'
import { ROUTES } from '@/config/constants'

// 路由配置 - 使用懒加载优化首屏性能
const routes = [
  {
    path: ROUTES.HOME,
    component: () =>
      import(/* webpackChunkName: "home" */ '@/views/RightFirst.vue'),
  },
  {
    path: ROUTES.CONTENT,
    component: () =>
      import(/* webpackChunkName: "content" */ '@/views/RightSecond.vue'),
  },
  {
    path: ROUTES.FAQ,
    component: () =>
      import(/* webpackChunkName: "faq" */ '@/views/RightThird.vue'),
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
