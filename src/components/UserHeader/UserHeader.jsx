import React from "react";
import { MainDiv, Avatar, Title } from "./Styles";

const UserHeader = () => {
  return (
    <MainDiv id="UserHeader">
      <Avatar id="Avatar" />
      <Title id="Title">
        <h1 className="text-5xl text-center font-semibold px-12 py-10 rounded-xl ">
          My Profile
        </h1>
      </Title>
    </MainDiv>
  );
};

export default UserHeader;
