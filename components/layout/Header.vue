<template>
  <div class="flex items-center border-b border-gray-400">
    <p class="mx-4 font-bold">Fast UI Editor</p>
    <NuxtLink to="/editor">
      <p class="mx-2 text-gray-500 cursor-pointer hover:text-green-500">
        Editor
      </p>
    </NuxtLink>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped></style>
