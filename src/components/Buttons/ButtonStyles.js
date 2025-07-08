import styled from "styled-components";
import {
  azulBurbujaEspacial,
  grisPlomiso,
  purpuraAlien,
} from "../../constants/theme";

export const ButtonStyled = styled.button`
  background-color: ${azulBurbujaEspacial};
  color: white;
  border: none;
  padding: 10px 18px;
  margin: 0 8px;
  font-weight: bold;
  border-radius: 8px;
  cursor: pointer;
  font-family: "Orbitron", sans-serif;
  transition: background-color 0.3s, transform 0.2s;
  width: fit-content;
  &:hover {
    background-color: ${purpuraAlien};
    transform: scale(1.05);
  }
  &:disabled {
    background: ${grisPlomiso};
    cursor: not-allowed;
  }
`;
