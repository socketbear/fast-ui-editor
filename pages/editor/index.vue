<template>
  <div class="ui-editor flex h-full">
    <!-- 좌측 영역 -->
    <div class="flex-1 flex flex-col h-full">
      <div class="flex-none flex w-full p-4">
        <div class="w-1/2 text-left">
          <button type="button">추가</button>
          <button type="button">복사</button>
          <button type="button">삭제</button>
          <button type="button">DATA 복사</button>
        </div>
        <div class="flex justify-end w-1/2">
          <div class="flex mr-2">
            <input id="layout-priview" type="checkbox" value="priview" />
            <label for="layout-priview">Priview</label>
          </div>
          <div class="flex mr-2">
            <input id="layout-id-checkbox" type="checkbox" value="id" />
            <label for="layout-id-checkbox">ID 보이기</label>
          </div>
          <div class="flex">
            <input id="layout-editor" type="checkbox" value="editor" />
            <label for="layout-editor">Editor</label>
          </div>
        </div>
      </div>
      <div class="flex-1 min-h-0 overflow-y-auto p-4">
        <!-- drag n drop layout -->
        <div class="w-full">
          <!-- Main -->
        </div>
        <!-- 미리보기 -->
        <div>
          <!-- code layout -->
          <client-only>
            <div class="flex items-center justify-between my-4">
              <p class="text-xl">HTML Code</p>
              <button type="button">CODE 새로고침</button>
            </div>
            <vue-codemirror class="w-full codemirror_stype" />
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
export default {
  name: "EditorMain",
  setup() {},
};
</script>

<style scoped></style>
