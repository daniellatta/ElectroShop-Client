'use client'
import React, { useEffect, useState } from "react";

const DetailPage = ({ params }) => {
  const { id } = params;
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:8080/api/v1/product/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setProduct(data);
      })
      .catch((error) => {
        console.error("Error fetching product details:", error);
      });
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  const { name, description, price, stock, image } = product;

  return (
    <div className="flex justify-center items-center">
      <div className="max-w-3xl bg-white rounded-lg shadow-lg p-8">
        <div className="flex justify-between">
          <img src={image} alt="" className="w-1/3 object-contain" />
          <div className="ml-4">
            <h1 className="text-2xl font-bold">{name}</h1>
            <p className="text-gray-600">{description}</p>
            <p className="text-xl font-bold mt-4">Price: ${price}</p>
            <p className="text-xl font-bold">Stock: {stock}</p>
            <button className="bg-blue-500 text-white rounded-md py-2 px-4 mt-4">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;