import React from "react";

const page = () => {
  return (
    <div className="bg-black justify-center flex h-[100vh] ">
      <div className="text-center w-[60%] bg-slate-600 text-3xl ">
        <h1>Estas seguro que deseas eliminar tu cuenta?</h1>
        <form className="flex flex-col ">
          <label className="py-5 ">Ingresa tu nombre de usuario</label>
          <div className="flex justify-center">
            <input className="w-[400px]" placeholder="Nombre" />
          </div>

          <label className="py-5">Ingresa tu contraseña</label>
          <div className="justify-center flex">
            <input className="w-[400px] " placeholder="Contraseña" />
          </div>
          <div className="flex justify-center">
            <button
              className="bg-red-500 p-4 my-8 w-[300px] rounded-xl "
              type="submit"
            >
              Eliminar
            </button>
          </div>
        </form>
        <div className="flex flex-col items-center">
          <h1>O si no puedes volver al inicio tocando aqui</h1>
          <a href="/" className="bg-green-500 p-4 mt-8 w-[300px] rounded-xl">
            Volver al incio
          </a>
        </div>
      </div>
    </div>
  );
};

export default page;
