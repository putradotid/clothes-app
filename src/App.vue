<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue'
</script>

<template>
  <header>
    <div class="wrapper">
      <Navbar />

      <nav class="bg-gray-900 text-white p-4 flex gap-4">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/products">Product</RouterLink>
        <RouterLink to="/products-category">Category</RouterLink>
        <RouterLink to="/cart">Cart</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>
