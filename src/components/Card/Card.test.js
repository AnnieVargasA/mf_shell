import React from "react";
import { render, screen, fireEvent, within } from "@testing-library/react";
import Card from "./Card";

// Mock de los estilos para aislar solo la lógica de Card
jest.mock("./CardStyles", () => ({
  CardContainer: ({ children }) => <div data-testid="CardContainer">{children}</div>,
  CardImage: (props) => <img {...props} data-testid="CardImage" />,
  Data: ({ children }) => <div data-testid="Data">{children}</div>,
  DetailsContainer: ({ children }) => <div data-testid="DetailsContainer">{children}</div>,
}));

// Mocks de los diccionarios de traducción
jest.mock("../../constants/translate", () => ({
  generos: { Male: "Masculino", Female: "Femenino" },
  estados: { Alive: "Vivo", Dead: "Muerto" },
  especies: { Human: "Humano", Alien: "Alienígena" }
}));

describe("Card", () => {
  const baseProps = {
    image: "https://img.test/1.jpg",
    name: "Rick Sanchez",
    gender: "Male",
    status: "Alive",
    species: "Human",
    detailUrl: "https://detail.test/rick"
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("Renderiza correctamente el nombre y los datos traducidos", () => {
    render(<Card {...baseProps} />);
    expect(screen.getByRole("heading", { level: 3 })).toHaveTextContent("Rick Sanchez");
    expect(screen.getByText("Género:")).toBeInTheDocument();
    expect(screen.getByText("Masculino")).toBeInTheDocument();
    expect(screen.getByText("Estado:")).toBeInTheDocument();
    expect(screen.getByText("Vivo")).toBeInTheDocument();
    expect(screen.getByText("Especie:")).toBeInTheDocument();
    expect(screen.getByText("Humano")).toBeInTheDocument();
  });

  it("Muestra la imagen con alt y src correctos", () => {
    render(<Card {...baseProps} />);
    const img = screen.getByTestId("CardImage");
    expect(img).toHaveAttribute("src", baseProps.image);
    expect(img).toHaveAttribute("alt", baseProps.name);
    expect(img).toHaveAttribute("width", "120");
  });

  it("El botón abre una nueva pestaña", () => {
    const spy = jest.spyOn(window, "open").mockImplementation(() => {});
    render(<Card {...baseProps} />);
    fireEvent.click(screen.getByRole("button", { name: /ver detalle/i }));
    expect(spy).toHaveBeenCalledWith(baseProps.detailUrl, "_blank");
    spy.mockRestore();
  });
});