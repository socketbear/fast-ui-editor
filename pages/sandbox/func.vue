<template>
  <div>
    <div>{{ testMsg.tText }}</div>
    <page-view />
  </div>
</template>

<script setup lang="ts">
const { $consts } = useNuxtApp();
const testMsg = $consts().test;
</script>

<style scoped></style>
