import { defineStore } from "pinia";
import axios from "axios";

export const useCategoriesStore = defineStore("categories", {
    state: () => ({
        categories: [],
        category: null,
        loading: false,
    }),

    actions: {
        async fetchCategories() {
            this.loading = true;
            try {
                const response = await axios.get("https://api.escuelajs.co/api/v1/categories");
                this.categories = response.data;
            } catch (error) {
                console.error("Error fetching categories:", error);
            } finally {
                this.loading = false;
            }
        }
    }
})