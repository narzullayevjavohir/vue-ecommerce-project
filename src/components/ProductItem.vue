<script setup>
const { carts } = defineProps(["carts"]);
import { useShoppingStore } from "../stores/index";
const { removeFromCart, increaseCart, decreaseCart } = useShoppingStore();
</script>
<template>
  <div
    v-for="item in carts"
    :key="item.id"
    class="w-[600px] h-48 shadow-lg border rounded-xl flex flex-row items-center mb-10"
  >
    <img
      :src="item.imgUrl"
      alt="fruits"
      class="w-/4 h-full object-cover rounded-l-xl"
    />
    <div class="pl-10 pt-3">
      <h2 class="text-2xl font-semibold">{{ item.title }}</h2>
      <p class="text-lg py-1">
        {{ item.price }} so'm <span class="font-semibold">(1kg)</span>
      </p>
      <button
        @click="removeFromCart(item.id)"
        class="px-4 py-2 mt-2 bg-red-500 rounded text-white"
      >
        Remove
      </button>
    </div>
    <div class="flex justify-around items-center w-48 ml-10">
      <button
        @click="decreaseCart(item.id)"
        class="w-10 h-10 flex justify-center items-center text-xl bg-red-500 text-white pb-1 rounded-full"
      >
        -
      </button>
      <span>{{ item.quantity !== 0 && item.quantity }}</span>
      <button
        @click="increaseCart(item.id)"
        class="w-10 h-10 flex justify-center items-center text-xl bg-red-500 text-white pb-1 rounded-full"
      >
        +
      </button>
    </div>
  </div>
</template>
