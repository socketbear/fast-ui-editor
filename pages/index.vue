<script setup lang="ts">
const { $consts } = useNuxtApp();
const testMsg = $consts().test;
</script>

<template>
  <main p="x4 y10" text="center teal-700 dark:gray-200">
    <div>...loading</div>
    <div>{{ testMsg.tText }}</div>
    <page-view />
  </main>
</template>
