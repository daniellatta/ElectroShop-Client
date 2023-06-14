'use client';
import React, { useState } from 'react';
import Item from '../Item/Item';

const NewItems = () => {
  const [visibleItems, setVisibleItems] = useState(3);
  const data = [
    { title: 'Item 1', description: 'Descripción del Item 1' },
    { title: 'Item 2', description: 'Descripción del Item 2' },
    { title: 'Item 3', description: 'Descripción del Item 3' },
    { title: 'Item 4', description: 'Descripción del Item 4' },
    { title: 'Item 5', description: 'Descripción del Item 5' },
    { title: 'Item 6', description: 'Descripción del Item 6' },
    { title: 'Item 1', description: 'Descripción del Item 1' },
    { title: 'Item 2', description: 'Descripción del Item 2' },
    { title: 'Item 3', description: 'Descripción del Item 3' },
    { title: 'Item 4', description: 'Descripción del Item 4' },
    { title: 'Item 5', description: 'Descripción del Item 5' },
    { title: 'Item 6', description: 'Descripción del Item 6' },
    { title: 'Item 1', description: 'Descripción del Item 1' },
    { title: 'Item 2', description: 'Descripción del Item 2' },
    { title: 'Item 3', description: 'Descripción del Item 3' },
    { title: 'Item 4', description: 'Descripción del Item 4' },
    { title: 'Item 5', description: 'Descripción del Item 5' },
    { title: 'Item 6', description: 'Descripción del Item 6' },
    { title: 'Item 1', description: 'Descripción del Item 1' },
    { title: 'Item 2', description: 'Descripción del Item 2' },
    { title: 'Item 3', description: 'Descripción del Item 3' },
    { title: 'Item 4', description: 'Descripción del Item 4' },
    { title: 'Item 5', description: 'Descripción del Item 5' },
    { title: 'Item 6', description: 'Descripción del Item 6' },
    { title: 'Item 1', description: 'Descripción del Item 1' },
    { title: 'Item 2', description: 'Descripción del Item 2' },
    { title: 'Item 3', description: 'Descripción del Item 3' },
    { title: 'Item 4', description: 'Descripción del Item 4' },
    { title: 'Item 5', description: 'Descripción del Item 5' },
    { title: 'Item 6', description: 'Descripción del Item 6' },
    { title: 'Item 1', description: 'Descripción del Item 1' },
    { title: 'Item 2', description: 'Descripción del Item 2' },
    { title: 'Item 3', description: 'Descripción del Item 3' },
    { title: 'Item 4', description: 'Descripción del Item 4' },
    { title: 'Item 5', description: 'Descripción del Item 5' },
    { title: 'Item 6', description: 'Descripción del Item 6' },
    { title: 'Item 1', description: 'Descripción del Item 1' },
    { title: 'Item 2', description: 'Descripción del Item 2' },
    { title: 'Item 3', description: 'Descripción del Item 3' },
    { title: 'Item 4', description: 'Descripción del Item 4' },
    { title: 'Item 5', description: 'Descripción del Item 5' },
    { title: 'Item 6', description: 'Descripción del Item 6' },
    { title: 'Item 1', description: 'Descripción del Item 1' },
    { title: 'Item 2', description: 'Descripción del Item 2' },
    { title: 'Item 3', description: 'Descripción del Item 3' },
    { title: 'Item 4', description: 'Descripción del Item 4' },
    { title: 'Item 5', description: 'Descripción del Item 5' },
    { title: 'Item 6', description: 'Descripción del Item 6' },
    { title: 'Item 1', description: 'Descripción del Item 1' },
    { title: 'Item 2', description: 'Descripción del Item 2' },
    { title: 'Item 3', description: 'Descripción del Item 3' },
    { title: 'Item 4', description: 'Descripción del Item 4' },
    { title: 'Item 5', description: 'Descripción del Item 5' },
    { title: 'Item 6', description: 'Descripción del Item 6' },
    { title: 'Item 1', description: 'Descripción del Item 1' },
    { title: 'Item 2', description: 'Descripción del Item 2' },
    { title: 'Item 3', description: 'Descripción del Item 3' },
    { title: 'Item 4', description: 'Descripción del Item 4' },
    { title: 'Item 5', description: 'Descripción del Item 5' },
    { title: 'Item 6', description: 'Descripción del Item 6' },
    { title: 'Item 1', description: 'Descripción del Item 1' },
    { title: 'Item 2', description: 'Descripción del Item 2' },
    { title: 'Item 3', description: 'Descripción del Item 3' },
    { title: 'Item 4', description: 'Descripción del Item 4' },
    { title: 'Item 5', description: 'Descripción del Item 5' },
    { title: 'Item 6', description: 'Descripción del Item 6' },
    { title: 'Item 1', description: 'Descripción del Item 1' },
    { title: 'Item 2', description: 'Descripción del Item 2' },
    { title: 'Item 3', description: 'Descripción del Item 3' },
    { title: 'Item 4', description: 'Descripción del Item 4' },
    { title: 'Item 5', description: 'Descripción del Item 5' },
    { title: 'Item 6', description: 'Descripción del Item 6' },
    { title: 'Item 1', description: 'Descripción del Item 1' },
    { title: 'Item 2', description: 'Descripción del Item 2' },
    { title: 'Item 3', description: 'Descripción del Item 3' },
    { title: 'Item 4', description: 'Descripción del Item 4' },
    { title: 'Item 5', description: 'Descripción del Item 5' },
    { title: 'Item 6', description: 'Descripción del Item 6' },
    { title: 'Item 1', description: 'Descripción del Item 1' },
    { title: 'Item 2', description: 'Descripción del Item 2' },
    { title: 'Item 3', description: 'Descripción del Item 3' },
    { title: 'Item 4', description: 'Descripción del Item 4' },
    { title: 'Item 5', description: 'Descripción del Item 5' },
    { title: 'Item 6', description: 'Descripción del Item 6' },
  ];

  const handleShowMore = () => {
    setVisibleItems((prevVisibleItems) => prevVisibleItems + 6);
  };

  return (
    <div className='grid grid-cols-3 gap-4 py-24'>
      {data.slice(0, visibleItems).map((item, index) => (
        <Item key={index} title={item.title} description={item.description} />
      ))}
      {visibleItems < data.length && (
        <button className='bg-white' onClick={handleShowMore}>
          Mostrar más
        </button>
      )}
    </div>
  );
};

export default NewItems;
