import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: ()=> import('../components/Home.vue')
    },
    {
      path: '/account',
      name: 'Account',
      component: () => import('../components/Account.vue')
    },
  ]
})

export default router
