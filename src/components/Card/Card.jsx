'use client';

import { useEffect, useState } from 'react';
import ModalCard from '../../components/ModalCard/ModalCard';

export default function Card() {
  const [info, setInfo] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then((res) => res.json())
      .then((data) => setInfo(data.slice(0, 5)));
  }, []);

  const handleCardClick = (card) => {
    setSelectedCard(card);
  };

  const handleCloseModal = () => {
    setSelectedCard(null);
  };

  return (
    <div>
      {info.map((album) => (
        <section key={album.id} onClick={() => handleCardClick(album)}>
          <article>
            {album.title}
            <img src={album.url} alt="" />
          </article>
        </section>
      ))}
      {selectedCard && (
        <ModalCard
          isOpen={true}
          handleClose={handleCloseModal}
          image={selectedCard.url}
          title={selectedCard.title}
        />
      )}
    </div>
  );
}