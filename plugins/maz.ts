import MazBtn from "maz-ui/components/MazBtn";
import MazCheckbox from "maz-ui/components/MazCheckbox";
// maz ui 내 component 중 사용할 내역을 적용하는 곳
// https://louismazel.github.io/maz-ui-3/guide/
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component("MazBtn", MazBtn);
  nuxtApp.vueApp.component("MazCheckbox", MazCheckbox);
});
