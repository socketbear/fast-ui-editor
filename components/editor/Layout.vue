<template>
  <div></div>
</template>

<script lang="ts">
import draggable from "vuedraggable";
export default {
  name: "ComponentEditorLayout",
  components: {
    draggable,
  },
  props: {
    propName: {
      type: String,
      default: () => "",
    },
    value: {
      type: Object,
      default: () => [],
    },
  },
  setup() {},
};
</script>

<style scoped></style>
