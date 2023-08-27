<script setup>
import ProductList from "../components/ProductList.vue";
import { useShoppingStore } from "../stores/index";
const { totalItems, totalPrices } = useShoppingStore();
</script>
<template>
  <div class="w-full h-full flex justify-between items-center px-10 relative">
    <div class="grid grid-cols-1">
      <ProductList />
    </div>
    <div
      class="w-72 h-72 rounded shadow-lg border absolute top-10 right-20 p-10"
    >
      <h2 class="text-2xl font-bold mb-3">Total Products</h2>
      <p class="text-lg">
        Total Price: <span class="font-semibold"> {{ totalPrices }} so'm</span>
      </p>
      <p class="text-lg">
        Total Products: <span class="font-semibold"> {{ totalItems }} kg</span>
      </p>
    </div>
  </div>
</template>
