"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FaUser, FaShoppingCart, FaSearch } from "react-icons/fa";
import { TbArrowBigRightLinesFilled } from "react-icons/tb";
import CartContainer from "../CartContainer/CartContainer";
import CartProductsCount from "@/app/CartProductsCount/CartProductsCount";

const NavBar = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleCartClick = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <div className="h-10 relative z-[1000]">
      <div className="fixed w-full flex flex-row bg-slate-100 font-sans font-semibold">
        <Link
          href="/"
          className="px-6 py-2 hover:text-blue-500 transition-colors duration-300"
        >
          Home
        </Link>
        <Link
          href="/about"
          className="px-6 py-2 hover:text-blue-500 transition-colors duration-300"
        >
          About Us
        </Link>
        <Link
          href="/products"
          className="px-6 py-2 hover:text-blue-500 transition-colors duration-300"
        >
          Our Products
        </Link>
        <div className="ml-auto mr-1 flex flex-row items-center">
          <Link
            href="/user"
            className="p-2 hover:text-blue-500 transition-colors duration-300"
          >
            <FaUser />
          </Link>
          <div className="p-2 hover:text-blue-500 transition-colors duration-300">
            <FaSearch />
          </div>
          <div className="p-2 hover:text-blue-500 transition-colors duration-300">
            <FaShoppingCart onClick={handleCartClick} />
            <CartProductsCount />
            <CartContainer isOpen={isCartOpen} />
            <div
              className={`fixed z-[10002] top-[50px] right-[20px] flex justify-center text-white text-lg font-bold rounded border-2 border-white w-9 hover:bg-black/10 transition-all duration-300 ${
                isCartOpen
                  ? "translate-x-[0px]"
                  : "translate-x-full right-[-20px]"
              }`}
              onClick={handleCartClick}
            >
              <TbArrowBigRightLinesFilled />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
