import styled from "styled-components";
import BG_Image from "../../images/ElectronicPattern.png";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding-top: 64px;
  background-image: linear-gradient(to bottom, #ffff, #aaaa),
    url(${BG_Image.src});
  background-size: 50%;
  background-repeat: repeat;
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
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 200px;
  height: 70vh;
  background-image: linear-gradient(#f0f0f0, transparent);
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
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #e0e0e0;
  }
`;

export const LogoutButton = styled.button`
  width: 100%;
  height: 30px;
  line-height: 0px;
  padding: 12px 10px;
  border: none;
  border-radius: 30px;
  text-align: center;
  font-size: 16px;
  cursor: pointer;
  outline: none;

  &:hover {
    background-color: brown;
  }
`;
