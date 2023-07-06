'use client';

import { useState } from 'react';
import ModalCard from '../ModalCard/ModalCard';
import Image from 'next/image';
import Link from 'next/link';
import { BsBagPlus } from 'react-icons/bs';

export default function Card({
  id,
  name,
  image,
  price,
  review,
  stock,
  description,
}) {
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClick = (card) => {
    setSelectedCard(card);
  };

  const handleCloseModal = () => {
    setSelectedCard(null);
  };

  return (
    <div>
      <article className='bg-slate-800 border-transparente rounded-lg p-2.5 cursor-pointer'>
        <button
          className='absolute mt-2 ml-2'
          onClick={() =>
            handleCardClick({
              id,
              name,
              image,
              price,
              review,
              stock,
              description,
            })
          }>
          <BsBagPlus
            size={24}
            className='text-slate-400 hover:-translate-y-1 hover:text-black-300 transition duration-300'
          />
        </button>
        <Link href={`/detail/${id}`}>
          {image && (
            <div className='flex justify-center items-center mx-0 max-h-200'>
              <Image
                style={{ width: '300px', height: '200px' }}
                src={image}
                width={300}
                height={200}
                alt={`Imagen de ${name}`}
                priority
                className='border-transparent rounded-lg'
              />
            </div>
          )}
          {name && <h3 className='text-white'>{name}</h3>}
          {price && <h3 className='text-white'>${price}</h3>}
          {review && <h3 className='text-white'>{review}</h3>}
        </Link>
      </article>
      {selectedCard && (
        <ModalCard
          isOpen={true}
          handleClose={handleCloseModal}
          image={image}
          title={name}
          description={description}
          price={price}
          stock={stock}
          id={id}
        />
      )}
    </div>
  );
}
