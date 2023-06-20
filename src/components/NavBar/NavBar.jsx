import React from "react";
import Link from "next/link";
import { FaUser, FaShoppingCart, FaSearch } from "react-icons/fa";

const NavBar = () => {
  return (
    <div className="flex flex-row items-center h-16 bg-slate-800 text-white font-sans font-semibold">
      <Link href='/' className="px-6 py-2 hover:text-blue-500 transition-colors duration-300">Home</Link>
      <Link href='/about' className="px-6 py-2 hover:text-blue-500 transition-colors duration-300"> About Us</Link>
      <Link href='/products' className="px-6 py-2 hover:text-blue-500 transition-colors duration-300">Our Products</Link>
      <div className="ml-auto flex flex-row items-center">
        <Link href='/user' className="p-2 hover:text-blue-500 transition-colors duration-300" >
          <FaUser className="text-lg"/>
        </Link>
        <div className="p-2 hover:text-blue-500 transition-colors duration-300">
          <FaSearch className="text-lg"/>
        </div>
        <div className="p-2 hover:text-blue-500 transition-colors duration-300">
          <FaShoppingCart className="text-lg" />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
