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
    <div>
      <button onClick={handleRemoveOne}>Restar</button>
      <button onClick={handleAddProduct}>Sumar</button>
      <button onClick={handleDeleteProduct}>Eliminar</button>
    </div>
  );
};

export default AddRemoveProduct;
