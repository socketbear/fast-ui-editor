<template>
  <client-only>
    <draggable
      :list="layerList"
      class="list-group w-full"
      ghost-class="ghost"
      group="layout"
    >
      <div
        v-for="(layer, idx) in layerList"
        :key="layer.id"
        class="list-group-item"
        :class="layerStyle[idx]"
        @click.stop="clickElement(layer)"
      >
        <div
          v-if="showId"
          class="w-full text-xs text-gray-400 text-left break-all"
        >
          #{{ layer.id }}
        </div>
        <template v-if="layer.type === 'layer' || layer.type === 'form'">
          <editor-layer v-model="layer.layerList" :parent="layer" />
        </template>
        <template v-else-if="layer.type !== 'layer' && layer.type !== 'blank'">
          <component
            :is="`editor-el-${layer.type}`"
            :component-style="layer.style"
          />
        </template>
        <template v-else>
          <div class="text-sm text-gray-400">{{ layer.name }}</div>
        </template>
      </div>
    </draggable>
  </client-only>
</template>

<script>
// import { getCurrentInstance } from "vue";
import draggable from "vuedraggable";
import { useLayoutStore } from "@/store/layout";
export default {
  components: {
    draggable,
  },
  props: {
    parent: {
      type: Object,
      required: true,
    },
    value: {
      type: Array,
      default: () => [],
    },
  },
  setup(props) {
    const layoutStore = useLayoutStore();
    const { selectBox, pageOptions, setSelectBox } = layoutStore;

    let showId = computed(() => {
      return pageOptions.includes("id");
    });
    let layoutList = computed(() => {
      return props.value;
    });
    let layerStyle = computed(() => {
      // const instance = getCurrentInstance();
      const styles = [];
      layoutList.value.forEach((layer) => {
        const style = {};
        style["selected-item"] = layer.id === selectBox.id;
        // 가로 사이즈 지정 여부
        if (layer.style.width) {
          style[layer.style.width] = true;
        } else if (props.parent.columnSize) {
          style[props.parent.columnSize] = true;
        }

        // text 정렬
        if (layer.textAlign) {
          style["text-" + layer.textAlign] = true;
        }

        styles.push(style);
      });
      return styles;
    });
    const clickElement = (el) => {
      setSelectBox(el);
    };

    return { showId, layoutList, layerStyle, clickElement };
  },
};
</script>

<style lang="scss"></style>
