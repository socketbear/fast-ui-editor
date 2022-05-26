import { useJglib } from "./useJglib";

export const useLayer = (isLayout: boolean) => {
  const jglib = useJglib();

  return {
    name: isLayout ? "Layout" : "",
    id: jglib.getUniqueKey(),
    group: "layout",
    type: isLayout ? "layout" : "",
    flex: false,
    width: "w-full",
    columnSize: isLayout ? "w-1/3" : "",
    style: {
      width: "w-full",
      title: "",
      titleWidth: "",
      titleAlign: "",
      formWidth: "",
      formAlign: "",
      labelText: "",
      disabled: false,
    },
    list: [],
  };
};
