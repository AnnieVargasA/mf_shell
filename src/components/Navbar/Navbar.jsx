import React from "react";
import { LogoImage, NavbarContainer } from "./NavbarStyles";
import { Link } from "react-router-dom";
import Logo from "../../assets/Rick_and_Morty.svg";

export default function Navbar() {
  return (
    <NavbarContainer>
      <Link to="/">
        <LogoImage src={Logo} alt="Rick and Morty Logo" />
      </Link>
    </NavbarContainer>
  );
}
