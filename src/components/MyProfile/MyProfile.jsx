"use client";
import React, { useState, useEffect } from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MyProfile = () => {
  const [formData, setFormData] = useState({
    userName: "",
    name: "",
    surname: "",
    email: "",
    age: "",
    address: "",
    phoneNumber: "",
  });

  const [error, setError] = useState(false);
  const [validUser, setValidUser] = useState(false);

  const [errorMessages, setErrorMessages] = useState({
    userName: "",
    name: "",
    surname: "",
    email: "",
    age: "",
    address: "",
    phoneNumber: "",
  });

  const notify = () => {
    toast.success("Usuario creado correctamente", {
      position: "top-center",
      autoClose: 5000,
      pauseOnHover: true,
      draggable: true,
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setErrorMessages({
      userName: "",
      name: "",
      surname: "",
      email: "",
      age: "",
      address: "",
      phoneNumber: "",
    });

    let hasError = false;

    const forbiddenWords = ["puto", "mierda", "joto"];

    const containsForbiddenWord = forbiddenWords.some((word) =>
      formData.userName.toLowerCase().includes(word.toLowerCase())
    );

    if (
      containsForbiddenWord ||
      !/^[a-zA-Z0-9_]{3,16}$/.test(formData.userName)
    ) {
      setErrorMessages((prevErrorMessages) => ({
        ...prevErrorMessages,
        userName: "El nombre de usuario no es válido.",
      }));
      hasError = true;
    }

    if (!/^.{2,25}$/.test(formData.name)) {
      setErrorMessages((prevErrorMessages) => ({
        ...prevErrorMessages,
        name: "El nombre debe tener un minimo de 2 y un maximo de 25 caracteres.",
      }));
      hasError = true;
    }

    if (!/^.{2,25}$/.test(formData.surname)) {
      setErrorMessages((prevErrorMessages) => ({
        ...prevErrorMessages,
        surname:
          "Ingrese solamente su primer apellido, con un máximo de 25 caracteres.",
      }));
      hasError = true;
    }

    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    if (!emailRegex.test(formData.email)) {
      setErrorMessages((prevErrorMessages) => ({
        ...prevErrorMessages,
        email: "Por favor ingrese un correo electrónico válido.",
      }));
      hasError = true;
    }

    if (!formData.age) {
      setErrorMessages((prevErrorMessages) => ({
        ...prevErrorMessages,
        age: "Debes ingresar una fecha de nacimiento.",
      }));
      hasError = true;
    }

    if (formData.address.length < 5 || formData.address.length > 25) {
      setErrorMessages((prevErrorMessages) => ({
        ...prevErrorMessages,
        address: "La dirección debe tener entre 5 y 25 caracteres.",
      }));
      hasError = true;
    }

    if (!/^\d{5,15}$/.test(formData.phoneNumber)) {
      setErrorMessages((prevErrorMessages) => ({
        ...prevErrorMessages,
        phoneNumber: "Debes ingresar un número de teléfono válido.",
      }));
      hasError = true;
    }

    setError(hasError);

    setError(hasError);
    setValidUser(!hasError);
  };

  useEffect(() => {
    if (validUser) {
      notify();
    }
  }, [validUser]);

  const getInputClassName = (fieldName) => {
    const hasError = errorMessages[fieldName];
    return hasError
      ? "block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 appearance-none dark:text-white dark:border-red-500 focus:outline-none focus:ring-0 border-red-600 focus:border-red-600 dark:focus-border-red-500 peer"
      : "block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-300 dark:bg-gray-700 border-0 border-b-2 border-green-600 dark:border-green-500 appearance-none dark:text-white dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer";
  };

  return (
    <div
      className="flex flex-col items-center border-solid rounded-lg bg-slate-400 p-[10px] "
      id="PersonalData"
    >
      <h4 className="py-8 font-bold text-4xl">MyProfile</h4>

      <label htmlFor="userName">User name: </label>
      <input
        type="text"
        className={getInputClassName("userName")}
        name="userName"
        id="userName"
        value={formData.userName}
        onChange={handleChange}
        placeholder="Ingrese su usuario"
      />
      {errorMessages.userName && (
        <p className="text-grey-500 bg-slate-500 rounded-xl p-2 my-2">
          {errorMessages.userName}
        </p>
      )}

      <label className="pt-8" htmlFor="name">
        Full name:{" "}
      </label>
      <input
        type="text"
        className={getInputClassName("name")}
        placeholder="Ingrese su nombre"
        value={formData.name}
        name="name"
        id="name"
        onChange={handleChange}
      />
      {errorMessages.name && (
        <p className="text-grey-500 bg-slate-500 rounded-xl p-2 my-2">
          {errorMessages.name}
        </p>
      )}

      <label className="pt-8" htmlFor="surname">
        Surname:{" "}
      </label>
      <input
        placeholder="Ingrese su apellido"
        type="text"
        value={formData.surname}
        name="surname"
        id="surname"
        className={getInputClassName("surname")}
        onChange={handleChange}
      />
      {errorMessages.surname && (
        <p className="text-grey-500 bg-slate-500 rounded-xl p-2 my-2">
          {errorMessages.surname}
        </p>
      )}

      <label className="pt-8" htmlFor="email">
        eMail:{" "}
      </label>
      <input
        placeholder="Ingrese su email"
        type="text"
        className={getInputClassName("email")}
        value={formData.email}
        onChange={handleChange}
        name="email"
        id="email"
      />
      {errorMessages.email && (
        <p className="text-grey-500 bg-slate-500 rounded-xl p-2 my-2">
          {errorMessages.email}
        </p>
      )}

      <label className="pt-8" htmlFor="age">
        Fecha de nacimiento:{" "}
      </label>
      <input
        type="date"
        name="age"
        id="age"
        className={getInputClassName("age")}
        value={formData.age}
        onChange={handleChange}
      />

      {errorMessages.age && (
        <p className="text-grey-500 bg-slate-500 rounded-xl p-2 my-2">
          {errorMessages.age}
        </p>
      )}

      <label className="pt-8" htmlFor="address">
        Address:{" "}
      </label>
      <input
        placeholder="Ingrese su dirección"
        type="text"
        onChange={handleChange}
        name="address"
        className={getInputClassName("address")}
        id="address"
        value={formData.address}
      />
      {errorMessages.address && (
        <p className="text-grey-500 bg-slate-500 rounded-xl p-2 my-2">
          {errorMessages.address}
        </p>
      )}

      <label className="pt-8" htmlFor="phoneNumber">
        Phone Number:{" "}
      </label>
      <input
        placeholder="Ingrese su número de teléfono"
        type="number"
        onChange={handleChange}
        name="phoneNumber"
        id="phoneNumber"
        className={getInputClassName("phoneNumber")}
        inputMode="numeric"
        value={formData.phoneNumber}
      />
      {errorMessages.phoneNumber && (
        <p className="text-grey-500 bg-slate-500 rounded-xl p-2 my-2">
          {errorMessages.phoneNumber}
        </p>
      )}

      <button
        onClick={handleSubmit}
        disabled={validUser}
        className={
          validUser
            ? "mt-4 border-2 border-purple-600 bg-slate-500 rounded-lg px-3 py-2 duration-500 text-black "
            : "mt-4 border-2 border-purple-600 rounded-lg px-3 py-2 duration-500 text-purple-400 cursor-pointer hover:bg-purple-600 hover:text-purple-200"
        }
      >
        Submit
      </button>

      {error && (
        <p>Por favor revisa nuevamente el formulario antes de enviarlo</p>
      )}
      {validUser && <ToastContainer />}
    </div>
  );
};

export default MyProfile;