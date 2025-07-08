import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import FiltersForm from "./FiltersForm";

// Mock de los estilos
jest.mock("./FiltersFormStyles", () => ({
  FiltersFormContainer: ({ children }) => <div data-testid="FiltersFormContainer">{children}</div>,
  InputStyled: (props) => <input {...props} data-testid="InputStyled" />,
}));

// Mock de Select
jest.mock("../Select/Select", () => ({ value, onChange, placeholder, options, ...props }) => (
  <select
    value={value}
    onChange={(e) => onChange && onChange(e)}
    data-testid={placeholder}
    {...props}
  >
    <option value="" disabled>
      {placeholder}
    </option>
    {options && options.map((opt) => (
      <option key={opt.value} value={opt.value}>
        {opt.label}
      </option>
    ))}
  </select>
));

// Mock de colores
jest.mock("../../constants/theme", () => ({
  naranjaGalactico: "#FFA500",
  rosaPlasmico: "#FF69B4",
}));

describe("FiltersForm", () => {
  it("renderiza el input y los selects", () => {
    render(<FiltersForm />);
    expect(screen.getByTestId("InputStyled")).toBeInTheDocument();
    expect(
      screen.getByTestId("¿Qué especie de error cósmico eres tú?")
    ).toBeInTheDocument();
    expect(
      screen.getByTestId("¿Muerto, medio muerto o simplemente inútil?")
    ).toBeInTheDocument();
  });

  it("llama a onChangeCharacterName cuando se escribe en el input", () => {
    const onChangeCharacterName = jest.fn();
    render(<FiltersForm onChangeCharacterName={onChangeCharacterName} />);
    fireEvent.change(screen.getByTestId("InputStyled"), {
      target: { value: "Rick" },
    });
    expect(onChangeCharacterName).toHaveBeenCalled();
  });

  it("llama a onChangeSpecie cuando se selecciona una especie", () => {
    const onChangeSpecie = jest.fn();
    render(
      <FiltersForm
        onChangeSpecie={onChangeSpecie}
        valueSpecie=""
      />
    );
    fireEvent.change(
      screen.getByTestId("¿Qué especie de error cósmico eres tú?"),
      { target: { value: "Alien" } }
    );
    expect(onChangeSpecie).toHaveBeenCalled();
  });

  it("llama a onChangeStatus cuando se selecciona un status", () => {
    const onChangeStatus = jest.fn();
    render(
      <FiltersForm
        onChangeStatus={onChangeStatus}
        valueStatus=""
      />
    );
    fireEvent.change(
      screen.getByTestId("¿Muerto, medio muerto o simplemente inútil?"),
      { target: { value: "dead" } }
    );
    expect(onChangeStatus).toHaveBeenCalled();
  });
});