import { styled } from "styled-components";

export const OrdersContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  align-items: center;
  border: 3px solid white;
  border-radius: 10px;
  background-color: #777a;
  padding: 10px;
`;

export const OrderDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const OrderDetails = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: center;
  margin: 10px;
  padding: 5px;
  border: 3px solid white;
  border-radius: 5px;
  background-color: #fff0ff;
`;

export const OrderSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const InfoItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 25%;
  padding: 3px;
  color: white;
  font-weight: bold;
  background-image: linear-gradient(#00b7b7, #006565);
  border: 5px solid white;
  border-radius: 10px;
`;

export const ProductBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  background-color: white;
  border: 2px solid #0006;
  border-radius: 0 10px 10px 0;
`;

export const OrderProductBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  width: 100%;
  background-color: white;
  border: 2px solid #0006;
  border-radius: 10px;
`;
