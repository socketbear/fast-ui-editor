<template>
  <div class="flex flex-col h-screen">
    <layout-header class="flex-none h-12" />
    <main class="flex-1 min-h-0">
      <slot />
    </main>
    <layout-footer class="flex-none h-12" />
  </div>
</template>
