"use client";

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "@/redux/features/searchBar";
import ModalCard from "../../components/ModalCard/ModalCard";

const Card = () => {
  const [visibleItems, setVisibleItems] = useState(6);
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

  const handleShowMore = () => {
    setVisibleItems((prevVisibleItems) => prevVisibleItems + 6);
  };

  return (
    <div className="grid grid-cols-3 gap-8 px-4 pt-12">
      {items.loading ? <h1>Loading...</h1> : ""}
      {items.products &&
        items.products.slice(0, visibleItems).map((item) => {
          return (
            <section key={item.id}>
              <article onClick={() => handleCardClick(item)}>
                <img
                  className="rounded-xl border-black border-2"
                  src={item.image}
                  alt=""
                />
                <h3 className="text-center">{item.image && item.name}</h3>
              </article>
            </section>
          );
        })}

      {visibleItems < items.products.length && (
        <button className="bg-white" onClick={handleShowMore}>
          Mostrar más
        </button>
      )}

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
};

export default Card;
