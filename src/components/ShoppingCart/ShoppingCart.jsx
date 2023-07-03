'use client';
import { Link } from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ProductBox } from '../MyOrders/Styles';
import { products } from '../MyOrders/OrderData';
import ClearCartButton from '../ClearCartButton/ClearCartButton';

const ShoppingCart = ({ location }) => {
  const { products } = useSelector((state) => state.shoppingCart);

  const router = useRouter();

  const handleProceedToPayment = () => {
    router.push('/completePurchase');
  };

  const handleBrowseProducts = () => {
    router.push('/products');
  };

  return (
    <div>
      {products.length > 0 ? (
        <>
          {/* Renderizar los productos del carrito */}
          {products.map((product, index) => {
            return (
              <ProductBox key={index}>
                <p className='font-bold'>{product.details.name}</p>
                <p>Unit price: ${product.details.price}</p>
                <p>Quantity: {product.quantity}</p>
                <p>Product ID: {product.details.id}</p>
              </ProductBox>
            );
          })}

          {/* Botón para proceder al pago */}
          <button
            className='text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-lg px-5 py-2.5 text-center m-0'
            onClick={handleProceedToPayment}>
            Proceed to Payment
          </button>
          <ClearCartButton />
        </>
      ) : (
        <>
          {/* Mensaje de carrito vacío */}
          <p>Your cart is empty.</p>

          {/* Lleva a /products cuando el carrito esta vacio */}
          <button onClick={handleBrowseProducts}>
            Browse awesome products
          </button>
        </>
      )}
    </div>
  );
};

export default ShoppingCart;
