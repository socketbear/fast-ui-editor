<template>
  <main class="flex flex-col h-screen">
    <layout-header class="flex-none h-12" />
    <div class="flex-1 min-h-0">
      <slot />
    </div>
    <layout-footer class="flex-none h-12" />
  </main>
</template>
