import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '../components/HomePage.vue'
import StockPage from '../components/StockPage.vue'
import TrackingPage from '../components/TrackingPage.vue'

const routes = [
  { path: '/', component: HomePage },
  { path: '/stock', component: StockPage },
  { path: '/tracking', component: TrackingPage },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
