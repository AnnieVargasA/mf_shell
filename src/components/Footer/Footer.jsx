import React from "react";
import {
  ColumnContainer,
  FooterContainer,
  LogoImage,
  PortalImage,
} from "./FooterStyles";
import Portal from "../../assets/portal-modified.png";
import Logo from "../../assets/Rick_and_Morty.svg";

export default function Footer() {
  return (
    <FooterContainer>
      <ColumnContainer>
        <PortalImage src={Portal} alt="Portal-dimensional-img" />
        <LogoImage src={Logo} alt="Rick and Morty Logo" />
      </ColumnContainer>
      <ColumnContainer>
        <div>
          <p>Creado en la dimensión alterna</p>
          <p>by Anahí Vargas</p>
        </div>
      </ColumnContainer>
      <ColumnContainer>
        <div>
          <p>© 2025 Rick & Morty Fan App. </p>
          <p>Todos los derechos reservados.</p>
        </div>
      </ColumnContainer>
    </FooterContainer>
  );
}
