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
          type="radio"
          :disabled="componentStyle.disabled"
          :value="list"
          v-model="radioCheck"
        />
        {{ list }}
      </label>
    </div>
  </div>
</template>
<script lang="ts">
import { PropType } from "vue";
import { RadioStyle } from "~~/types/editor/interfaces";
export default {
  props: {
    componentStyle: {
      type: Object as PropType<RadioStyle>,
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
  setup() {
    const radioCheck = ref("");
    return { radioCheck };
  },
};
</script>

<style></style>
