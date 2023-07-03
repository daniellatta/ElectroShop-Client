const { styled } = require("styled-components");
import MapBG from "../../images/Map.png";

//#### Page 1 #############################################################
//#########################################################################
export const Header = styled.div`
  display: flex;
  width: 15%;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  border: 1px solid black;
  background-image: linear-gradient(to bottom, aquamarine, cadetblue);
`;

export const Product = styled.div`
  display: flex;
  justify-content: center;
  align-items: stretch;
  /* border: 1px solid black; */
`;

export const ProductInfo = styled.div`
  display: flex;
  width: 15%;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
`;

export const Total = styled.div`
  display: flex;
  justify-content: center;
  align-items: stretch;
  width: 60%;
  font-weight: bold;
  border: 1px solid black;
  background-image: linear-gradient(to bottom, white, #ffe388);
`;
//#########################################################################

//#### Buttons ############################################################
//#########################################################################

export const Button = styled.button`
  margin: 1.5rem;
`;
//#########################################################################

//#### Page 2 #############################################################
//#########################################################################

export const Section = styled.div`
  border: 1px solid lightgray;
  border-radius: 5px;
  height: auto;
  animation: grow 0.5s ease-in infinite forwards;

  @keyframes grow {
    0% {
      height: 0%;
    }
    100% {
      height: 100%;
    }
  }
`;

export const Map = styled.div`
  position: relative;
  display: flex;
  width: 80%;
  height: 80vh;
  margin: auto;
  border: 1px solid darkgray;
  border-radius: 5px;
  /* background-image: url(${MapBG.src}); */
  /* background-repeat: no-repeat; */
  /* background-position: center; */
  /* background-size: cover; */
  transform: scale(1);
  overflow: hidden;
  /* @media screen and (max-width: 900px) {
    transform: scale(1.5);
  }
  @media screen and (max-width: 740px) {
    transform: scale(1.25);
  }
  @media screen and (max-width: 630px) {
    transform: scale(1.1);
  }
  @media screen and (max-width: 520px) {
    transform: scale(1);
  } */
`;

export const LocationNode = styled.div`
  position: absolute;
  width: 32px;
  height: 32px;
  cursor: pointer;
  transform: scale(1);
  transition: all 0.5s ease;
  &:hover {
    filter: drop-shadow(0 0 5px #00ffff);
    transform: scale(1.25);
  }
`;

export const MapOverlay = styled.div`
  position: absolute;
  display: flex;
  width: 1862px;
  height: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(1);
  /* border: 3px dashed red; */
  background-image: url(${MapBG.src});
  background-repeat: no-repeat;
  background-position-x: center;
  background-position-y: 40%;
  background-size: cover;
`;
