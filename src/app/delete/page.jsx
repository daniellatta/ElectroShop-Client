'use client';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser, fetchUsers } from '@/redux/features/adminDelete';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useAuthenticate from '@/hook/Authenticated';
import { useRouter } from 'next/navigation';

const Delete = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const users = useSelector((state) => state.adminDelete.users);
  const isAuthenticated = typeof localStorage !== 'undefined' && localStorage.getItem('isAuthenticated');
  const userEmail = isAuthenticated ? localStorage.getItem('email') : null;
  const { secureRouteUser } = useAuthenticate();

  useEffect(() => {
    secureRouteUser();
    dispatch(fetchUsers());
  }, [dispatch]);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleDeleteUser = (e) => {
    e.preventDefault();

    if (username.trim() === '' || password.trim() === '') {
      toast.error('Por favor, completa todos los campos.');
      return;
    }

    if (password.length < 8 || password.length > 65) {
      toast.error('La contraseña debe tener entre 8 y 20 caracteres.');
      return;
    }

    if (username.length < 3 || username.length > 35) {
      toast.error('El nombre de usuario debe tener entre 3 y 15 caracteres.');
      return;
    }

    const userToDelete = users.find(
      (user) => user.username === username && user.password === password
    );

    console.log(userToDelete);
    if (userEmail === username) {
      dispatch(deleteUser(parseInt(localStorage.id)));
      localStorage.clear();
      localStorage.setItem('isAuthenticated', false);
      notify();
      router.push('/');
    } else {
      toast.warning('Algo ha fallado.');
      console.error('Credenciales invalidas.');
    }
  };

  console.log(username);
  console.log(password);

  const notify = () => {
    toast.success('Usuario suspendido', {
      position: 'top-center',
      autoClose: 2000,
      pauseOnHover: true,
      draggable: true,
    });
  };

  return (
    <div className='bg-black justify-center flex h-[100vh] pt-16 '>
      <div className='text-center w-[60%] bg-slate-600 text-3xl '>
        <h1>Estas seguro que deseas eliminar tu cuenta?</h1>
        <form className='flex flex-col '>
          <label className='py-5 '>Ingresa tu email</label>
          <div className='flex justify-center'>
            <input
              onChange={(e) => setUsername(e.target.value)}
              className='w-[400px]'
              placeholder='email...'
              value={username}
            />
          </div>

          <label className='py-5'>Ingresa tu contraseña</label>
          <div className='justify-center flex'>
            <input
              onChange={(e) => setPassword(e.target.value)}
              className='w-[400px]'
              type='password'
              placeholder='password...'
              value={password}
            />
          </div>
          <div className='flex justify-center'>
            <button
              className='bg-red-500 p-4 my-8 w-[300px] rounded-xl '
              type='submit'
              onClick={handleDeleteUser}>
              Eliminar
            </button>
          </div>
        </form>
        <div className='flex flex-col items-center'>
          <h1>O si no puedes volver al inicio tocando aqui</h1>
          <a href='/' className='bg-green-500 p-4 mt-8 w-[300px] rounded-xl'>
            Volver al incio
          </a>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Delete;
