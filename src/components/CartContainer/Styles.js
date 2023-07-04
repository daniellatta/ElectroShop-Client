import { styled } from "styled-components";

export const MainContainer = styled.div`
  position: fixed;
  top: 40px;
  right: -20px;
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 450px;
  max-height: 90%;
  color: black;
  background-color: #fffc;
  background-image: linear-gradient(
    to bottom,
    black 1%,
    #07134fcc 9%,
    #07134fcc 7%,
    #00084ade
  );
  border: 3px solid white;
  border-radius: 10px;
  box-shadow: 0 0 20px 3px teal;
  padding: 5px;
`;
