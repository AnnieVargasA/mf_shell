import React from "react";
import { StyledSelect } from "./SelectStyles";

export default function Select({ value, onChange, options, placeholder, color, bordercolor, ...props }) {
  return (
    <StyledSelect
      value={value}
      onChange={onChange}
      color={color}
      bordercolor={bordercolor}
      {...props}
    >
      {placeholder && <option value="">{placeholder}</option>}
      {options.map(opt =>
        <option key={opt.value} value={opt.value}>{opt.label}</option>
      )}
    </StyledSelect>
  );
}