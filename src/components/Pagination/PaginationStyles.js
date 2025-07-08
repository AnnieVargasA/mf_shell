import styled from "styled-components";

export const PaginationContainer = styled.div`
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      align-self:center
      padding: 20px;
      margin: 20px 0;
      gap:10px;
`;
export const Desk = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 450px) {
    display: none;
  }
`;
export const Mobile = styled.span`
  display: none;
  @media (max-width: 450px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
