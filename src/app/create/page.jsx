"use client";
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { createUser } from "@/redux/features/create";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const page = () => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    name: "",
    dni: "",
    username: "",
    email: "",
    password: "",
    birthDate: "",
    adress: "",
    city: "",
    phoneNumber: "",
  });

  const [error, setError] = useState(false);
  const [validUser, setValidUser] = useState(false);

  const [errorMessages, setErrorMessages] = useState({
    username: "",
    password: "",
    name: "",
    dni: "",
    email: "",
    age: "",
    adress: "",
    phoneNumber: "",
    city: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setErrorMessages({
      username: "",
      password: "",
      name: "",
      dni: "",
      email: "",
      age: "",
      adress: "",
      phoneNumber: "",
      city: "",
    });
    let hasError = false;

    const forbiddenWords = ["puto", "mierda", "joto"];

    const containsForbiddenWord = forbiddenWords.some((word) =>
      formData.username.toLowerCase().includes(word.toLowerCase())
    );

    if (
      containsForbiddenWord ||
      !formData.username ||
      !/^.{3,15}$/.test(formData.username)
    ) {
      setErrorMessages((prevErrorMessages) => ({
        ...prevErrorMessages,
        username: "El nombre de usuario no es válido.",
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

    if (!/^.{2,25}$/.test(formData.dni)) {
      setErrorMessages((prevErrorMessages) => ({
        ...prevErrorMessages,
        dni: "Ingrese su DNI correctamente.",
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

    if (!formData.birthDate) {
      setErrorMessages((prevErrorMessages) => ({
        ...prevErrorMessages,
        birthDate: "Debes ingresar una fecha de nacimiento.",
      }));
      hasError = true;
    }

    if (formData.adress.length < 5 || formData.adress.length > 25) {
      setErrorMessages((prevErrorMessages) => ({
        ...prevErrorMessages,
        adress: "La dirección debe tener entre 5 y 25 caracteres.",
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

    if (formData.city.length < 3 || formData.city.length > 25) {
      setErrorMessages((prevErrorMessages) => ({
        ...prevErrorMessages,
        city: "La ciudad debe tener entre 3 y 25 caracteres.",
      }));
      hasError = true;
    }

    if (formData.password.length < 8 || formData.password.length > 20) {
      setErrorMessages((prevErrorMessages) => ({
        ...prevErrorMessages,
        password: "La contraseña debe tener entre 8 y 20 caracteres.",
      }));
      hasError = true;
    }

    setError(hasError);

    setError(hasError);
    setValidUser(!hasError);

    if (!hasError) {
      dispatch(createUser(formData));
      setValidUser(true);
    }
  };

  useEffect(() => {
    if (validUser) {
      notify();
    }
  }, [validUser]);

  const notify = () => {
    toast.success("Usuario creado correctamente", {
      position: "top-center",
      autoClose: 5000,
      pauseOnHover: true,
      draggable: true,
    });
  };

  const getInputClassName = (fieldName) => {
    const hasError = errorMessages[fieldName];
    return hasError
      ? "block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 appearance-none dark:text-white dark:border-red-500 focus:outline-none focus:ring-0 border-red-600 focus:border-red-600 dark:focus-border-red-500 peer"
      : "block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-300 dark:bg-gray-700 border-0 border-b-2 border-green-600 dark:border-green-500 appearance-none dark:text-white dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer";
  };

  return (
    <div className="flex justify-center text-white bg-black p-10">
      <div
        className="flex w-[70%] flex-col items-center border-solid rounded-lg bg-slate-400 p-[10px] "
        id="PersonalData"
      >
        <h4 className="py-8 font-bold text-4xl">MyProfile</h4>

        <label htmlFor="username">User name: </label>
        <input
          type="text"
          className={getInputClassName("username")}
          name="username"
          id="username"
          value={formData.username}
          onChange={handleChange}
          placeholder="Ingrese su usuario"
        />
        {errorMessages.username && (
          <p className="text-grey-500 bg-slate-500 rounded-xl p-2 my-2">
            {errorMessages.username}
          </p>
        )}

        <label className="pt-8" htmlFor="password">
          Contraseña:
        </label>
        <input
          type="password"
          className={getInputClassName("password")}
          name="password"
          id="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Ingrese su usuario"
        />
        {errorMessages.password && (
          <p className="text-grey-500 bg-slate-500 rounded-xl p-2 my-2">
            {errorMessages.password}
          </p>
        )}

        <label className="pt-8" htmlFor="name">
          Nombre completo:
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

        <label className="pt-8" htmlFor="dni">
          D.N.I:
        </label>
        <input
          placeholder="Ingrese su apellido"
          type="text"
          value={formData.dni}
          name="dni"
          id="dni"
          className={getInputClassName("dni")}
          onChange={handleChange}
        />
        {errorMessages.dni && (
          <p className="text-grey-500 bg-slate-500 rounded-xl p-2 my-2">
            {errorMessages.dni}
          </p>
        )}

        <label className="pt-8" htmlFor="email">
          e-Mail:{" "}
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

        <label className="pt-8" htmlFor="birthDate">
          Fecha de nacimiento:{" "}
        </label>
        <input
          type="date"
          name="birthDate"
          id="birthDate"
          className={getInputClassName("birthDate")}
          value={formData.birthDate}
          onChange={handleChange}
        />

        {errorMessages.birthDate && (
          <p className="text-grey-500 bg-slate-500 rounded-xl p-2 my-2">
            {errorMessages.birthDate}
          </p>
        )}

        <label className="pt-8" htmlFor="adress">
          Direccion.
        </label>
        <input
          placeholder="Ingrese su dirección"
          type="text"
          onChange={handleChange}
          name="adress"
          className={getInputClassName("adress")}
          id="adress"
          value={formData.adress}
        />
        {errorMessages.adress && (
          <p className="text-grey-500 bg-slate-500 rounded-xl p-2 my-2">
            {errorMessages.adress}
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

        <label className="pt-8" htmlFor="city">
          Ciudad.
        </label>
        <input
          placeholder="Ingrese su ciudad."
          type="text"
          onChange={handleChange}
          name="city"
          id="city"
          className={getInputClassName("city")}
          inputMode="text"
          value={formData.city}
        />
        {errorMessages.city && (
          <p className="text-grey-500 bg-slate-500 rounded-xl p-2 my-2">
            {errorMessages.city}
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
    </div>
  );
};

export default page;

