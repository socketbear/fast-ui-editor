import { defineStore } from "pinia";
import { SelectBox } from "~~/types/layout/interfaces";

export const useLayoutStore = defineStore({
  id: "layout-store",
  state: () => {
    return {
      selectBox: {
        id: "",
        width: "",
        textAlign: "",
      } as SelectBox,
      pageOptions: [] as string[],
    };
  },
  actions: {
    setSelectBox(selected: SelectBox) {
      this.selectBox = selected;
    },
  },
});
