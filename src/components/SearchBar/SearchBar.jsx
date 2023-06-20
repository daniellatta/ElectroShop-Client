'use client';

import { fetchProductByName } from '@/redux/features/searchBar';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function SearchBar() {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.items);

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
      {products
        .filter((item) => {
          const searchTerm = input.toLowerCase();
          const name = item.name.toLowerCase();
          return (
            searchTerm &&
            (name.startsWith(searchTerm) || name.includes(searchTerm)) &&
            name !== searchTerm
          );
        })
        .slice(0, 6)
        .map((item) => {
          return (
            <div
              key={item.id}
              onClick={() => {
                setInput(item.name);
              }}>
              {item.name}
            </div>
          );
        })}
    </div>
  );
}
