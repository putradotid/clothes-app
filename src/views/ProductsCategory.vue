<script setup>
import { onMounted } from 'vue';
import { useCategoriesStore } from '@/stores/categories';

const categoriesStore = useCategoriesStore();

onMounted(() => {
    categoriesStore.fetchCategories();
})
</script>

<template>
    <div class="mt-16">
        <div v-if="categoriesStore.loading">. . .</div>

        <div v-else class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
            <div v-for="item in categoriesStore.categories" :key="item.id"
                class="max-w-sm w-full bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all">
                <div class="relative">
                    <img :src="item.image" :alt="item.slug" class="w-full h-52 object-cover" />
                </div>

                <div class="p-5 space-y-4">
                    <div>
                        <h3 class="text-xl font-bold text-gray-900 line-clamp-1">
                            {{ item.name }}
                        </h3>
                    </div>

                    <button
                        class="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 rounded-lg transition-colors">
                        View Products
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
