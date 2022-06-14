<template>
  <div class="w-2/3 mx-auto">
    <p class="text-2xl font-bold">API TEST</p>
    <div>
      <div class="flex">
        <p class="font-bold mr-12">list</p>
        <button @click="getProjects">가져오기</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    const project = reactive({
      list: []
    });
    const getProjects = async () => {
      const controller = new AbortController()
      // 5 second timeout:
      const timeoutId = setTimeout(() => controller.abort(), 3000)

      const prjs = await $fetch('/api/project', { signal: controller.signal })
      console.log('prjs :>> ', prjs);
    }
    return { getProjects }
  }
}
</script>

<style scoped>
</style>