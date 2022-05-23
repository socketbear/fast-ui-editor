<template>
  <div class="flex flex-wrap w-full">
    <!-- 타이틀 -->
    <div
      v-if="componentStyle.title !== ''"
      class="leading-8 h-8 px-2"
      :class="`${componentStyle.titleWidth} text-${componentStyle.titleAlign}`"
    >
      {{ componentStyle.title }}
    </div>
    <div :class="`${componentStyle.FormWidth}`">
      <select :disabled="componentStyle.disabled === 'ture'" class="w-full">
        <option
          v-for="(list, idx) in componentStyle.selectOptionList"
          :key="`list_${idx}`"
        >
          {{ list }}
        </option>
      </select>
    </div>
  </div>
</template>
<script lang="ts">
import { PropType } from "vue";
import { SelectStyle } from "~~/types/editor/interfaces";
export default {
  props: {
    componentStyle: {
      type: Object as PropType<SelectStyle>,
      default() {
        return {
          width: "",
          title: "",
          titleWidth: "",
          titleAlign: "",
          formWidth: "",
          formAlign: "",
          labelText: "",
          selectOptionList: [],
          disabled: false,
        };
      },
    },
  },
  setup() {},
};
</script>

<style></style>
