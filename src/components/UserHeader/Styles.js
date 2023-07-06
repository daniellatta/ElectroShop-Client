import { styled } from "styled-components";
import AvatarIMG from "../../images/avatar.png";
import HeaderIMG from "../../images/UserHeader.jpg";

export const MainDiv = styled.div`
  display: flex;
  background-image: radial-gradient(#0001, #000a), url(${HeaderIMG.src});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  box-shadow: inset 0 0 20px 5px black;
`;

export const Avatar = styled.div`
  width: 150px;
  height: 150px;
  margin: 25px;
  border: 1px solid #ffff;
  border-radius: 50%;
  background-color: #fff9;
  background-image: url(${AvatarIMG.src});
  background-size: cover;
`;

export const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  position: absolute;
  z-index: 1;
  top: 100px;
  width: 100%;
  color: white;
  text-shadow: 0 0 10px #006b84;
  background-image: linear-gradient(
    to right,
    #0000,
    #0001,
    #0004,
    #000a,
    #000d,
    #000a,
    #0004,
    #0001,
    #0000
  );
`;
