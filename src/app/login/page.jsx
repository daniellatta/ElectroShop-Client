'use client';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  googleAuth,
  googleAuthFunc,
  login,
  loginUser,
  userAuth,
} from '../../redux/features/login';
import { useRouter } from 'next/navigation';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Link from 'next/link';
import GoogleLoginButton from '@/components/GoogleButton/GoogleButton';

const LoginPage = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const { user, isAuthenticated } = useSelector((state) => state.auth);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    if (Object.keys(user).length && user.status) {
      setError('');
      if (!user.user.data.active) {
        localStorage.setItem('active', user.user.data.active);
        localStorage.setItem('token', user.token);
        localStorage.setItem('email', user.user.data.email);
        localStorage.setItem('id', user.user.data.id);
        localStorage.setItem('admin', user.user.data.admin);
        notifyAccount();
        setTimeout(() => {
          router.push('/reactivate');
          localStorage.setItem('isAuthenticated', false);
        }, 1200);
      } else {
        localStorage.setItem('active', user.user.data.active);
        localStorage.setItem('token', user.token);
        localStorage.setItem('email', user.user.data.email);
        localStorage.setItem('id', user.user.data.id);
        localStorage.setItem('admin', user.user.data.admin);
        dispatch(login());
        notify();
        setTimeout(() => {
          router.push('/');
        }, 2000);
      }
    } else if (Object.keys(user).length && !user.status) {
      setError('Invalid Credentials');
    }
  }, [email, user]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim() === '' || password.trim() === '') {
      setError('Por favor, completa todos los campos');
      return;
    }
    dispatch(userAuth({ email, password }));
  };

  const handleAuth = () => {
    let left = window.screen.width - 400;
    left = left > 0 ? left / 2 : 0;
    let top = window.screen.height - 300;
    top = top > 0 ? top / 5 : 0;
    const windowFeatures = `width=452, height=633, top=${top}, left=${left}`;
    console.log("Me pulsaste cachon");
    dispatch(googleAuth(windowFeatures));
  };

  const notify = () => {
    toast.info('Redirigiendo al inicio.', {
      position: 'top-left',
      autoClose: 5000,
      pauseOnHover: true,
      draggable: true,
    });
  };

  const notifyAccount = () => {
    toast.info('Reactiva tu cuenta.', {
      position: 'top-left',
      autoClose: 5000,
      pauseOnHover: true,
      draggable: true,
    });
  };

  return (
    <div className='bg-black h-screen flex items-center justify-center'>
      <div className='bg-white p-16 rounded shadow-lg'>
        <h2 className='text-3xl font-bold mb-4 text-center'>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className='mb-4'>
            <label htmlFor='email' className='block font-bold mb-1'>
              Email
            </label>
            <input
              type='text'
              id='email'
              className='w-full border border-gray-300 px-3 py-2 rounded'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
            className='bg-blue-500 hover:bg-blue-800 text-white px-4 py-2 rounded'>
            Login
          </button>
        </form>
        <div className='flex flex-col items-center gap-2 mt-4'>
          <GoogleLoginButton onClick={handleAuth} />
          <Link
            href='/create'
            alt='create'
            className='flex hover:text-blue-500 transition-colors duration-300'>
            Create an account
          </Link>
        </div>
        <ToastContainer />
        {isAuthenticated ? (
          <p className='text-2xl text-green-600 mt-4'>Signing In. . .</p>
        ) : (
          ''
        )}
      </div>
    </div>
  );
};

export default LoginPage;
