<script setup>
import { onMounted } from 'vue';
import { useProductsStore } from '@/stores/products';

const productsStore = useProductsStore();

onMounted(() => {
  productsStore.fetchProducts();
});
</script>

<template>
  <div>
    <h1>Product</h1>

    <div v-if="productsStore.loading">. . .</div>

    <div v-else>
      <div v-for="item in productsStore.products" :key="item.id" class="p-4 border rounded">
        <img :src="item.images[0]" class="w-32 h-32 object-cover" />
        <h3>{{ item.title }}</h3>
        <p>${{ item.price }}</p>
      </div>
    </div>
  </div>
</template>
