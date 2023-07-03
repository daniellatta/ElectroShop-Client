'use client';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGoogleAuth, login, loginUser } from '../../redux/features/login';
import axios from 'axios';
import { useRouter } from 'next/navigation';

const LoginPage = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (username.trim() === '' || password.trim() === '') {
      setError('Por favor, completa todos los campos');
      return;
    }

    const user = { username, password };

    try {
      const loginAction = loginUser(user);
      await dispatch(loginAction);

      const usersResponse = await axios.get(
        'http://localhost:8080/api/v1/user'
      );
      const users = usersResponse.data;

      const foundUser = users.find(
        (userData) =>
          userData.username === user.username &&
          userData.password === user.password
      );

      if (foundUser) {
        dispatch(login(foundUser));
        localStorage.setItem('token', foundUser.token);
        localStorage.setItem('username', foundUser.username);
      } else {
        console.log('Credenciales inválidas');
      }
    } catch (error) {
      console.log('Error:', error);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    const username = localStorage.getItem('username');

    if (token && token.trim() !== '' && username && username.trim() !== '') {
      dispatch(login({ token, username }));
    }
  }, [dispatch]);

  const handleAuth = () => {
    dispatch(fetchGoogleAuth());
    window.open(
      'http://localhost:8080/api/v1/auth/login/google',
      'Popup',
      '_blank'
    );
  };

  return (
    <div className='bg-black h-screen flex items-center justify-center'>
      <div className='bg-white p-8 rounded shadow-lg'>
        <h2 className='text-3xl font-bold mb-4'>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className='mb-4'>
            <label htmlFor='username' className='block font-bold mb-1'>
              Username
            </label>
            <input
              type='text'
              id='username'
              className='w-full border border-gray-300 px-3 py-2 rounded'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className='mb-4'>
            <label htmlFor='password' className='block font-bold mb-1'>
              Password
            </label>
            <input
              type='password'
              id='password'
              className='w-full border border-gray-300 px-3 py-2 rounded'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {error && <p className='text-red-600 mb-2'>{error}</p>}
          <button
            type='submit'
            className='bg-blue-500 text-white px-4 py-2 rounded'>
            Login
          </button>
        </form>
        <button onClick={handleAuth}>Login with google</button>
        {isAuthenticated ? (
          <p className='text-2xl text-green-600 mt-4'>Hola, estoy logeado</p>
        ) : (
          <p className='text-2xl text-red-600 mt-4'>Hola, no estoy logeado</p>
        )}
      </div>
    </div>
  );
};

export default LoginPage;
