<script setup>
import { onMounted } from 'vue';
import { useProductsStore } from '@/stores/products';

const productsStore = useProductsStore();

onMounted(() => {
  productsStore.fetchProducts();
});
</script>

<template>
  <div class="mt-16">
    <div v-if="productsStore.loading">. . .</div>

    <div v-else class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
      <div v-for="item in productsStore.products" :key="item.id"
        class="max-w-sm w-full bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all">
        <div class="relative">
          <img :src="item.images[0]" class="w-full h-52 object-cover" />
        </div>

        <div class="p-5 space-y-4">
          <div>
            <h3 class="text-xl font-bold text-gray-900 line-clamp-1">
              {{ item.title }}
            </h3>
            <p class="text-gray-500 mt-1 line-clamp-1">
              {{ item.description }}
            </p>
          </div>

          <div class="flex justify-between items-center">

            <!-- Price -->
            <div class="space-y-1">
              <p class="text-2xl font-bold text-gray-900">
                ${{ item.price }}
              </p>
              <p class="text-sm text-gray-500 line-through">
                ${{ (item.price * 1.3).toFixed(2) }}
              </p>
            </div>

            <!-- Fake rating (karena API tidak punya rating) -->
            <div class="flex items-center gap-1">
              <div class="text-yellow-400">★★★★</div>
              <div class="text-gray-300">★</div>
              <span class="text-sm text-gray-600 ml-1">(10)</span>
            </div>
          </div>

          <button
            class="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 rounded-lg transition-colors">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
