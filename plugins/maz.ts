import MazBtn from "maz-ui/components/MazBtn";
// maz ui 내 component 중 사용할 내역을 적용하는 곳
// https://louismazel.github.io/maz-ui-3/guide/
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component("MazBtn", MazBtn);
});
