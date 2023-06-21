'use client';

import { useState } from 'react';
import ModalCard from '../ModalCard/ModalCard';

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
        }>
        {name && <h3>{name}</h3>}
        {price && <h3>{price}</h3>}
        {review && <h3>{review}</h3>}
        {image && <img src={image} alt='' />}
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
