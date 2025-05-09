import React, { type JSX } from "react";

import { ColorPicker } from "./common";
import { ColorModel, ColorPickerBaseProps, RgbColor } from "../types";
import { equalColorObjects } from "../utils/compare";
import { rgbaToHsva, hsvaToRgba, rgbaToRgb } from "../utils/convert";

export const colorModel: ColorModel<RgbColor> = {
  defaultColor: { r: 0, g: 0, b: 0 },
  toHsva: ({ r, g, b }) => rgbaToHsva({ r, g, b, a: 1 }),
  fromHsva: (hsva) => rgbaToRgb(hsvaToRgba(hsva)),
  equal: equalColorObjects,
};

export const RgbColorPicker = (props: Partial<ColorPickerBaseProps<RgbColor>>): JSX.Element => (
  <ColorPicker {...props} colorModel={colorModel} />
);
