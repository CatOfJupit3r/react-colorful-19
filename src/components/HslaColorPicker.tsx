import React, { type JSX } from "react";

import { AlphaColorPicker } from "./common";
import { ColorModel, ColorPickerBaseProps, HslaColor } from "../types";
import { equalColorObjects } from "../utils/compare";
import { hslaToHsva, hsvaToHsla } from "../utils/convert";

export const colorModel: ColorModel<HslaColor> = {
  defaultColor: { h: 0, s: 0, l: 0, a: 1 },
  toHsva: hslaToHsva,
  fromHsva: hsvaToHsla,
  equal: equalColorObjects,
};

export const HslaColorPicker = (props: Partial<ColorPickerBaseProps<HslaColor>>): JSX.Element => (
  <AlphaColorPicker {...props} colorModel={colorModel} />
);
