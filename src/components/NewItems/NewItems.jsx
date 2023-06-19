"use client";
import React, { useState } from "react";
import Item from "../Item/Item";
import Card from "../Card/Card";

const NewItems = () => {
  const [visibleItems, setVisibleItems] = useState(3);

  const handleShowMore = () => {
    setVisibleItems((prevVisibleItems) => prevVisibleItems + 6);
  };

  return (
    <div>
      <Card />
    </div>
  );
};

export default NewItems;
