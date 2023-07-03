import React from "react";
import { useDispatch } from "react-redux";
import {
  removeOne,
  addProduct,
  deleteProduct,
} from "../../redux/features/shoppingCart";

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
    <div className="flex justify-center gap-5">
      <button className="bg-blue-300 hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow" onClick={handleRemoveOne}>-</button>
      <button className="bg-blue-300 hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow" onClick={handleAddProduct}>+</button>
      <button className="bg-red-500 hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow" onClick={handleDeleteProduct}>x</button>
    </div>
  );
};

export default AddRemoveProduct;
