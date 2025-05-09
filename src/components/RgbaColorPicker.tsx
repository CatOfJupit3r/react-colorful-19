import React, { type JSX } from "react";

import { AlphaColorPicker } from "./common";
import { ColorModel, ColorPickerBaseProps, RgbaColor } from "../types";
import { equalColorObjects } from "../utils/compare";
import { rgbaToHsva, hsvaToRgba } from "../utils/convert";

export const colorModel: ColorModel<RgbaColor> = {
  defaultColor: { r: 0, g: 0, b: 0, a: 1 },
  toHsva: rgbaToHsva,
  fromHsva: hsvaToRgba,
  equal: equalColorObjects,
};

export const RgbaColorPicker = (props: Partial<ColorPickerBaseProps<RgbaColor>>): JSX.Element => (
  <AlphaColorPicker {...props} colorModel={colorModel} />
);
