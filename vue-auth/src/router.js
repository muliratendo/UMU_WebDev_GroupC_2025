// src/router.js
import { createRouter, createWebHistory } from 'vue-router'
import accHome from './components/accHome.vue'
import siteLogin from './components/siteLogin.vue'
import siteRegister from './components/siteRegister.vue'

const routes = [
  { path: '/', component: accHome },
  { path: '/login', component: siteLogin },
  { path: '/register', component: siteRegister },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
