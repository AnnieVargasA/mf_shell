import React from "react";
import { ButtonStyled } from "./ButtonStyles";

export default function PrimaryButton({ children, onClick, disabled, type = "button", ...props }) {
  return (
    <ButtonStyled  onClick={onClick} disabled={disabled} type={type} {...props}>
      {children}
    </ButtonStyled>
  );
}