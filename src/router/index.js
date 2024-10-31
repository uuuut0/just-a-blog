import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/bloghub',
      name: 'bloghub',
      component: ()=> import('@/views/BlogHubView.vue')
    },
    {
      path: '/aboutus',
      name: 'aboutus',
      component: ()=> import('@/views/AboutUsView.vue')
    },
    {
      path: '/topics',
      name: 'topics',
      component: ()=> import('@/views/TopicsView.vue')
    },
    {
      path: '/eventinfo',
      name: 'eventinfo',
      component: ()=> import('@/views/EventInfoView.vue')
    },

  ]
})

export default router
