"use client";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchUsers,
  deleteUser,
  reactivateAccount,
} from "@/redux/features/adminDelete";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useAuthenticate from "@/hook/Authenticated";

const UserList = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.adminDelete.users);
  const loading = useSelector((state) => state.adminDelete.loading);
  const error = useSelector((state) => state.adminDelete.error);
  const [searchId, setSearchId] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);
  const { secureRouteAdmin } = useAuthenticate();

  useEffect(() => {
    secureRouteAdmin();
    dispatch(fetchUsers());

  }, [dispatch]);

  useEffect(() => {
    if (users.length > 0) {
      const sortedUsers = users.slice().sort((a, b) => a.id - b.id);
      setFilteredUsers(sortedUsers);
    }
  }, [users]);

  const handleSearch = () => {
    if (!searchId) {
      setFilteredUsers(users);
    } else {
      const filtered = users.filter((user) => user.id === parseInt(searchId));
      setFilteredUsers(filtered);
    }
  };

  const handleDeleteUser = (userId) => {
    dispatch(deleteUser(userId));
    notify();
    setTimeout(() => {
      window.location.reload();
    }, 1500);
  };

  const handleReactivateUser = (userId) => {
    dispatch(reactivateAccount(userId));
    notifyActive();
    setTimeout(() => {
      window.location.reload();
    }, 1500);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const notify = () => {
    toast.success("Usuario borrado correctamente", {
      position: "top-center",
      autoClose: 2000,
      pauseOnHover: true,
      draggable: true,
    });
  };

  const notifyActive = () => {
    toast.success("Usuario activado correctamente", {
      position: "top-center",
      autoClose: 2000,
      pauseOnHover: true,
      draggable: true,
    });
  };

  return (
    <div className="bg-gray-100 px-4 pt-16">
      <h1 className="text-2xl font-bold mb-4">User List</h1>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Buscar por ID"
          value={searchId}
          onChange={(e) => setSearchId(e.target.value)}
        />
        <button
          className="p-2 ml-4 rounded-xl bg-blue-300 hover:bg-blue-400"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error: {error}</div>
      ) : filteredUsers.length > 0 ? (
        filteredUsers.map((user) => (
          <div key={user.id} className="bg-white p-4 rounded-lg shadow mb-4">
            <p className="text-lg">{user.name}</p>
            <p>ID: {user.id}</p>
            <p>ID: {user.email}</p>
            <p className="text-sm">
              {user.active ? "Activo: true" : "Activo: Falso"}
            </p>
            <button
              className={
                user.active
                  ? "bg-red-500 hover:bg-red-200 text-white px-4 py-2 rounded-md mt-2 mr-4"
                  : "bg-slate-800 text-white px-4 py-2 rounded-md mt-2 mr-4"
              }
              onClick={() => handleDeleteUser(user.id)}
              disabled={user.active ? false : true}
            >
              Delete
            </button>
            <button
              className={
                user.active
                  ? "bg-slate-800 text-white px-4 py-2 rounded-md mt-2 mr-4"
                  : "bg-green-500 hover:bg-green-900 text-white px-4 py-2 rounded-md mt-2"
              }
              onClick={() => handleReactivateUser(user.id)}
              disabled={user.active ? true : false}
            >
              Activate
            </button>
            <ToastContainer />
          </div>
        ))
      ) : (
        <div>No users found</div>
      )}
    </div>
  );
};

export default UserList;
