import VueCodemirror from "vue-codemirror";
import { basicSetup } from "@codemirror/basic-setup";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueCodemirror, {
    autofocus: true,
    disabled: false,
    indentWithTab: true,
    tabSize: 2,
    placeholder: "... 코드 입력 대기 ...",
    extensions: [basicSetup],
  });
});
