import styled from "styled-components";
import { cianDeCiencia } from "../../constants/theme";

export const StyledSelect = styled.select`
  padding: 12px;
  border-radius: 50px;
  border: 1px solid ${(props) => props.bordercolor || `${cianDeCiencia}`};
  background: #111;
  color: ${(props) => props.color || `${cianDeCiencia}`};
  width: 285px;
  margin: 0 8px;
  outline: none;
  box-shadow: 0 0 20px ${(props) => props.bordercolor || `${cianDeCiencia}`};
  @media (max-width: 425px) {
  margin: 0;
    width: 97%;
  }
`;