<template>
  <div
    v-for="element in layerList"
    class="list-group p-2"
    :class="layoutStyle"
    :key="`preview-${element.id}`"
  >
    <div class="flex flex-wrap">
      <template v-if="element.type === 'layer' || element.type === 'form'">
        <editor-code-layout :layout-data="element" :parent="layoutData" />
      </template>
      <template
        v-else-if="element.type !== 'layer' && element.type !== 'blank'"
      >
        <component :is="`${element.type}`" :component-style="element.style" />
      </template>
      <template v-else>
        <div class="text-sm text-gray-400">{{ element.name }}</div>
      </template>
    </div>
  </div>
</template>

<script lang="ts">
import { PropType } from "vue";
import { Layer } from "~~/types/layout/interfaces";

import Input from "./el/Input";
import Button from "./el/Button";
import Checkbox from "./el/Checkbox";
import Radio from "./el/Radio";
import Select from "./el/Select";
import Text from "./el/Text";
import Textarea from "./el/Textarea";

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
    propName: {
      type: String,
      default: () => "",
    },
    layoutData: {
      type: Object as PropType<Layer>,
      default: () => {
        return useLayer(true);
      },
    },
    parent: {
      type: Object,
    },
  },
  setup(props) {
    const layerList = props.layoutData.list;

    let layoutStyle = computed(() => {
      const style = {};

      if (props.layoutData.style.width) {
        style[props.layoutData.style.width] = true;
      } else if (props.parent.columnSize) {
        style[props.parent.columnSize] = true;
      }
      return style;
    });

    return { layerList, layoutStyle };
  },
};
</script>

<style scoped></style>
