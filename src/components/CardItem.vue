<script setup>
const { products } = defineProps(["products"]);
import { useShoppingStore } from "../stores/index";
const { addToCart } = useShoppingStore();
</script>
<template>
  <div
    v-for="item in products"
    :key="item.id"
    class="w-72 h-[400px] shadow-lg border rounded-xl"
  >
    <img
      :src="item.imgUrl"
      alt="fruits"
      class="w-full h-3/5 object-cover rounded-t-xl"
    />
    <div class="pl-6 pt-3">
      <h2 class="text-2xl font-semibold">{{ item.title }}</h2>
      <p class="text-lg py-1">
        {{ item.price }} so'm <span class="font-semibold">(1kg)</span>
      </p>
      <button
        @click="addToCart(item)"
        class="px-4 py-2 mt-2 bg-green-500 rounded text-white"
      >
        Add To Cart
      </button>
    </div>
  </div>
</template>
