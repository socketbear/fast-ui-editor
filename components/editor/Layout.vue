<template>
  <draggable
    :list="layerList"
    class="list-group p-2"
    :class="layoutStyle"
    ghost-class="ghost"
    group="layout"
    item-key="id"
    @change="updateLayoutList"
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
        <template v-else>
          <editor-el-element :component-data="element" />
        </template>
      </div>
    </template>
  </draggable>
</template>

<script lang="ts">
import { PropType } from "vue";
import { Layer } from "~~/types/layout/interfaces";
import { useLayoutStore } from "@/store/layout";
import { storeToRefs } from "pinia";
import draggable from "vuedraggable";

export default {
  components: {
    draggable,
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
      style["selected-layer"] = props.layoutData.id === selectBox.value.id;
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

    const updateLayoutList = (...params) => {
      // console.log(`updateLayoutList, params :>>> `, params);
    };

    return { layerList, layoutStyle, showId, clickElement, updateLayoutList };
  },
};
</script>

<style scoped>
.list-group {
  @apply border border-gray-500 border-dashed;
}
.selected-layer {
  @apply border-2 border-emerald-500 border-dashed;
}
</style>
