<script setup lang="ts">
const { $consts } = useNuxtApp();
const testMsg = $consts().test;
</script>

<template>
  <div class="w-256 mx-auto">
    <div class="text-2xl font-bold">Home</div>
    <p class="font-bold">Fast UI Editor!</p>
    <p>use it!</p>
  </div>
</template>
