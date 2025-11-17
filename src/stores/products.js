import { defineStore } from "pinia";
import axios from "axios";

export const useProductsStore = defineStore("products", {
    state: () => ({
        products: [],
        product: null,
        loading: false,
    }),

    actions: {
        async fetchProducts() {
            this.loading = true;
            try {
                const response = await axios.get("https://api.escuelajs.co/api/v1/products");
                this.products = response.data;
            } catch (error) {
                console.error("Error fetching products:", error);
            } finally {
                this.loading = false;
            }
        },

        async fetchProductById(id) {
            this.loading = true;
            try {
                const response = await axios.get(`https://api.escuelajs.co/api/v1/products/${id}`);
                this.product = response.data;
            } catch (error) {
                console.error("Error fetching product by ID:", error);
            } finally {
                this.loading = false;
            }
        }
    }
});