import React from "react";
import { FaShoppingBag } from "react-icons/fa";
import Image from "next/image";
import laptop from "../../images/Laptop.jpg";
import laptop2 from "../../images/Laptop2.jpg";

const ForYou = () => {
  return (
    <div className="flex justify-between px-12 text-center">
      <div className="p-4">
        <p className="absolute cursor-pointer hover:text-red-500">
          <FaShoppingBag size="1.5em" />{" "}
        </p>
        <Image
          src={laptop2}
          className="h-[250px] "
          alt="asd"
          width={350}
          height={200}
        />
        <p>Especialmente elegido para vos</p>
      </div>
      <div className="p-4">
        <p className="absolute cursor-pointer hover:text-red-500">
          <FaShoppingBag size="1.5em" />{" "}
        </p>
        <Image
          src={laptop}
          className="h-[250px] "
          alt="puppy"
          width={350}
          height={200}
        />
        <p>Especialmente elegido para vos</p>
      </div>
      <div className="p-4">
        <p className="absolute cursor-pointer hover:text-red-500">
          <FaShoppingBag size="1.5em" />{" "}
        </p>
        <Image
          src={laptop2}
          alt="asd"
          className="h-[250px] "
          width={350}
          height={200}
        />
        <p>Especialmente elegido para vos</p>
      </div>
    </div>
  );
};

export default ForYou;
