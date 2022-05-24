<template>
  <div class="flex flex-wrap w-full">
    <div class="leading-8 h-8 px-2" :class="`${componentStyle.titleWidth} text-${componentStyle.titleAlign}`">
      {{ componentStyle.title === '' ? 'Text' : componentStyle.title }}
    </div>
  </div>
</template>

<script lang="ts">
import { PropType } from "vue";
import { BaseStyle } from "~~/types/editor/interfaces";
export default {
  props: {
    componentStyle: {
      type: Object as PropType<BaseStyle>,
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
  setup() { },
};
</script>

<style>
</style>
