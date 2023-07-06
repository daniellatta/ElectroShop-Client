'use client';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers, reactivateAccount } from '@/redux/features/adminDelete';
import { login } from '../../redux/features/login';
import { ToastContainer, toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import 'react-toastify/dist/ReactToastify.css';
import useAuthenticate from '@/hook/Authenticated';

const Reactivate = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { user } = useSelector((state) => state.auth);
  const [userData, setUserData] = useState({
    token: user.user?.data.token,
    email: user.user?.data.email,
    admin: user.user?.data.admin,
  });
  const { secureRouteReActive } = useAuthenticate();

  useEffect(() => {
    secureRouteReActive();
  }, []);

  const handleHome = () => {
    router.push('/');
  };

  const handleReactivateUser = (userId) => {
    dispatch(reactivateAccount(userId));
    dispatch(login());
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
    toast.success('Usuario Reactivado correctamente', {
      position: 'top-center',
      autoClose: 2000,
      pauseOnHover: true,
      draggable: true,
    });
  };

  return (
    <div className='h-screen bg-slate-300 pt-20'>
      <div>
        <div className='flex items-center justify-center'>
          <p className='text-lg font-bold'>Reactiva tu cuenta</p>
          <button
            onClick={() => handleReactivateUser(userData.id)}
            className='bg-green-600 px-4 py-2 ml-4 text-white rounded hover:bg-green-700 focus:outline-none'>
            Reactivar
          </button>
          <button
            onClick={handleHome}
            className='bg-purple-600 px-4 py-2 ml-4 text-white rounded hover:bg-purple-800 focus:outline-none'>
            Volver al inicio
          </button>
        </div>
        <div className='px-40'>
          <div className='flex flex-col mt-4 bg-slate-600 rounded-xl p-4 text-center'>
            <p className='font-bold'>Son estos tus datos?</p>
            <p className='my-1'>Nombre: {userData.name}</p>
            <p className='my-1'>DNI: {userData.dni}</p>
            <p className='my-1'>Nombre de usuario: {userData.username}</p>
            <p className='my-1'>Correo electrónico: {userData.email}</p>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Reactivate;
