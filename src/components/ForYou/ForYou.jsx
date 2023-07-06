'use client'
import React, { useEffect } from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "@/redux/features/products";
import Link from "next/link";

const ForYou = () => {
  const items = useSelector((state) => state.items);
  const dispatch = useDispatch();

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
      You might also be interested
      </h1>
      <div className="flex justify-between px-12 text-center">
        <div className="p-4">
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
