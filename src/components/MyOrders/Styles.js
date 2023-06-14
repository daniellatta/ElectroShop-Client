import { styled } from "styled-components";

export const OrderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 3px solid white;
  border-radius: 10px;
  background-color: #fffa;
  padding: 10px;
  /* max-width: 350px; */
`;

export const OrderDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 400px;
`;

export const OrderDetails = styled.div`
  display: flex;
  flex-wrap: wrap;
  border: 3px solid white;
  background-color: #fff0ff;
`;
