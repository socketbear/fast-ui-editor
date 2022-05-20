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
          <MazCheckbox class="mx-2" v-model="pageEnv.isPreview">
            Priview
          </MazCheckbox>
          <MazCheckbox class="mx-2" v-model="pageEnv.isShow">
            ID 보이기
          </MazCheckbox>
          <MazCheckbox class="mx-2" v-model="pageEnv.isEditor">
            Editor
          </MazCheckbox>
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
export default {
  name: "EditorMain",
  setup() {
    const pageEnv = reactive({
      isPreview: false,
      isShow: false,
      isEditor: false,
    });

    return { pageEnv };
  },
};
</script>

<style scoped></style>
