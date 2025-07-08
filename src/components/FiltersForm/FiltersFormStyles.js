import styled from "styled-components";
import { cianDeCiencia } from "../../constants/theme";

export const FiltersFormContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 24px;
  background: transparent;
  padding: 20px;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    padding: 0;
  }
`;
export const InputStyled = styled.input`
  padding: 12px;
  border-radius: 50px;
  border: 1px solid ${cianDeCiencia};
  background: #111;
  color: ${cianDeCiencia};
  width: 259px;
  margin: 0 8px;
  outline: none;
  box-shadow: 0 0 20px ${cianDeCiencia};
  @media (max-width: 425px) {
    width: 90%;
    margin: 0
  }
`;
