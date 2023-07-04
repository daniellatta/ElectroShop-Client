import { styled } from "styled-components";

export const MainContainer = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  max-height: 85vh;
  flex-direction: column;
  justify-content: space-between;
  z-index: 1001;

  /* Custom Scrollbar (Chrome, Edge, Safari, Opera) */
  /* width */
  ::-webkit-scrollbar {
    width: 7px;
  }
  /* Track */
  ::-webkit-scrollbar-track {
    background: #048;
  }
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background-image: linear-gradient(to right, #07f, #4ec);
    border-radius: 2px;
  }
  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background-image: linear-gradient(to right, #04f, #2ce);
  }
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
