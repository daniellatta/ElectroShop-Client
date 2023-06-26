import React from "react";
import { FaShoppingBag } from "react-icons/fa";
import Image from "next/image";
import laptop from "../../images/Laptop.jpg";
import laptop2 from "../../images/Laptop2.jpg";

const ForYou = () => {
  return (
    <div>
      <h1 className="flex justify-center text-4xl text-center font-bold pb-6 bg-gradient-to-r from-green-500 via-indigo-400 to-green-500 text-transparent bg-clip-text">
        Tambien podria interesarte
      </h1>
      <div className="flex justify-between px-12 text-center">
        <div className="p-4">
          <p className="absolute cursor-pointer p-2 text-white hover:text-red-500">
            <FaShoppingBag size="1.5em" />{" "}
          </p>
          <Image
            src={laptop2}
            className="h-[250px] rounded-xl "
            alt="asd"
            width={350}
            height={200}
          />
        </div>
        <div className="p-4">
          <p className="absolute cursor-pointer z-1 p-2 text-white hover:text-red-500">
            <FaShoppingBag size="1.5em" />{" "}
          </p>
          <Image
            src={laptop}
            className="h-[250px]  rounded-xl "
            alt="puppy"
            width={350}
            height={200}
          />
        </div>
        <div className="p-4">
          <p className="absolute cursor-pointer p-2 text-white hover:text-red-500">
            <FaShoppingBag size="1.5em" />{" "}
          </p>
          <Image
            src={laptop2}
            alt="asd"
            className="h-[250px] rounded-xl "
            width={350}
            height={200}
          />
        </div>
      </div>
    </div>
  );
};

export default ForYou;
