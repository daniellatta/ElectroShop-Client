'use client';

import { useState } from 'react';
import { FaStar } from 'react-icons/fa';

const colors = {
  orange: '#FFBA5A',
  grey: '#a9a9a9',
};

export default function Stars({ starValue, setStarValue }) {
  const [hoverValue, setHoverValue] = useState(undefined);
  const stars = Array(5).fill(0);

  const handleClick = (value) => {
    setStarValue(value);
  };

  const handleMouseOver = (newHoverValue) => {
    setHoverValue(newHoverValue);
  };

  const handleMouseLeave = () => {
    setHoverValue(undefined);
  };

  return (
    <div className='flex flex-col items-center'>
      <div className='flex'>
        {stars.map((_, index) => {
          return (
            <FaStar
              key={index}
              size={24}
              onClick={() => handleClick(index + 1)}
              onMouseOver={() => handleMouseOver(index + 1)}
              onMouseLeave={handleMouseLeave}
              color={
                (hoverValue || starValue) > index ? colors.orange : colors.grey
              }
              style={{
                marginRight: 10,
                cursor: 'pointer',
              }}
            />
          );
        })}
      </div>
    </div>
  );
}
