"use client";
import { Link } from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ProductBox } from "../MyOrders/Styles";
import { products } from "../MyOrders/OrderData";
import ClearCartButton from "../ClearCartButton/ClearCartButton";

const ShoppingCart = ({ location }) => {
  const cartStatus = useSelector((state) => state.shoppingCart.products);
  console.log(cartStatus);
  const localStorageCart = JSON.parse(localStorage.getItem("cart"));

  const router = useRouter();

  const handleProceedToPayment = () => {
    router.push("/completePurchase");
  };

  const handleBrowseProducts = () => {
    router.push("/products");
  };

  useEffect(() => {}, [cartStatus]);
  // useEffect(() => {
  // Guardar un valor en el localStorage
  // localStorage.setItem('cart', 'Hola, Mundo!');

  // Obtener un valor del localStorage
  // setCart(localCart);

  // Eliminar un valor del localStorage
  // localStorage.removeItem('cart');
  // }, []);

  return (
    <div>
      {localStorageCart?.length > 0 ? (
        <>
          {/* Renderizar los productos del carrito */}
          {localStorageCart.map((product, index) => {
            const productData = products.find(
              (obj) => obj.productID === product.details.productID
            );
            return (
              <ProductBox key={index}>
                <p className="font-bold">{productData.name}</p>
                <p>Unit price: ${productData.price}</p>
                <p>Quantity: {product.quantity}</p>
                <p>Product ID: {product.details.productID}</p>
              </ProductBox>
            );
          })}
          {/* {localCartDisk?.map((product, index) => (
            <div key={index}>
              <ProductBox>
                <p className="font-bold">{productData.name}</p>
                <p>Unit price: ${productData.price}</p>
                <p>Quantity: {product.quantity}</p>
                <p>Product ID: {product.productID}</p>
              </ProductBox>
              {product?.details?.name}
            </div>
          ))} */}

          {/* Botón para proceder al pago */}
          <button
            className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-lg px-5 py-2.5 text-center m-0"
            onClick={handleProceedToPayment}
          >
            Proceed to Payment
          </button>
          <ClearCartButton />
        </>
      ) : (
        <>
          {/* Mensaje de carrito vacío */}
          <p>Your cart is empty.</p>

          {/* Renderizado condicional del botón según la ubicación */}
          {location === "sidebar" ? (
            <button onClick={handleBrowseProducts}>
              Browse awesome products
            </button>
          ) : (
            <button onClick={handleBrowseProducts}>
              Browse awesome products
            </button>
          )}
        </>
      )}
    </div>
  );
};

export default ShoppingCart;
