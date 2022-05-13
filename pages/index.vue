<script setup lang="ts">
const { $t } = useNuxtApp();
const testMsg = $t().test;
</script>

<template>
  <main p="x4 y10" text="center teal-700 dark:gray-200">
    <div>...loading</div>
    <div>{{ testMsg.tText }}</div>
    <page-view />
  </main>
</template>
