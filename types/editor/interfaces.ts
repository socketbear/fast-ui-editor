export declare interface BaseStyle {
  width?: string;
  title?: string;
  titleWidth?: string;
  titleAlign?: string;
  formWidth?: string;
  formAlign?: string;
  labelText?: string;
  disabled?: boolean;
}

export declare interface InputStyle extends BaseStyle {
  placeholder?: string[];
  inputType: string;
}
export declare interface ButtonStyle extends BaseStyle {
  buttonText?: string;
  buttonKind?: string;
}

export declare interface CheckboxStyle extends BaseStyle {
  radioCheckLabelList?: string[];
}

export declare interface RadioStyle extends BaseStyle {
  radioCheckLabelList?: string[];
}

export declare interface SelectStyle extends BaseStyle {
  selectOptionList?: string[];
}
