<template>
  <div class="flex flex-wrap w-full">
    <div
      v-if="componentStyle.title !== ''"
      class="leading-8 h-8 px-2"
      :class="`${componentStyle.titleWidth} text-${componentStyle.titleAlign}`"
    >
      {{ componentStyle.title }}
    </div>
    <div class="flex flex-1" :class="`justify-${componentStyle.formAlign}`">
      <button
        :class="`${componentStyle.formWidth} ${componentStyle.buttonKind}`"
        type="button"
        :disabled="componentStyle.disabled"
      >
        {{ componentStyle.buttonText }}
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { PropType } from "vue";
import { ButtonStyle } from "~~/types/editor/interfaces";
export default {
  props: {
    componentStyle: {
      type: Object as PropType<ButtonStyle>,
      default() {
        return {
          width: "",
          title: "",
          titleWidth: "",
          titleAlign: "",
          formWidth: "",
          formAlign: "",
          labelText: "",
          buttonText: "",
          buttonKind: "",
          disabled: false,
        };
      },
    },
  },
  setup() {},
};
</script>

<style></style>
