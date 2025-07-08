import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import PrimaryButton from "./PrimaryButton";

jest.mock("./ButtonStyles", () => ({
  ButtonStyled: (props) => <button {...props} />,
}));

describe("PrimaryButton", () => {
  it("Está mostrando el texto del botón", () => {
    render(<PrimaryButton>Click aquí</PrimaryButton>);
    expect(
      screen.getByRole("button", { name: /click aquí/i })
    ).toBeInTheDocument();
  });

  it("Dispara el evento onClick", () => {
    const handleClick = jest.fn();
    render(<PrimaryButton onClick={handleClick}>Enviar</PrimaryButton>);
    fireEvent.click(screen.getByRole("button"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("Botón inhabilitado", () => {
    render(<PrimaryButton disabled>Deshabilitado</PrimaryButton>);
    expect(screen.getByRole("button")).toBeDisabled();
  });
});