"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";

const UserData = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/v1/user");
        const users = response.data;

        const username = localStorage.getItem("username");
        const user = users.find((userData) => userData.username === username);

        if (user) {
          setUserData(user);
        }
      } catch (error) {
        console.log("Error:", error);
      }
    };

    fetchUserData();
  }, []);

  return (
    <div className="bg-gray-100 p-4">
      {userData ? (
        <div className="bg-white p-4 shadow">
          <h2 className="text-2xl font-bold mb-4">Información del usuario</h2>
          <p className="mb-2">Nombre: {userData.name}</p>
          <p className="mb-2">Email: {userData.email}</p>
          <p className="mb-2">Ciudad: {userData.city} </p>
          <p className="mb-2">Direccion: {userData.adress}</p>
          <p className="mb-2">Telefono: {userData.phoneNumber}</p>
        </div>
      ) : (
        <p className="bg-white p-4 shadow">Cargando datos del usuario...</p>
      )}
    </div>
  );
};

export default UserData;
