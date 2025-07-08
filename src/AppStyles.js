import styled, { createGlobalStyle } from "styled-components";
import { blancoGalactico, negroExplosivo } from "./constants/theme";

export const GlobalStyle = createGlobalStyle`
  body {
  margin: 0;
  font-family: 'Open Sans', sans-serif;
  background:${negroExplosivo};
}
  h1, h2, h3, h4, h5, h6, button {
    font-family: 'Orbitron', 'Bangers', cursive, sans-serif;
  }
    p, span{
    font-family: 'Open Sans', sans-serif;
    color:${blancoGalactico}
  }
`;
export const Layout = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const Main = styled.main`
  flex: 1;
  padding: 24px;
`;
