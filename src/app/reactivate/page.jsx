'use client';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers, reactivateAccount } from '@/redux/features/adminDelete';
import { login } from '../../redux/features/login';
import { ToastContainer, toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import 'react-toastify/dist/ReactToastify.css';
import useAuthenticate from '@/hook/Authenticated';

const page = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const users = useSelector((state) => state.adminDelete.users);
  const userDni = JSON.parse(localStorage.getItem('id'));
  const [userData, setUserData] = useState({
    id: 0,
    dni: '',
    name: '',
    username: '',
    email: '',
  });
  const { secureRouteUser } = useAuthenticate();

  useEffect(() => {
    secureRouteUser();
    dispatch(fetchUsers());

    const userInfo = users.find((user) => user.id === userDni);
    if (userInfo) {
      setUserData({
        id: userInfo.id,
        name: userInfo.name,
        dni: userInfo.dni,
        username: userInfo.username,
        email: userInfo.email,
      });
    }
  }, [dispatch, users]);

  const handleReactivateUser = (userId) => {
    dispatch(reactivateAccount(userId));
    dispatch(login(userId));
    localStorage.setItem('token', userData.token);
    localStorage.setItem('email', userData.email);
    localStorage.setItem('admin', userData.admin);
    localStorage.setItem('active', true);
    notifyActive();
    setTimeout(() => {
      router.push('/');
    }, 3000);
  };

  const notifyActive = () => {
    toast.success('Usuario REactivado correctamente', {
      position: 'top-center',
      autoClose: 2000,
      pauseOnHover: true,
      draggable: true,
    });
  };

  return (
    <div className='pt-20'>
      <div>
        <div className='flex'>
          <p>Reactiva tu cuenta</p>
          <button
            onClick={() => handleReactivateUser(userData.id)}
            className='bg-green-500 pl-4'>
            Reactivar
          </button>
        </div>
        <div className='flex flex-col'>
          <p>Son estos tus datos?</p>
          <p>{userData.name} </p>
          <p>{userData.dni}</p>
          <p>{userData.username}</p>
          <p>{userData.email}</p>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default page;
