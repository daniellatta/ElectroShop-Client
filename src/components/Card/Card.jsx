"use client";

import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "@/redux/features/searchBar";
import { useEffect, useState } from "react";
import ModalCard from "../../components/ModalCard/ModalCard";

export default function Card() {
  const [info, setInfo] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);
  const dispatch = useDispatch();
  const items = useSelector((state) => state.items);

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
      {items.loading ? <h1>Loading...</h1> : ""}
      {items.products &&
        items.products.map((item) => {
          return (
            <section key={item.id}>
              <article>
                <img src={item.image} alt="" />
                <h3>{item.image && item.name}</h3>
              </article>
            </section>
          );
        })}
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
