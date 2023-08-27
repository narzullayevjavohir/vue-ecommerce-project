<script setup>
import NavbarMenu from "./components/NavbarMenu.vue";
</script>

<template>
  <NavbarMenu />
  <div class="w-full h-full p-20">
    <router-view></router-view>
  </div>
</template>
