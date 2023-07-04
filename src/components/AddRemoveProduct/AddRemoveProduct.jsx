import React from "react";
import { useDispatch } from "react-redux";
import {
  removeOne,
  addProduct,
  deleteProduct,
} from "../../redux/features/shoppingCart";
import { TbTrashXFilled } from "react-icons/tb";
import { TiMinus, TiPlus } from "react-icons/ti";

const AddRemoveProduct = ({ product }) => {
  const dispatch = useDispatch();

  const handleRemoveOne = () => {
    dispatch(removeOne({ item: product.details }));
  };

  const handleAddProduct = () => {
    dispatch(addProduct({ item: product.details }));
  };

  const handleDeleteProduct = () => {
    dispatch(deleteProduct({ item: product.details }));
  };

  return (
    <div className="box-border relative flex flex-col justify-center font-bold text-white text-xl leading-none">
      <button
        className="relative flex justify-center items-center box-border bg-[#003]/80 hover:bg-[#005] border border-2 border-white outline outline-1 outline-gray-900 rounded-tr-lg shadow w-8 h-8 transition-all"
        onClick={handleRemoveOne}
      >
        <div className="absolute w-[90%] h-[90%] bg-gradient-to-b from-white/40 via-transparent to-transparent" />
        <div className="absolute" style={{ width: "0px", height: "0px" }}>
          <TiMinus className="relative w-[20px] h-[20px] top-[-10px] right-[10px]" />
        </div>
      </button>
      <button
        className="relative flex justify-center items-center box-border bg-[#003]/80 hover:bg-[#005] border border-2 border-white outline outline-1 outline-gray-900 shadow w-8 h-8 transition-all"
        onClick={handleAddProduct}
      >
        <div className="absolute w-[90%] h-[90%] bg-gradient-to-b from-white/40 via-transparent to-transparent" />
        <div className="absolute" style={{ width: "0px", height: "0px" }}>
          <TiPlus className="relative w-[20px] h-[20px] top-[-10px] right-[10px]" />
        </div>
      </button>
      <button
        className="relative flex justify-center items-center box-border bg-red-900/80 hover:bg-red-800 border border-2 border-white outline outline-1 outline-gray-900 rounded-br-lg shadow w-8 h-8 transition-all"
        onClick={handleDeleteProduct}
      >
        <div className="absolute w-[90%] h-[90%] bg-gradient-to-b from-white/40 via-transparent to-transparent" />
        <div className="absolute" style={{ width: "0px", height: "0px" }}>
          <TbTrashXFilled className="relative w-[20px] h-[20px] top-[-10px] right-[10px]" />
        </div>
      </button>
    </div>
  );
};

export default AddRemoveProduct;
