import VueCodemirror from "vue-codemirror";
import "codemirror/mode/vue/vue.js";
import "codemirror/addon/selection/active-line.js";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueCodemirror);
});
