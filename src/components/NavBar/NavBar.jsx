import React from "react";
import Link from "next/link";
import { FaUser, FaShoppingCart, FaSearch } from "react-icons/fa";

const NavBar = () => {
  return (
    <div className="flex flex-row bg-slate-100 font-sans font-semibold">
      <Link href='/' className="px-6 py-2 hover:text-blue-500 transition-colors duration-300"> HOME</Link>
      <Link href='/about' className="px-6 py-2 hover:text-blue-500 transition-colors duration-300"> ABOUT</Link>
      <Link href='/' className="px-6 py-2 hover:text-blue-500 transition-colors duration-300"> PRODUCTS</Link>
      <div className="ml-auto flex flex-row">
        <Link href='/user' className="p-2 hover:text-blue-500 transition-colors duration-300" >
          <FaUser/>
        </Link>
        <div className="p-2 hover:text-blue-500 transition-colors duration-300">
          <FaSearch/>
        </div>
        <div className="p-2 hover:text-blue-500 transition-colors duration-300">
          <FaShoppingCart />
        </div>
        
      </div>
    </div>
  );
};

export default NavBar;
