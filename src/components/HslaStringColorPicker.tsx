import React, { type JSX } from "react";

import { AlphaColorPicker } from "./common";
import { ColorModel, ColorPickerBaseProps } from "../types";
import { equalColorString } from "../utils/compare";
import { hslaStringToHsva, hsvaToHslaString } from "../utils/convert";

export const colorModel: ColorModel<string> = {
  defaultColor: "hsla(0, 0%, 0%, 1)",
  toHsva: hslaStringToHsva,
  fromHsva: hsvaToHslaString,
  equal: equalColorString,
};

export const HslaStringColorPicker = (
  props: Partial<ColorPickerBaseProps<string>>,
): JSX.Element => <AlphaColorPicker {...props} colorModel={colorModel} />;
