'use client'
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "@/redux/features/searchBar";
import ModalCard from "../../components/ModalCard/ModalCard";
import { AiOutlineInfoCircle } from "react-icons/ai";

export default function Card() {
  const [selectedCard, setSelectedCard] = useState(null);
  const dispatch = useDispatch();
  const items = useSelector((state) => state.items);
  const byName = useSelector((state) => state.byName);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleCardClick = (card) => {
    setSelectedCard(card);
  };

  const handleCloseModal = () => {
    setSelectedCard(null);
  };

  return (
    <div className="grid grid-cols-3 gap-8 px-4 pt-12">
      {items.loading && <h1>Loading...</h1>}

      {items.products &&
        items.products.slice(0, 6).map((item) => (
          <section key={item.id}>
            <article>
              <div className="relative">
                <img src={item.image} alt="" />
                <div className="absolute top-0 left-0 p-2">
                  <AiOutlineInfoCircle
                    size={24}
                    className="text-black-500 hover:text-blue-500 transition-colors cursor-pointer"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleCardClick(item);
                    }}
                  />
                </div>
              </div>
              <h3>{item.name}</h3>
            </article>
          </section>
        ))}

      {items.productsByName &&
        items.productsByName.map((item) => (
          <section key={item.id}>
            <article>
              <div className="relative">
                <img src={item.image} alt="" />
                <div className="absolute top-0 left-0 p-2">
                  <AiOutlineInfoCircle
                    size={24}
                    className="text-black-500 hover:text-blue-500 transition-colors cursor-pointer"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleCardClick(item);
                    }}
                  />
                </div>
              </div>
              <h3>{item.name}</h3>
            </article>
          </section>
        ))}

      {items.loading && <h1>Loading...</h1>}
      
      {selectedCard && (
        <ModalCard
          isOpen={true}
          handleClose={handleCloseModal}
          image={selectedCard.image}
          title={selectedCard.name}
          description={selectedCard.description}
          price={selectedCard.price}
          stock={selectedCard.stock}
          id={selectedCard.id}
        />
      )}
    </div>
  );
}
