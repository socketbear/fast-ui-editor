<template>
  <draggable
    :v-model="mArr"
    group="people"
    @start="drag = true"
    @end="drag = false"
    item-key="id"
  >
    <template #item="{ element }">
      <div>{{ element.name }}</div>
    </template>
  </draggable>
</template>

<script>
import draggable from "vuedraggable";
export default {
  components: {
    draggable,
  },
  setup() {
    const mArr = reactive([
      { name: "TEST1", id: 1 },
      { name: "TEST2", id: 2 },
      { name: "TEST3", id: 3 },
    ]);

    const drag = ref(false);

    return { mArr, drag };
  },
};
</script>

<style scoped></style>
