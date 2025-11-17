<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="flex flex-col md:flex-row md:items-center md:justify-between p-4 bg-gray-800 text-white">
    <div>
      <h1 class="text-2xl font-bold">Clothes Store</h1>
    </div>
    <nav class="space-x-4">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/products">Product</RouterLink>
      <RouterLink to="/products-category">Category</RouterLink>
      <RouterLink to="/cart">
        <font-awesome-icon class="text-xl" icon="fa-solid fa-cart-arrow-down" />
      </RouterLink>
    </nav>

  </div>
</template>
