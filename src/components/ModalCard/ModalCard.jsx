'use client';

import React from 'react';
import Modal from 'react-modal';
import Image from 'next/image';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { addProduct } from '@/redux/features/shoppingCart';

const ModalCard = ({
  isOpen,
  handleClose,
  image,
  title,
  description,
  price,
  stock,
  id,
}) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    const foo = {
      item: { id, name: title, stock, price, image, description },
    };
    dispatch(addProduct(foo));
  };
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={handleClose}
      className='fixed inset-0 flex items-center justify-center'
      overlayClassName='fixed inset-0 bg-gray-500 bg-opacity-50'
      contentLabel='Modal'
      ariaHideApp={false}>
      <div className='w-3/5 bg-slate-700 rounded-lg shadow-lg p-4 flex'>
        <div className='w-1/3'>
          <Image
            width={400}
            height={400}
            src={image}
            alt=''
            className='object-cover w-full h-full'
          />
        </div>
        <div className='w-2/3 ml-4'>
          <div className='flex items-start justify-between mb-4'>
            <Link href={`/detail/${id}`}>
              <h2 className='text-2xl font-bold text-white'>{title}</h2>
            </Link>
            <button className='text-white text-xl' onClick={handleClose}>
              <AiOutlineCloseCircle
                size={24}
                className='hover:text-red-500 transition duration-300'
              />
            </button>
          </div>
          <h2 className='text-1xl font-bold mb-2 text-white'>${price}</h2>
          <p className='text-white'>{description}</p>
          {stock > 0 ? (
            <p className='mt-4 text-white'>Only {stock} remaining!</p>
          ) : (
            <p className='mt-4 text-white'>Out of stock!</p>
          )}
          <button
            onClick={handleAddToCart}
            disabled={!stock}
            className={stock > 0 ? `bg-green-500 hover:bg-green-700 text-white rounded-md py-2 px-4 mt-4` : `bg-red-500 text-white rounded-md py-2 px-4 mt-4`}>
            Add to Cart
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default ModalCard;
