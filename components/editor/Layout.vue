<template>
  <!-- <client-only> -->
  <draggable
    :list="layerList"
    class="list-group p-2"
    :class="layoutStyle"
    ghost-class="ghost"
    group="layout"
    item-key="id"
  >
    <template #item="{ element }">
      <div class="flex flex-wrap" @click.stop="clickElement(element)">
        <div
          v-if="showId"
          class="w-full text-xs text-gray-400 text-left break-all"
        >
          {{ `layer-${element.id}` }}
        </div>
        <template v-if="element.type === 'layer' || element.type === 'form'">
          <editor-layout :layout-data="element" :parent="layoutData" />
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
    </template>
  </draggable>
  <!-- </client-only> -->
</template>

<script lang="ts">
import { PropType } from "vue";
import { Layer } from "~~/types/layout/interfaces";
import { useLayoutStore } from "@/store/layout";
import { storeToRefs } from "pinia";
import draggable from "vuedraggable";

import Input from "./el/Input";
import Button from "./el/Button";
import Checkbox from "./el/Checkbox";
import Radio from "./el/Radio";
import Select from "./el/Select";
import Text from "./el/Text";
import Textarea from "./el/Textarea";

export default {
  components: {
    draggable,
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
    const layoutStore = useLayoutStore();
    const { setSelectBox } = layoutStore;
    const { selectBox, pageOptions } = storeToRefs(layoutStore);

    let showId = computed(() => {
      return pageOptions.value.includes("id");
    });
    const layerList = props.layoutData.list;

    let layoutStyle = computed(() => {
      const style = {};
      style["selected-item"] = props.layoutData.id === selectBox.value.id;
      if (props.layoutData.style.width) {
        style[props.layoutData.style.width] = true;
      } else if (props.parent.columnSize) {
        style[props.parent.columnSize] = true;
      }
      return style;
    });

    const clickElement = ({ id, width, textAlign }) => {
      setSelectBox({ id, width, textAlign });
    };

    return { layerList, layoutStyle, showId, clickElement };
  },
};
</script>

<style scoped></style>
