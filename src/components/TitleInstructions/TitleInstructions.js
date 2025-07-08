import styled from "styled-components";
import { blancoGalactico, cianDeCiencia } from "../../constants/theme";

export const CharacterInstructions = styled.div`
  margin: 0 0 25px;
  display: flex;
  align-items: center;
  img {
    width: 100px;
    height: 100px;
    margin-right: 20px;
    border-radius: 50%;
    border: 1px solid ${cianDeCiencia};
    box-shadow: 0 0 20px ${cianDeCiencia};
  }
  p {
    text-align: justify;
    color: ${blancoGalactico};
    font-size: 16px;
  }
  @media (max-width: 425px) {
    flex-direction: column;
    align-items: center;
    img {
      width: 200px;
      height: 200px;
      margin-bottom: 10px;
    }
  }
`;
export const CharacterTitle = styled.h2`
  margin: 0 0 15px;
  color: ${cianDeCiencia};
  text-align: left;
  @media (max-width: 425px) {
    text-align: center;
  }
`;
