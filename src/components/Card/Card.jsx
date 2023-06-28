'use client';

import { useState } from 'react';
import ModalCard from '../ModalCard/ModalCard';
import Image from 'next/image';

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
      <article
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
        }
        className='bg-slate-800 border-transparente rounded-lg p-2.5 cursor-pointer'>
        {image && (
          <div className='flex justify-center items-center mx-0'>
            <Image
              src={image}
              width={300}
              height={300}
              alt={`Imagen de ${name}`}
              priority
              className='border-transparent rounded-lg w-full h-full'
            />
          </div>
        )}
        {name && <h3 className='text-white'>{name}</h3>}
        {price && <h3 className='text-white'>{price}</h3>}
        {review && <h3 className='text-white'>{review.rating}</h3>}
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
