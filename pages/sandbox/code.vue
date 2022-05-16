<template>
  <div>
    <div class="example">
      <client-only>
        <vue-codemirror
          v-model="code"
          class="codemirror"
          :options="cmOption"
          @cursorActivity="onCmCursorActivity"
          @ready="onCmReady"
          @focus="onCmFocus"
          @blur="onCmBlur"
        />
      </client-only>
      <pre class="pre">{{ code }}</pre>
    </div>
  </div>
</template>

<script>
export default {
  name: "SandboxCode",
  setup() {
    const cmOption = {
      tabSize: 2,
      styleActiveLine: true,
      lineNumbers: true,
      line: true,
      mode: "text/x-vue",
    };

    let code = `<template>
  <main>
    <h1>Hello World!</h1>
    <p>{{ message }}</p>
  </main>
</template>`;

    const onCmCursorActivity = (codemirror) => {
      console.debug("onCmCursorActivity", codemirror);
    };
    const onCmReady = (codemirror) => {
      console.debug("onCmReady", codemirror);
    };
    const onCmFocus = (codemirror) => {
      console.debug("onCmFocus", codemirror);
    };
    const onCmBlur = (codemirror) => {
      console.debug("onCmBlur", codemirror);
    };

    return {
      cmOption,
      code,
      onCmCursorActivity,
      onCmReady,
      onCmFocus,
      onCmBlur,
    };
  },
};
</script>

<style scoped>
.example {
  display: flex;
  height: 100%;
}
.example .codemirror,
.pre {
  width: 50%;
  height: 100%;
  margin: 0;
  overflow: auto;
}
.example .pre {
  display: block;
  padding: 1rem;
  line-height: 1.6;
  word-break: break-all;
  word-wrap: break-word;
}
</style>
