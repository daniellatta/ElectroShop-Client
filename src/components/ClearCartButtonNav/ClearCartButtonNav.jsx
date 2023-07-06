import React from "react";
import { useDispatch } from "react-redux";
import { emptyCart } from "../../redux/features/shoppingCart";

const ClearCartButton = (props) => {
  const dispatch = useDispatch();

  const clearCart = () => {
    dispatch(emptyCart());
  };

  return (
    <div>
      <button
        type="button"
        className="flex justify-center items-center transition-all ease-in-out duration-300 text-white bg-gradient-to-r from-red-800/80 via-red-500/80 to-red-800/80 bg-black/0 hover:bg-gradient-to-r hover:from-red-800/80 hover:via-red-500/80 hover:to-red-800/80 hover:bg-black/100 shadow-[inset_0_0_0_0_#000] hover:shadow-[inset_0_0_5px_0_#000] focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-lg text-center mt-[5px] w-full h-12"
        onClick={clearCart}
      >
        <svg
          height={"30px"}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            // strokeLinecap="round"
            // strokeLinejoin="round"
            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
          ></path>
        </svg>
        Empty cart
      </button>
    </div>
  );
};

export default ClearCartButton;
