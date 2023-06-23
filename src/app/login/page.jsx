"use client";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/features/login";

const page = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = { username, password };
    dispatch(login(user));
  };
  return (
    <div className="bg-black mt-16">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="ml-4"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onSubmit={handleSubmit} type="submit" className="text-white">
          Login
        </button>
        {isAuthenticated ? (
          <p className="text-16xl text-green-600">Hola estoy Logeado</p>
        ) : (
          <p className="text-red-600 text-16xl">Hola, No estoy logeado</p>
        )}
      </form>
    </div>
  );
};

export default page;
