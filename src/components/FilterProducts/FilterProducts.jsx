'use client';

import { useDispatch } from 'react-redux';
import { fetchByPrice } from '@/redux/features/products';
import { useState } from 'react';
import ByPrice from './ByPrice';
import ByCategory from './ByCategory';

export default function FilterProducts() {
  const dispatch = useDispatch();
  const [filterValues, setFilterValues] = useState({
    price: { min: '0', max: '500' },
    category: 0,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchByPrice(filterValues.price));
  };

  return (
    <div className='w-2/12 h-screen bg-slate-600 fixed'>
      <section className='text-white mt-10'>
        <h3 className='text-center'>Price</h3>
        <ByPrice
          filterValues={filterValues.price}
          setFilterValues={(values) =>
            setFilterValues({ ...filterValues, price: values })
          }
        />
      </section>
      <section className='flex flex-col gap-2 justify-center items-center mt-5'>
        <h3 className='text-center'>Category</h3>
        <ByCategory
          filterValues={filterValues.category}
          setFilterValues={(value) =>
            setFilterValues({ ...filterValues, category: value })
          }
        />
      </section>
      <div className='flex justify-center items-center mt-5'>
        <button
          onClick={handleSubmit}
          className='text-gray-900 bg-white border focus:outline-none hover:bg-gray-100 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600'>
          Submit
        </button>
      </div>
    </div>
  );
}
