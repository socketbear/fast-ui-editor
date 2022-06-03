<template>
  <div
    v-if="componentData.type === 'blank'"
    class="text-sm text-gray-400"
    :class="elementStyle"
  >
    {{ componentData.name }}
  </div>
  <component
    v-else
    :class="elementStyle"
    :is="`${componentData.type}`"
    :component-style="componentData.style"
  />
</template>

<script lang="ts">
import Input from "./Input";
import Button from "./Button";
import Checkbox from "./Checkbox";
import Radio from "./Radio";
import Select from "./Select";
import Text from "./Text";
import Textarea from "./Textarea";
import { useLayoutStore } from "@/store/layout";
import { storeToRefs } from "pinia";

export default {
  components: {
    Input,
    Button,
    Checkbox,
    Radio,
    Select,
    Text,
    Textarea,
  },
  props: {
    componentData: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const layoutStore = useLayoutStore();
    const { selectBox } = storeToRefs(layoutStore);
    const elementStyle = computed(() => {
      const style = {};
      style["selected-element"] = props.componentData.id === selectBox.value.id;
      return style;
    });
    return {
      elementStyle,
    };
  },
};
</script>

<style scoped>
.selected-element {
  @apply border-2 border-cyan-500 border-dashed;
}
</style>
