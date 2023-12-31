'use client';
import { useDispatch, useSelector } from 'react-redux';
import Image from 'next/image';
import { useEffect } from 'react';
import { fetchProducts } from '@/redux/features/products';
import Link from 'next/link';


const FeaturedItems = () => {
  const items = useSelector((state) => state.items);
  const dispatch = useDispatch();

  let products = [...items.products];
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  let randomIndices = [];

  randomIndices[0] = Math.floor(Math.random() * products.length);
  randomIndices[1] = Math.floor(Math.random() * products.length);
  randomIndices[2] = Math.floor(Math.random() * products.length);
  randomIndices[3] = Math.floor(Math.random() * products.length);
  randomIndices[4] = Math.floor(Math.random() * products.length);

  return (
    <div>
      <h1 className='text-center text-2xl font-black text-indigo-400 pt-4 pb-6'>
        Featured products
      </h1>
      <div className='grid grid-cols-4 gap-4 px-4 w-[85%] m-auto'>
        <div className='col-span-2'>
          <Link href={`/detail/${products[randomIndices[0]]?.id}`}>
            <Image
              key={products[randomIndices[0]]?.id}
              src={products[randomIndices[0]]?.image}
              alt='Featured Item'
              width={450}
              height={450}
              priority
              className='w-full border-white border-2 rounded-xl cursor-pointer h-[450px] hover:scale-[1.02] transition-all duration-500'
            />
          </Link>
        </div>
        <div>
          <div className='mb-[10px]'>
            <Link href={`/detail/${products[randomIndices[1]]?.id}`}>
              <Image
                key={products[randomIndices[1]]?.id}
                src={products[randomIndices[1]]?.image}
                alt='Featured Item'
                width={220}
                height={220}
                className='w-full h-[220px] hover:scale-[1.02] transition-all duration-500 border-white border-2 rounded-xl cursor-pointer '
              />
            </Link>
          </div>
          <div>
            <Link href={`/detail/${products[randomIndices[2]]?.id}`}>
              <Image
                key={products[randomIndices[2]]?.id}
                src={products[randomIndices[2]]?.image}
                alt='Featured Item'
                width={220}
                height={220}
                className='w-full h-[220px] hover:scale-[1.02] transition-all duration-500 border-white border-2 rounded-xl cursor-pointer'
              />
            </Link>
          </div>
        </div>
        <div className=''>
          <div className='mb-[10px]'>
            <Link href={`/detail/${products[randomIndices[3]]?.id}`}>
              <Image
                key={products[randomIndices[3]]?.id}
                src={products[randomIndices[3]]?.image}
                alt='Featured Item'
                width={220}
                height={220}
                className='w-full h-[220px] hover:scale-[1.02] transition-all duration-500 border-white border-2 rounded-xl cursor-pointer'
              />
            </Link>
          </div>
          <div>
            <Link href={`/detail/${products[randomIndices[4]]?.id}`}>
              <Image
                key={products[randomIndices[4]]?.id}
                src={products[randomIndices[4]]?.image}
                alt='Featured Item'
                width={220}
                height={220}
                className='w-full h-[220px] hover:scale-[1.02] transition-all duration-500 border-white border-2 rounded-xl cursor-pointer'
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedItems;
