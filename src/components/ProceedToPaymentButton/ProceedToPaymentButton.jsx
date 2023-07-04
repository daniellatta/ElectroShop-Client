import React from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { hideCart } from "@/redux/features/shoppingCart";

const ProceedToPaymentButton = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const handleProceedToPayment = () => {
    router.push("/completePurchase");
    dispatch(hideCart());
  };

  return (
    <button
      className="flex justify-center items-center transition-all ease-in-out duration-300 text-white bg-gradient-to-r from-[#006d64cc] via-[#14b8a6cc] to-[#006d64cc] bg-black/0 hover:from-[#006d64cc] hover:via-[#14b8a6cc] hover:to-[#006d64cc] hover:bg-black/100 shadow-[inset_0_0_0_0_#000] hover:shadow-[inset_0_0_4px_1px_#000] focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-lg px-5 py-2.5 text-center mt-[0.5px]"
      onClick={handleProceedToPayment}
    >
      Proceed to Payment
    </button>
  );
};

export default ProceedToPaymentButton;
