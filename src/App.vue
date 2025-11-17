<script setup>
import { RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue'
</script>

<template>
  <header>
    <div class="wrapper fixed top-0 left-0 right-0 z-10">
      <Navbar />
    </div>
  </header>

  <RouterView />
</template>
