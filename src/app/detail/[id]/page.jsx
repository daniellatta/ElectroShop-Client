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
    <div className="flex justify-center bg-slate-700 h-screen">
  <div className="w-90vw mx-40 my-10 bg-slate-800 rounded-lg shadow-lg p-8 flex">
    <div className="w-9/10">
      <img src={image} alt="" className="object-cover h-full p-8" />
    </div>
    <div className="ml-8 flex flex-col justify-between rounded-lg border border-gray-600 p-8">
      <h1 className="text-2xl font-bold text-white mb-4">{name}</h1>
      <div className="flex flex-col justify-center">
        <p className="text-gray-600 text-white mb-4">{description}</p>
        <p className="text-xl font-bold text-white">Price: ${price}</p>
        <p className="text-xl font-bold text-white">Stock: {stock}</p>
      </div>
      <button className="bg-green-500 hover:bg-green-700 text-white rounded-md py-2 px-4 mt-4">
        Buy Now
      </button>
    </div>
  </div>
</div>
    
  );
};

export default DetailPage;