import { BaseStyle } from "../editor/interfaces";
export declare interface SelectBox {
  id: "";
  width: string;
  textAlign: string;
}
export declare interface Layer {
  id: string;
  name?: string;
  group: string;
  type: string;
  flex: boolean;
  width: string;
  columnSize: string;
  style: BaseStyle;
  list: Layer[];
}
