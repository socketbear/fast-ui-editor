<template>
  <client-only>
    <draggable
      :list="layerList"
      class="list-group"
      :class="layoutStyle"
      ghost-class="ghost"
      group="layout"
    >
      <div
        v-for="(layer, idx) in layerList"
        :key="layer.id"
        class="flex flex-wrap"
        :class="layerStyle[idx]"
        @click.stop="clickElement(layer)"
      >
        <!-- <div
          v-if="showId"
          class="w-full text-xs text-gray-400 text-left break-all"
        >
          #{{ layer.id }}
        </div>
        <template v-if="layer.type">
          <editor-layer v-model="layer.layerList" :parent="layer" />
        </template> -->
      </div>
    </draggable>
  </client-only>
</template>

<script lang="ts">
import { PropType } from "vue";
import { Layer } from "~~/types/layout/interfaces";
import { useLayoutStore } from "@/store/layout";
import draggable from "vuedraggable";

export default {
  name: "ComponentEditorLayout",
  components: {
    draggable,
  },
  props: {
    propName: {
      type: String,
      default: () => "",
    },
    value: {
      type: Object as PropType<Layer>,
      default: () => {
        return useLayer(true);
      },
    },
  },
  setup(props) {
    const layoutStore = useLayoutStore();
    const { selectBox, pageOptions, setSelectBox } = layoutStore;

    console.log("layout Data :>> ", props.value);

    let showId = computed(() => {
      return pageOptions.includes("id");
    });
    const layerList = props.value.layerList;

    let layerStyle = computed(() => {
      const styles = [];
      layerList.forEach((layer: Layer) => {
        const style = {};
        style["selected-item"] = layer.id === selectBox.id;
        // 가로 사이즈 지정 여부
        if (layer.style.width) {
          style[layer.style.width] = true;
        } else if (props.value.columnSize) {
          style[props.value.columnSize] = true;
        }
        styles.push(style);
      });
      return styles;
    });

    let layoutStyle = computed(() => {
      const styles = [];
      const style = {};
      style["selected-item"] = props.value.id === selectBox.id;
      if (props.value.style.width) {
        style[props.value.style.width] = true;
      } else if (props.value.columnSize) {
        style[props.value.columnSize] = true;
      }
      styles.push(style);
      return styles;
    });

    const clickElement = (el) => {
      setSelectBox(el);
    };

    return { layerList, layerStyle, layoutStyle, showId, clickElement };
  },
};
</script>

<style scoped></style>
