'use client'
import React, { useEffect } from "react";
import { FaShoppingBag } from "react-icons/fa";
import Image from "next/image";
import laptop from "../../images/Laptop.jpg";
import laptop2 from "../../images/Laptop2.jpg";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "@/redux/features/products";
import Link from "next/link";
import { addProduct } from "@/redux/features/shoppingCart";

const ForYou = () => {
  const items = useSelector((state) => state.items);
  const dispatch = useDispatch();

  const handleAddToCart = (item) => { 
    const foo = {
      item: item
    };
    dispatch(addProduct(foo));
  };

  let products = [...items.products];

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  let randomIndices = [];

  randomIndices[0] = Math.floor(Math.random() * products.length);
  randomIndices[1] = Math.floor(Math.random() * products.length);
  randomIndices[2] = Math.floor(Math.random() * products.length);

  return (
    <div>
      <h1 className="flex justify-center text-4xl text-center font-bold pb-6 bg-gradient-to-r from-green-500 via-indigo-400 to-green-500 text-transparent bg-clip-text">
        Tambien podria interesarte
      </h1>
      <div className="flex justify-between px-12 text-center">
        <div className="p-4">
          <p
            className="absolute cursor-pointer p-2 text-white hover:text-blue-500"
            onClick={() => handleAddToCart(products[randomIndices[0]])} // Invoca handleAddToCart con el producto correspondiente
          >
            <FaShoppingBag size="1.5em" />{" "}
          </p>
          <Link href={`/detail/${products[randomIndices[0]]?.id}`}>
            <Image
              src={products[randomIndices[0]]?.image}
              className="h-[250px] rounded-xl "
              alt="asd"
              width={350}
              height={200}
            />
          </Link>
        </div>
        <div className="p-4">
          <p
            className="absolute cursor-pointer z-1 p-2 text-white hover:text-blue-500"
            onClick={() => handleAddToCart(products[randomIndices[1]])} // Invoca handleAddToCart con el producto correspondiente
          >
            <FaShoppingBag size="1.5em" />{" "}
          </p>
          <Link href={`/detail/${products[randomIndices[1]]?.id}`}>
            <Image
              src={products[randomIndices[1]]?.image}
              className="h-[250px]  rounded-xl "
              alt="puppy"
              width={350}
              height={200}
            />
          </Link>
        </div>
        <div className="p-4">
          <p
            className="absolute cursor-pointer p-2 text-white hover:text-blue-500"
            onClick={() => handleAddToCart(products[randomIndices[2]])} // Invoca handleAddToCart con el producto correspondiente
          >
            <FaShoppingBag size="1.5em" />{" "}
          </p>
          <Link href={`/detail/${products[randomIndices[2]]?.id}`}>
            <Image
              src={products[randomIndices[2]]?.image}
              alt="asd"
              className="h-[250px] rounded-xl "
              width={350}
              height={200}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ForYou;
