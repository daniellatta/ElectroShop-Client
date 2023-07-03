import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

const CartProductsCount = () => {
  const products = useSelector((state) => state.shoppingCart.products);
  let quantity = products.length;

  return (
    <div>
      {quantity > 0 && (
        <div className='absolute z-[-1] top-[11px] right-[7px] flex justify-center items-center w-4 h-4 rounded-xl bg-red-500 text-white text-[8px] select-none'>
          {quantity}
        </div>
      )}
    </div>
  );
};

export default CartProductsCount;
