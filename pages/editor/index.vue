<template>
  <div class="ui-editor flex h-full">
    <!-- 좌측 영역 -->
    <div class="flex-1 flex flex-col h-full">
      <div class="flex-none flex w-full p-4">
        <div class="w-1/2">
          <button class="editor-btn">추가</button>
          <button class="editor-btn">복사</button>
          <button class="editor-btn">삭제</button>
          <button class="editor-btn">DATA 복사</button>
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
        <div v-show="!showPriview" class="w-full">
          <!-- Main -->
          <editor-layout :layout-data="layoutData" key="layout-editor" />
        </div>
        <!-- 미리보기 -->
        <div v-show="showPriview" ref="layoutContainer" class="w-full">
          <!-- code layout -->
          <editor-code-layout
            :layout-data="layoutData"
            key="layout-code-preview"
          />
        </div>
        <div>
          <client-only>
            <div class="flex items-center justify-between my-4">
              <p class="text-xl">HTML Code</p>
              <button class="editor-btn" @click="makeCode">
                CODE 새로고침
              </button>
            </div>
            <vue-codemirror
              v-model="code"
              class="codemirror"
              :extensions="extensions"
            />
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
// import { Layer } from "~~/types/layout/interfaces";
import { html } from "@codemirror/lang-html";
import dedent from "dedent";
import { get, set } from "@vueuse/core";

export default {
  name: "EditorMain",
  setup() {
    const layoutStore = useLayoutStore();
    const { pageOptions } = storeToRefs(layoutStore);
    const { layout } = useLayoutSampleData();
    const extensions = [html()];
    const jglib = useJglib();

    const showPriview = computed(() => {
      return pageOptions.value.includes("preview");
    });

    const layoutContainer = ref(null);

    let code = ref("");

    const makeCode = () => {
      set(
        code,
        jglib.prettyHtml(
          `<template>
            ${get(layoutContainer).innerHTML}
          </template>
          <script>
            export default {
              setup() {
              }
            }
          <\/script>

          <style scoped></style>
        `
        )
      );

      set(code, get(code).replace(/\\/gi, ""));
      set(code, get(code).replace(/.*<!--.*-->\n/gi, ""));
    };
    // const copyToClipboard = () => {
    //   const clip = JSON.stringify(this.layoutList);
    //   // const data = [new ClipboardItem({ "text/plain": new Blob([clip], { type: "text/plain" }) })];
    //   navigator.clipboard.writeText(prettyJs(clip));
    // };

    return {
      pageOptions,
      showPriview,
      layoutContainer,
      layoutData: reactive(layout),
      extensions,
      code,
      makeCode,
    };
  },
};
</script>

<style scoped>
.editor-btn {
  @apply mr-4 px-2 text-teal-500 border-2 border-teal-500 rounded-md cursor-pointer hover:bg-teal-500 hover:text-teal-100;
}
</style>
