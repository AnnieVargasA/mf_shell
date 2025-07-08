import styled from "styled-components";
import { blancoGalactico, negroGalactico } from "../../constants/theme";

export const CardContainer = styled.div`
  background-color: ${negroGalactico};
  border-radius: 12px;
  overflow: hidden;
  transition: box-shadow 0.3s ease, transform 0.3s ease;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  position: relative;
  width: 350px;
  height: 200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 24px rgba(0, 255, 255, 0.2),
      0 0 12px rgba(0, 255, 255, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.05);
  }
`;
export const CardImage = styled.img`
  width: 125px;
  height: 100%;
  object-fit: cover;
  border-radius: 12px 0 0 12px;
  @media (max-width: 320px) {
    width: 100px;
  }
`;
export const DetailsContainer = styled.div`
  padding: 15px 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: ${blancoGalactico};
  gap: 10px;
  width: 180px;
  p,
  h4 {
    margin: 0;
  }
  h3 {
    margin: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  @media (max-width: 320px) {
    width: 140px;
    h4 {
      font-size: 16px;
    }
    p {
      font-size: 14px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
`;
export const Data = styled.div`
  display: flex;
  gap: 10px
  justify-content: center;
  align-items: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 180px;
  p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  }
  @media (max-width: 320px) {
    width: 140px;
    p {
      font-size: 14px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
  `;
