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
    <div className='mt-4'>
      <form onSubmit={handleSubmit} className='flex items-center'>
        <input
          type='text'
          name='product'
          placeholder='Keyboard...'
          onChange={handleChange}
          value={input}
          className='bg-gray-50 w-[350px] block border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"'
        />
        <button
          type='submit'
          className='text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700'>
          search
        </button>
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
