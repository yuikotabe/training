import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
const routes: RouteRecordRaw[] = [
  {
    path: '/home',
    name: 'home',
    component: () => import('../views/Home.vue'),
  },
  {
    path: '/users/',
    name: 'users',
    component: () => import('../views/Users.vue'),
  },
  {
    path: '/user/:id',
    name: 'userDetail',
    component: () => import('../views/UserDetail.vue'),
  },
]
const router = createRouter({
  history: createWebHistory(),
  routes,
})
export default router