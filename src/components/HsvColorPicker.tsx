import React, { type JSX } from "react";

import { ColorPicker } from "./common";
import { ColorModel, ColorPickerBaseProps, HsvColor } from "../types";
import { equalColorObjects } from "../utils/compare";
import { hsvaToHsv } from "../utils/convert";

export const colorModel: ColorModel<HsvColor> = {
  defaultColor: { h: 0, s: 0, v: 0 },
  toHsva: ({ h, s, v }) => ({ h, s, v, a: 1 }),
  fromHsva: hsvaToHsv,
  equal: equalColorObjects,
};

export const HsvColorPicker = (props: Partial<ColorPickerBaseProps<HsvColor>>): JSX.Element => (
  <ColorPicker {...props} colorModel={colorModel} />
);
