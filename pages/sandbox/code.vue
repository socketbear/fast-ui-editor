<template>
  <div>
    <div class="example">
      <client-only>
        <vue-codemirror
          v-model="code"
          class="codemirror"
          :extensions="extensions"
          @ready="onCmReady"
          @change="onCmChange"
          @focus="onCmFocus"
          @blur="onCmBlur"
        />
      </client-only>
      <pre class="pre">{{ code }}</pre>
    </div>
  </div>
</template>

<script>
import { html } from "@codemirror/lang-html";
import dedent from "dedent";

const jglib = useJglib();

export default {
  name: "SandboxCode",
  setup() {
    let code = ref(dedent`
          <template>
            <main>
              <h1>Hello World!</h1>
              <p>{{ message }}</p>
            </main>
          </template>
        `);
    const extensions = [html()];

    const onCmChange = (codemirror) => {
      console.log("onCmChange", codemirror);
    };
    const onCmReady = (codemirror) => {
      console.log("onCmReady", codemirror);
    };
    const onCmFocus = (codemirror) => {
      console.log("onCmFocus", codemirror);
    };
    const onCmBlur = (codemirror) => {
      console.log("onCmBlur", codemirror);
    };

    console.log(
      "html :>>>",
      jglib.prettyHtml("<div><p>dd</p><div>test</div></div>")
    );

    return {
      code,
      extensions,
      onCmChange,
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
