<template>
  <header class="flex items-center border-b border-gray-400">
    <NuxtLink to="/">
      <p class="mx-4 font-bold">Fast UI Editor</p>
    </NuxtLink>
    <NuxtLink to="/editor">
      <p class="mx-2 text-gray-500 cursor-pointer hover:text-green-500">
        Editor
      </p>
    </NuxtLink>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped></style>
