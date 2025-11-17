import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/Home.vue'
import ProductsView from '../views/Products.vue'
import ProductDetailView from '../views/ProductDetail.vue'
import ProductsCategoryView from '../views/ProductsCategory.vue'
import CartView from '../views/Cart.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/products',
      name: 'products',
      component: ProductsView,
    },
    {
      path: '/product-detail',
      name: 'products detail',
      component: ProductDetailView,
    },
    {
      path: '/products-category',
      name: 'products category',
      component: ProductsCategoryView,
    },
    {
      path: '/cart',
      name: 'cart',
      component: CartView,
    },
  ],
})

export default router
