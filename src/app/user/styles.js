import styled from "styled-components";
import BG_Image from "../../images/ElectronicPattern.png";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-image: linear-gradient(to bottom, #ffff, #aaaa),
    url(${BG_Image.src});
  background-size: 50%;
  background-repeat: repeat;
  background-position: fixed;
  background-attachment: fixed;
`;

export const ComponentContent = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Header = styled.div`
  height: 100px;
  flex-direction: row;
`;

export const NavigationPanel = styled.div`
  width: 200px;
  background-color: #f0f0f0;
  padding: 20px;
`;

export const ContentPanel = styled.div`
  flex: 1;
  padding: 20px;
`;

export const NavigationItem = styled.button`
  display: block;
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  background-color: transparent;
  border: none;
  text-align: left;
  font-size: 16px;
  cursor: pointer;
  outline: none;

  &:hover {
    background-color: #e0e0e0;
  }
`;

export const LogoutButton = styled.button`
  margin-top: auto;
  width: 100%;
  padding: 10px;
  background-color: #f0f0f0;
  border: none;
  text-align: center;
  font-size: 16px;
  cursor: pointer;
  outline: none;

  &:hover {
    background-color: #e0e0e0;
  }
`;
