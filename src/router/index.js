import { createRouter, createWebHashHistory } from 'vue-router'

import productListRouter from '../modules/productList/router'

const routes = [
  {
    path: '/',
    ...productListRouter
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
