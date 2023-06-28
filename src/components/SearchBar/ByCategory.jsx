'use client';

import { fetchByCategory, fetchProducts } from '@/redux/features/products';
import { useDispatch, useSelector } from 'react-redux';

export default function ByCategory() {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.items.categories);

  const handleChange = (e) => {
    const category = e.target.value;
    if (category === 'All') return dispatch(fetchProducts());
    dispatch(fetchByCategory(category));
    console.log(category);
  };

  return (
    <div className='flex flex-col justify-center items-center'>
      <select
        onChange={handleChange}
        defaultValue='All'
        className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-fit p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'>
        <option value='All'>All Categories</option>
        {categories &&
          categories.map((category) => {
            return (
              <option value={category.id} key={category.id}>
                {category.name}
              </option>
            );
          })}
      </select>
    </div>
  );
}
