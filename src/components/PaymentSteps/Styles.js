const { styled } = require("styled-components");
import MapBG from "../../images/Map.png";

//#### Page 1 #############################################################
//#########################################################################
export const Container = styled.div`
  border-radius: 20px;
  width: 60%;
  padding: 30px; 
  margin: 0 auto;
  background-color: #cccccc;
  justify-content: center;
`;

export const Product = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  padding: 10px;
  background-color: #eeeeee;
  color: #333333;
  font-family: Arial, sans-serif;
`;

export const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  border: 1px solid #dddddd;
  background-color: #3366ff;
  color: #ffffff;
  padding: 10px;
`;

export const ProductInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #dddddd;
  padding: 10px;
`;

export const Total = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  padding-top: 10px;
  color: #333333;
  font-weight: bold;
`;

export const StyledButton = styled.button`
  display: block;
  margin: 30px auto;
  padding: 10px 20px;
  background-color: #3366ff;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  font-family: Arial, sans-serif;
  font-size: 16px;
  cursor: pointer;
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
export const Containerr = styled.div`
  border-radius: 20px;
  width: 60%;
  padding: 30px; 
  margin: 0 auto;
  background-color: #cccccc;
  justify-content: space-around;
`;
export const Section = styled.div`
  border: 1px solid lightgray;
  border-radius: 8px;
  padding: 1px;
  margin-top: 20px;
  width: 100%;
  heigth: 200px
  background-color: #f7f7f7;
`;


export const Map = styled.div`
  position: relative;
  display: flex;
  width: 80%;
  height: 80vh;
  margin: auto;
  border: 1px solid darkgray;
  border-radius: 5px;
  overflow: hidden;
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
  width: 100%;
  height: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(1);
  background-image: url(${MapBG.src});
  background-repeat: no-repeat;
  background-position: center 40%;
  background-size: cover;
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
`;
