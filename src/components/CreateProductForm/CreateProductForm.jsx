"use client";
import React, { useState } from "react";
import {
  validateNotEmpty,
  validateMinLength,
  validateMaxLength,
  validateUrl,
  validateMinPrice,
} from "./validateForm";
import UploadImg from "../UploadImg/UploadImg";
import axios from "axios";

const CreateProductForm = () => {
  const [product, setProduct] = useState({
    name: "",
    description: "",
    image: "",
    stock: 0,
    price: 0,
    categoryId: "",
  });
  const [imgName, setImgName] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleImageUpload = (imgUrl) => {
    setProduct((prevProduct) => ({
      ...prevProduct,
      image: imgUrl,
    }));
  };

  const updateImgName = (imgFileName) => {
    setImgName(imgFileName);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validar campos
    if (
      !validateNotEmpty(product.name) ||
      !validateMinLength(product.name, 3) ||
      !validateMaxLength(product.name, 35)
    ) {
      // Validación fallida para el campo 'name'
      console.log("El campo 'name' no cumple con las validaciones");
      return;
    }

    if (
      !validateNotEmpty(product.description) ||
      !validateMinLength(product.description, 3) ||
      !validateMaxLength(product.description, 200)
    ) {
      // Validación fallida para el campo 'description'
      console.log("El campo 'description' no cumple con las validaciones");
      return;
    }

    if (!validateUrl(product.image)) {
      // Validación fallida para el campo 'image'
      console.log("El campo 'image' no es una URL válida");
      return;
    }

    if (!validateMinPrice(product.price)) {
      // Validación fallida para el campo 'price'
      console.log("El campo 'price' debe ser mayor o igual a 1");
      return;
    }

    //Si llega hasta aquí, el producto es válido
    // Enviar el objeto 'Product' a una API o guardarlo en el estado del componente padre
    console.log(product);
    axios
      .post("https://electroshop-api.onrender.com/api/v1/product", product)
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="flex flex-col justify-center items-center w-[80%] max-w-[450px] bg-gradient-to-b from-blue-900 via-transparent to-transparent border border-2 border-black/80 rounded m-auto">
      <h1 className="text-white text-3xl font-bold mt-6 mb-6">
        Create a new product
      </h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-2 w-[80%] max-w-[400px]"
      >
        <div className="flex justify-between">
          <label className="mr-4" htmlFor="name">
            Name:
          </label>
          <input
            className="rounded-sm"
            type="text"
            id="name"
            name="name"
            value={product.name}
            onChange={handleChange}
          />
        </div>
        <div className="flex justify-between">
          <label className="mr-4" htmlFor="description">
            Description:
          </label>
          <textarea
            className="w-[220px] rounded-sm"
            type="text"
            id="description"
            name="description"
            value={product.description}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col items-between justify-between my-4 border-y border-white py-2">
          <div className="flex flex-col justify-around items-center rounded bg-gray-300/40 mb-1 p-2">
            <label htmlFor="image">Product image:</label>
            <label
              className="text-xs bg-white/50 rounded-lg px-2 py-1"
              htmlFor="image"
            >
              {imgName ? imgName : "[ Not selected ]"}
            </label>
          </div>
          <UploadImg
            onImageUpload={handleImageUpload}
            updateImgName={updateImgName}
          />
          <div className="flex justify-between items-center mt-1">
            <label className="text-xs text-gray-600" htmlFor="image">
              Image URL:
            </label>
            <input
              className="w-[80%] text-xs rounded-sm"
              type="text"
              id="image"
              name="image"
              value={product.image}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="flex justify-between">
          <label className="mr-4" htmlFor="stock">
            Stock:
          </label>
          <input
            className="text-center w-[220px] pl-4 rounded-sm"
            type="number"
            id="stock"
            name="stock"
            value={product.stock}
            onChange={handleChange}
          />
        </div>
        <div className="flex justify-between">
          <label className="mr-4" htmlFor="price">
            Price:
          </label>
          <input
            className="text-center w-[220px] pl-4 rounded-sm"
            type="number"
            id="price"
            name="price"
            value={product.price}
            onChange={handleChange}
          />
        </div>
        <div className="flex justify-between">
          <label className="mr-4" htmlFor="categoryId">
            Category ID:
          </label>
          <input
            className="text-center rounded-sm"
            type="text"
            id="categoryId"
            name="categoryId"
            value={product.categoryId}
            onChange={handleChange}
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 border-white border-4 rounded-lg p-2 m-2 shadow-md text-lg font-semibold text-white"
        >
          Create Product
        </button>
      </form>
    </div>
  );
};

export default CreateProductForm;
