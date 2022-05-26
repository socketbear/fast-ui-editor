<template>
  <div class="ui-editor flex h-full">
    <!-- 좌측 영역 -->
    <div class="flex-1 flex flex-col h-full">
      <div class="flex-none flex w-full p-4">
        <div class="w-1/2 text-left divide-x">
          <MazBtn class="mr-2" size="mini">추가</MazBtn>
          <MazBtn class="mr-2" size="mini">복사</MazBtn>
          <MazBtn class="mr-2" size="mini">삭제</MazBtn>
          <MazBtn class="mr-2" size="mini">DATA 복사</MazBtn>
        </div>
        <div class="flex justify-end w-1/2">
          <div class="flex mr-2 items-center">
            <input
              id="layout-priview"
              v-model="pageOptions"
              type="checkbox"
              value="preview"
            />
            <label for="layout-priview">Priview</label>
          </div>
          <div class="flex mr-2 items-center">
            <input
              id="layout-id-checkbox"
              v-model="pageOptions"
              type="checkbox"
              value="id"
              :disabled="showPriview"
            />
            <label
              for="layout-id-checkbox"
              :class="{ label_disabled: showPriview }"
              >ID 보이기</label
            >
          </div>
          <div class="flex items-center">
            <input
              id="layout-editor"
              v-model="pageOptions"
              type="checkbox"
              value="editor"
            />
            <label for="layout-editor">Editor</label>
          </div>
        </div>
      </div>
      <div class="flex-1 min-h-0 overflow-y-auto p-4">
        <!-- drag n drop layout -->
        <div class="w-full">
          <!-- Main -->
          <editor-layout v-show="!showPriview" :layout-data="layoutData" />
        </div>
        <!-- 미리보기 -->
        <div>
          <!-- code layout -->
          <client-only>
            <div class="flex items-center justify-between my-4">
              <p class="text-xl">HTML Code</p>
              <MazBtn class="ml-2" size="mini">CODE 새로고침</MazBtn>
            </div>
            <!-- <vue-codemirror class="w-full codemirror_stype" /> -->
          </client-only>
        </div>
      </div>
    </div>
    <!-- 우측 영역 -->
    <div class="flex-none h-full editor_area">
      <div class="controller-width flex flex-col border-l h-full">
        <div class="flex-none">
          <!-- element selector -->
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { storeToRefs } from "pinia";
import { useLayoutStore } from "@/store/layout";
import { Layer } from "~~/types/layout/interfaces";

export default {
  name: "EditorMain",
  setup() {
    const layoutStore = useLayoutStore();
    const { pageOptions } = storeToRefs(layoutStore);
    const { layout } = useLayoutSampleData();

    const showPriview = computed(() => {
      return pageOptions.value.includes("preview");
    });

    return { pageOptions, showPriview, layoutData: layout };
  },
};
</script>

<style scoped></style>
