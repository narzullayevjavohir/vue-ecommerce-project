<script setup>
import CardItem from "@/components/CardItem.vue";
import productItems from "@/data/items.json";
</script>
<template>
  <div class="grid grid-cols-3 gap-10">
    <CardItem :products="productItems" />
  </div>
</template>
