import React, { useRef, type JSX } from "react";

import { Hue } from "./Hue";
import { Saturation } from "./Saturation";

import { ColorModel, ColorPickerBaseProps, AnyColor } from "../../types";
import { useColorManipulation } from "../../hooks/useColorManipulation";
import { useStyleSheet } from "../../hooks/useStyleSheet";
import { formatClassName } from "../../utils/format";

export interface Props<T extends AnyColor> extends Partial<ColorPickerBaseProps<T>> {
  colorModel: ColorModel<T>;
}

export const ColorPicker = <T extends AnyColor>({
  className,
  colorModel,
  color = colorModel.defaultColor,
  onChange,
  ...rest
}: Props<T>): JSX.Element => {
  const nodeRef = useRef<HTMLDivElement>(null);
  useStyleSheet(nodeRef);

  const [hsva, updateHsva] = useColorManipulation<T>(colorModel, color, onChange);

  const nodeClassName = formatClassName(["react-colorful", className]);

  return (
    <div {...rest} ref={nodeRef} className={nodeClassName}>
      <Saturation hsva={hsva} onChange={updateHsva} />
      <Hue hue={hsva.h} onChange={updateHsva} className="react-colorful__last-control" />
    </div>
  );
};
