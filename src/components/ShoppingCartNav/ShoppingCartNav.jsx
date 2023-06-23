'use client';
import { Link } from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ProductBox } from '../MyOrders/Styles';
import { products } from '../MyOrders/OrderData';
import ClearCartButtonNav from '../ClearCartButtonNav/ClearCartButtonNav';
import { Buttons, MainContainer } from './Styles';
import AddRemoveProduct from '../AddRemoveProduct/AddRemoveProduct';

const ShoppingCartNav = ({ location }) => {
  const cartStatus = useSelector((state) => state.shoppingCart.products);
  const localStorageCart = JSON.parse(localStorage.getItem('cart'));

  const router = useRouter();

  const handleProceedToPayment = () => {
    router.push('/completePurchase');
  };

  const handleBrowseProducts = () => {
    router.push('/products');
  };

  useEffect(() => {}, [cartStatus]);

  return (
    <MainContainer>
      {localStorageCart?.length > 0 ? (
        <>
          <div
            className='overflow-x-hidden overflow-y-auto mt-10'
            style={{ scrollbarWidth: 'thin' }}>
            <div className='absolute flex justify-center w-full top-1.5'>
              Products in your shopping cart:
            </div>
            {/* Renderizar los productos del carrito */}
            {localStorageCart.map((product, index) => {
              const productData = products.find(
                (obj) => obj.productID === product.details.productID
              );
              return (
                <ProductBox key={index}>
                  <div>
                    <p className='font-bold'>{productData.name}</p>
                    <p>Unit price: ${productData.price}</p>
                    <p>Quantity: {product.quantity}</p>
                    <p>Product ID: {product.details.productID}</p>
                  </div>
                  {/* {console.log("product")}
                  {console.log(product)}
                  {console.log("productData")}
                  {console.log(productData)} */}
                  <AddRemoveProduct product={productData} />
                </ProductBox>
              );
            })}
          </div>
          <Buttons>
            {/* Botón para proceder al pago */}
            <button
              className='text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-lg px-5 py-2.5 text-center m-0'
              onClick={handleProceedToPayment}>
              Proceed to Payment
            </button>

            {/* Botón para vaciar el carrito */}
            <ClearCartButtonNav className='flex ' />
          </Buttons>
        </>
      ) : (
        <>
          {/* Mensaje de carrito vacío */}
          <div className='relative h-[300px] flex flex-col justify-center items-center text-lg bg-gradient-to-b from-emerald-500 to-transparent rounded-lg'>
            <p>Your cart is empty.</p>
            <br />
            <button
              className='text-white rounded-3xl border-2 border-white px-3 py-1 hover:bg-black/10 transition-all'
              onClick={handleBrowseProducts}>
              Browse awesome products
            </button>
          </div>

          {/* Renderizado condicional del botón según la ubicación */}
          {/* {location === "sidebar" ? (
            <button onClick={handleBrowseProducts}>
              Browse awesome products
            </button>
          ) : (
            <button onClick={handleBrowseProducts}>
              Browse awesome products
            </button>
          )} */}
        </>
      )}
    </MainContainer>
  );
};

export default ShoppingCartNav;
