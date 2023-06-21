import React from "react";

const page = () => {
  return (
    <div>
      <h1 className="text-4xl text-center">
        Bienvenido, por favor ingrese su usuario
      </h1>
      <div className="flex justify-around flex-col bg-red-500">
        <label>Ingrese su usuario</label>
        <input />
        <label>Ingrese su contraseña</label>
        <input />
      </div>
    </div>
  );
};

export default page;
