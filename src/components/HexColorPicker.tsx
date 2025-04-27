import React, { type JSX } from "react";

import { ColorPicker } from "./common";
import { ColorModel, ColorPickerBaseProps } from "../types";
import { equalHex } from "../utils/compare";
import { hexToHsva, hsvaToHex } from "../utils/convert";

export const colorModel: ColorModel<string> = {
  defaultColor: "000",
  toHsva: hexToHsva,
  fromHsva: ({ h, s, v }) => hsvaToHex({ h, s, v, a: 1 }),
  equal: equalHex,
};

export const HexColorPicker = (props: Partial<ColorPickerBaseProps<string>>): JSX.Element => (
  <ColorPicker {...props} colorModel={colorModel} />
);
