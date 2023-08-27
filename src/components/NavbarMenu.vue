<template>
  <nav class="w-full h-16 bg-red-500 flex justify-around items-center">
    <router-link to="/">
      <h1 class="text-2xl text-white font-bold tracking-wide">Fruits Shop</h1>
    </router-link>
    <ul class="flex gap-10">
      <router-link to="/shopping">
        <li class="text-white font-semibold">Shop</li>
      </router-link>
    </ul>
  </nav>
</template>
