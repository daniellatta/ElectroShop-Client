'use client';

import ModalCard from '../../components/ModalCard/ModalCard';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '@/redux/features/products';
import { useEffect, useState } from 'react';

export default function Card() {
  const [info, setInfo] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);
  const dispatch = useDispatch();
  const items = useSelector((state) => state.items);
  const byName = useSelector((state) => state.byName);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const handleCardClick = (card) => {
    setSelectedCard(card);
  };

  const handleCloseModal = () => {
    setSelectedCard(null);
  };

  return (
    <div>
      {byName.productsByName &&
        byName.productsByName.map((item) => {
          return (
            <section key={item.id}>
              <article>
                <img src={item.image} alt='' />
                <h3>{item.image && item.name}</h3>
              </article>
            </section>
          );
        })}
      {items.loading ? <h1>Loading...</h1> : ''}
      {!byName.productsByName.length &&
        items?.products.map((item) => {
          return (
            <section key={item.id}>
              <article>
                <img src={item.image} alt='' />
                <h3>{item.image && item.name}</h3>
              </article>
            </section>
          );
        })}
      {/* {selectedCard && (
        <ModalCard
          isOpen={true}
          handleClose={handleCloseModal}
          image={selectedCard.url}
          title={selectedCard.title}
        />
      )} */}
    </div>
  );
}
