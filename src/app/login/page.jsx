'use client';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/features/login';

const page = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = { username, password };
    dispatch(login(user));
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='Username'
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type='password'
        placeholder='Password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type='submit'>Login</button>
    </form>
  );
};

export default page;
