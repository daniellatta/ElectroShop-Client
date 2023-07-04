import React from "react";
import { useRouter } from "next/navigation";
import { hideCart } from "@/redux/features/shoppingCart";
import { useDispatch } from "react-redux";

const BrowseProductsButton = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const handleBrowseProducts = () => {
    router.push("/products");
    dispatch(hideCart());
  };

  return (
    <button
      className="text-white rounded-3xl border-2 border-white px-3 py-1 bg-gradient-to-b from-emerald-500 to-sky-700 bg-black/0 hover:bg-gradient-to-b hover:from-emerald-700/80 hover:to-sky-900/80 hover:bg-black/40 transition-all duration-500"
      onClick={handleBrowseProducts}
    >
      Browse awesome products
    </button>
  );
};

export default BrowseProductsButton;
