import styled from "styled-components";
import universe from "../../assets/universo.png";

export const NavbarContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  height: 80px;
  padding: 16px;
  background-image: url(${universe});
  background-size: cover;
  background-position: center;
  h1 {
    margin: 0;
  }
`;
export const LogoImage = styled.img`
  height: 70px;
`;