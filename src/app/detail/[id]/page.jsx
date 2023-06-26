'use client'
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { FaTruck } from 'react-icons/fa';

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
    <div className="flex flex-col bg-slate-700 h-screen">
      <div className="px-4 pt-10 pb-0">
        <Link href="/products" className="text-gray-400 hover:text-gray-500 ml-40 p-0 mb-0">
          Back
        </Link>
      </div>
      <div className="flex justify-center flex-grow">
        <div className="w-90vw mx-40 mb-10 mt-1 bg-slate-800 rounded-lg shadow-lg p-8 flex mt-4">
          <div className="w-9/10">
            <img src={image} alt="" className="object-cover h-full p-4" />
          </div>
          <div className="ml-10 flex flex-col justify-between rounded-lg border border-gray-600 p-8 m-4">
            <div>
              <h1 className="text-2xl font-bold text-white mb-6">{name}</h1>
              <div className="flex items-center text-xl text-white mb-6">
                ${price}
              </div>
              <p className="flex items-center text-green-400 mb-6">
                <FaTruck className="text-green-400 mr-2 " />
                Shipping nationwide
              </p>
            </div>
            <p className="text-gray-600 text-white mb-4">{description}</p>
            <p className="text-xl text-white">Stock: {stock}</p>
            <Link href='/completePurchase'>
              <button className="bg-green-500 hover:bg-green-700 text-white rounded-md py-2 px-4 mt-4 w-full">
                Buy Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailPage;