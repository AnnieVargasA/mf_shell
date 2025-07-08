import styled from "styled-components";
import { blancoGalactico, negroGalactico } from "../../constants/theme";

export const FooterContainer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 16px;
  background: ${negroGalactico};
  color: ${blancoGalactico};
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
  }
`;
export const ColumnContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap:10px
  &div {
    display: flex;
    flex-direction: column;
  }
`;
export const LogoImage = styled.img`
  height: 70px;
`;
export const PortalImage = styled.img`
  width: 65px;
`;
