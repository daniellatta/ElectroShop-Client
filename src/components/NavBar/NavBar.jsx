'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import { FaUser, FaShoppingCart, FaSearch, FaSignInAlt, FaUserPlus } from 'react-icons/fa';
import { TbArrowBigRightLinesFilled } from 'react-icons/tb';
import CartContainer from '../CartContainer/CartContainer';
import CartProductsCount from '@/app/CartProductsCount/CartProductsCount';
import { useSelector } from 'react-redux';

const NavBar = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  console.log(isAuthenticated);

  const handleCartClick = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <nav className="fixed top-0 z-50 w-full">
      <div className="flex flex-row items-center h-16 bg-slate-800 text-white font-sans font-semibold">
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

        <div className="ml-auto flex flex-row items-center">
          {isAuthenticated ? (
            <Link
              href="/user"
              className="p-2 hover:text-blue-500 transition-colors duration-300"
            >
              <FaUser className="text-lg" />
            </Link>
          ) : (
            <>
              <Link
                href="/create"
                alt="create"
                className="p-2 hover:text-blue-500 transition-colors duration-300"
              >
                <FaUserPlus className="text-lg" />
              </Link>
              <Link
                href="/login"
                alt="login"
                className="p-2 hover:text-blue-500 transition-colors duration-300"
              >
                <FaSignInAlt className="text-lg" />
              </Link>
            </>
          )}

          <div className="p-2 hover:text-blue-500 transition-colors duration-300">
            <FaSearch className="text-lg" />
          </div>
          <div className="p-2 hover:text-blue-500 transition-colors duration-300 z-20">
            <FaShoppingCart
              onClick={handleCartClick}
              className="cursor-pointer"
            />
            <CartProductsCount />
            <CartContainer isOpen={isCartOpen} />
          </div>
          <div
            className={`fixed z-[10002] top-[50px] right-[0px] flex justify-center text-white text-lg font-bold shadow rounded border-2 border-white w-9 hover:bg-black/10 transition-all duration-300 ${
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
    </nav>
  );
};

export default NavBar;
