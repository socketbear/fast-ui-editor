<template>
  <div class="flex flex-wrap w-full">
    <div
      v-if="componentStyle.title !== ''"
      class="leading-8 h-8 px-2"
      :class="`${componentStyle.titleWidth} text-${componentStyle.titleAlign}`"
    >
      {{ componentStyle.title }}
    </div>
    <input
      v-model="text"
      :class="`${componentStyle.formWidth}`"
      :type="`${componentStyle.inputType}`"
      :placeholder="`${componentStyle.placeholder}`"
      :disabled="componentStyle.disabled"
    />
  </div>
</template>

<script lang="ts">
import { PropType } from "vue";
import { InputStyle } from "~~/types/editor/interfaces";
export default {
  props: {
    componentStyle: {
      type: Object as PropType<InputStyle>,
      default() {
        return {
          width: "",
          title: "",
          titleWidth: "",
          titleAlign: "",
          formWidth: "",
          formAlign: "",
          placeholder: "",
          labelText: "",
          inputType: "text",
          disabled: false,
        };
      },
    },
  },
  setup() {},
};
</script>

<style></style>
