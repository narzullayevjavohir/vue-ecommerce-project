<script setup>
import ProductItem from "./ProductItem.vue";
import { useShoppingStore } from "../stores/index";
const { carts } = useShoppingStore();
</script>
<template>
  <div>
    <ProductItem :carts="carts" />
  </div>
</template>
