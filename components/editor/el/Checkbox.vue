<template>
  <div class="flex flex-wrap w-full">
    <div
      v-if="componentStyle.title !== ''"
      class="leading-8 h-8 px-2"
      :class="`${componentStyle.titleWidth} text-${componentStyle.titleAlign}`"
    >
      {{ componentStyle.title }}
    </div>
    <div
      v-for="(list, idx) in componentStyle.radioCheckLabelList"
      :key="`radioCount_${idx}`"
      class="flex flex-1 flex-wrap"
    >
      <label :class="{ label_disabled: componentStyle.disabled }">
        <input
          type="checkbox"
          :disabled="componentStyle.disabled"
          :value="list"
        />
        {{ list }}
      </label>
    </div>
  </div>
</template>

<script lang="ts">
import { PropType } from "vue";
import { CheckboxStyle } from "~~/types/editor/interfaces";
export default {
  props: {
    componentStyle: {
      type: Object as PropType<CheckboxStyle>,
      default() {
        return {
          width: "",
          title: "",
          titleWidth: "",
          titleAlign: "",
          formWidth: "",
          formAlign: "",
          labelText: "",
          radioCheckLabelList: [],
          disabled: false,
        };
      },
    },
  },
  setup() {},
};
</script>

<style></style>
