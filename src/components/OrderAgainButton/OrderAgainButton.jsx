import React from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../../redux/features/shoppingCart";

const OrderAgainButton = (props) => {
  const dispatch = useDispatch();

  const sendProductsToCart = () => {
    console.log("Adding products to cart:");
    console.log(props.products);
    props.products.forEach((product) => {
      dispatch(addProduct({ item: product }));
    });
  };

  return (
    <div>
      <button
        type="button"
        className="inline-flex text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center m-0"
        onClick={sendProductsToCart}
      >
        <svg
          aria-hidden="true"
          className="w-5 h-5 mr-2 -ml-1"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
        </svg>
        Order Again!
      </button>
    </div>
  );
};

export default OrderAgainButton;
