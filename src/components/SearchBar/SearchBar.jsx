'use client';

import { fetchProductByName } from '@/redux/features/searchBar';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import ByCategory from './ByCategory';
import { orderProducts } from '@/redux/features/products';

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

  const handleOrder = (e) => {
    dispatch(orderProducts(e.target.value));
  };

  return (
    <div className='flex justify-center items-center mt-4'>
      <form onSubmit={handleSubmit} className='flex items-center'>
        <ByCategory />
        <input
          type='text'
          name='product'
          placeholder='Keyboard...'
          onChange={handleChange}
          value={input}
          className='bg-gray-50 w-[450px] block border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"'
        />
        <button
          type='submit'
          className='text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700'>
          search
        </button>
      </form>
      <div className='absolute right-4'>
        <select
          onChange={handleOrder}
          defaultValue={'default'}
          className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-fit p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'>
          <option value='default' hidden disabled>
            Order
          </option>
          <option value='Az'>Alphabetically, A to Z</option>
          <option value='Za'>Alphabetically, Z to A</option>
        </select>
      </div>
    </div>
  );
}
