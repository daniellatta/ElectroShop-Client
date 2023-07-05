'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaTruck } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { cleanDetail, fetchById } from '@/redux/features/products';
import { addProduct } from '@/redux/features/shoppingCart';
import Ratings from '@/components/Ratings/Ratings';


const DetailPage = ({ params }) => {
  const { id } = params;
  const dispatch = useDispatch();
  const { productDetail } = useSelector((state) => state.items);

  useEffect(() => {
    dispatch(fetchById(id));

    return () => {
      dispatch(cleanDetail());
    };
  }, [id]);

  if (!productDetail) {
    return <div>Loading...</div>;
  }

  const handleBuyButton = () => {
    dispatch(addProduct({ item: productDetail }));
  };

  const { name, description, price, stock, image } = productDetail;

  return (
    <div className='flex flex-col bg-slate-700 h-full min-h-screen mt-10 gap-10'>
      <div className='px-4 pt-10 pb-0'>
        <Link
          href='/products'
          className='text-gray-400 hover:text-gray-500 ml-40 p-0 mb-0'>
          Back
        </Link>
      </div>
      <div className='flex flex-col items-center justify-center mx-60 bg-slate-800 rounded-lg shadow-lg p-10 gap-10 mb-10 '>
        <div className='flex w-90vw'>
          <div className='w-9/10'>
            {image ? (
              <Image
                src={image}
                width={600}
                height={600}
                priority
                alt={`Image of ${name}`}
                className='object-cover h-full w-full p-4'
              />
            ) : (
              <div>Loading image...</div>
            )}
          </div>
          <div className='ml-10 flex flex-col justify-between rounded-lg border border-gray-600 p-8 m-4'>
            <div>
              <h1 className='text-2xl font-bold text-white mb-6'>{name}</h1>
              <div className='flex items-center text-xl text-white mb-6'>
                ${price}
              </div>
              <p className='flex items-center text-green-400 mb-6'>
                <FaTruck className='text-green-400 mr-2 ' />
                Shipping nationwide
              </p>
            </div>
            <p className='text-gray-600 text-white mb-4'>{description}</p>
            <p className='text-xl text-white'>Stock: {stock}</p>
            <Link href='/completePurchase'>
              <button
                onClick={handleBuyButton}
                className='bg-green-500 hover:bg-green-700 text-white rounded-md py-2 px-4 mt-4 w-full'>
                Buy Now
              </button>
            </Link>
          </div>
        </div>
        <div className='w-full'>
          <Ratings product={productDetail} />
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
