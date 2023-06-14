import React from "react";
import { user } from "./UserData";
import { MainDiv } from "./Styles";

const MyProfile = () => {
  return (
    <MainDiv id="PersonalData">
      <h4>MyProfile</h4>
      <label htmlFor="id">User ID: </label>
      <input
        type="text"
        readOnly={true}
        name="id"
        id="id"
        // disabled={true}
        value={user.id}
      />
      <label htmlFor="userName">User name: </label>
      <input
        type="text"
        readOnly={true}
        name="userName"
        id="userName"
        // disabled={true}
        value={user.userName}
      />
      <label htmlFor="name">Full name: </label>
      <input
        type="text"
        readOnly={true}
        name="name"
        id="name"
        // disabled={true}
        value={user.name}
      />
      <label htmlFor="email">eMail: </label>
      <input
        type="text"
        readOnly={true}
        name="email"
        id="email"
        // disabled={true}
        value={user.email}
      />
      <label htmlFor="age">Age: </label>
      <input
        type="text"
        readOnly={true}
        name="age"
        id="age"
        // disabled={true}
        value={user.age}
      />
      <label htmlFor="purchases">Purchases: </label>
      <input
        type="text"
        readOnly={true}
        name="purchases"
        id="purchases"
        // disabled={true}
        value={user.purchases}
      />
      <label htmlFor="address">Address: </label>
      <input
        type="text"
        readOnly={true}
        name="address"
        id="address"
        // disabled={true}
        value={user.address}
      />
      <label htmlFor="phoneNumber">Phone Number: </label>
      <input
        type="text"
        readOnly={true}
        name="phoneNumber"
        id="phoneNumber"
        // disabled={true}
        value={user.phoneNumber}
      />
      <label htmlFor="active">
        Active user: {user.active ? "True" : "False"}
      </label>
    </MainDiv>
  );
};

export default MyProfile;
