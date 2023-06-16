'use client';

import { fetchProductByName } from '@/redux/features/searchBar';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function SearchBar() {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(fetchProductByName(input));
    setInput('');
  };

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          name='product'
          placeholder='Keyboard...'
          onChange={handleChange}
          value={input}
        />
        <button type='submit'>search</button>
      </form>
    </div>
  );
}
