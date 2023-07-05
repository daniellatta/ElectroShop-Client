'use client'
import { useDispatch, useSelector } from "react-redux";
import Image from 'next/image';
import { useEffect } from "react";
import { fetchProducts } from "@/redux/features/products";
import Link from "next/link";
import { FaShoppingBag } from "react-icons/fa";
import { addProduct } from "@/redux/features/shoppingCart";

const FeaturedItems = () => {
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
  randomIndices[3] = Math.floor(Math.random() * products.length);
  randomIndices[4] = Math.floor(Math.random() * products.length);


  return (
    <div>
    <h1 className="text-center text-2xl font-black text-indigo-400 pt-4 pb-6">Featured products</h1>
    <div className="grid grid-cols-4 gap-4 px-4 ">
      <div className="col-span-2">
      <p
            className="absolute cursor-pointer z-10 p-2 text-white hover:text-blue-500"
            onClick={() => handleAddToCart(products[randomIndices[1]])} // Invoca handleAddToCart con el producto correspondiente
          >
            <FaShoppingBag size="1.5em" />{" "}
          </p>
        <Link href={`/detail/${products[randomIndices[0]]?.id}`}>
          <Image
          key={products[randomIndices[0]]?.id}
          src={products[randomIndices[0]]?.image}
          alt="Featured Item"
          width={450}
          height={450}
          priority
          className="w-full border-white border-2 rounded-xl cursor-pointer h-[450px] hover:scale-105 transition-all duration-500"
        />
        </Link>
      </div>
      <div>
        <div className="mb-[10px]">
        <p
            className="absolute cursor-pointer z-10 p-2 text-white hover:text-blue-500"
            onClick={() => handleAddToCart(products[randomIndices[1]])} // Invoca handleAddToCart con el producto correspondiente
          >
            <FaShoppingBag size="1.5em" />{" "}
          </p>
        <Link href={`/detail/${products[randomIndices[1]]?.id}`}>
          <Image
            key={products[randomIndices[1]]?.id}
            src={products[randomIndices[1]]?.image}
            alt="Featured Item"
            width={220}
            height={220}
            className="w-full h-[220px] hover:scale-105 transition-all duration-500 border-white border-2 rounded-xl cursor-pointer "
          />
          </Link>
        </div>
        <div>
        <p
            className="absolute cursor-pointer z-10 p-2 text-white hover:text-blue-500"
            onClick={() => handleAddToCart(products[randomIndices[1]])} // Invoca handleAddToCart con el producto correspondiente
          >
            <FaShoppingBag size="1.5em" />{" "}
          </p>
        <Link href={`/detail/${products[randomIndices[2]]?.id}`}>
          <Image
            key={products[randomIndices[2]]?.id}
            src={products[randomIndices[2]]?.image}
            alt="Featured Item"
            width={220}
            height={220}
            className="w-full h-[220px] hover:scale-105 transition-all duration-500 border-white border-2 rounded-xl cursor-pointer"
          />
          </Link>
        </div>
      </div>
      <div className="">
        <div className="mb-[10px]">
        <p
            className="absolute cursor-pointer z-10 p-2 text-white hover:text-blue-500"
            onClick={() => handleAddToCart(products[randomIndices[1]])} // Invoca handleAddToCart con el producto correspondiente
          >
            <FaShoppingBag size="1.5em" />{" "}
          </p>
        <Link href={`/detail/${products[randomIndices[3]]?.id}`}>
          <Image
            key={products[randomIndices[3]]?.id}
            src={products[randomIndices[3]]?.image}
            alt="Featured Item"
            width={220}
            height={220}
            className="w-full h-[220px] hover:scale-105 transition-all duration-500 border-white border-2 rounded-xl cursor-pointer"
          />
          </Link> 
        </div>
        <div>
        <p
            className="absolute cursor-pointer z-10 p-2 text-white hover:text-blue-500"
            onClick={() => handleAddToCart(products[randomIndices[1]])} // Invoca handleAddToCart con el producto correspondiente
          >
            <FaShoppingBag size="1.5em" />{" "}
          </p>
        <Link href={`/detail/${products[randomIndices[4]]?.id}`}>
          <Image
            key={products[randomIndices[4]]?.id}
            src={products[randomIndices[4]]?.image}
            alt="Featured Item"
            width={220}
            height={220}
            className="w-full h-[220px] hover:scale-105 transition-all duration-500 border-white border-2 rounded-xl cursor-pointer"
          />
          </Link>
        </div>
      </div>
    </div>
  </div>
  );
};

export default FeaturedItems;
// import React from "react";

// const FeaturedItems = () => {
//   const items = [
//     {
//       url: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80",
//     },
//     {
//       url: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80",
//     },
//     {
//       url: "https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80",
//     },
//   ];

//   return (
//     <div>
//       <h1 className="text-center text-2xl font-black text-indigo-400 pt-4 pb-6">Featured products</h1>
//       <div className="grid grid-cols-4 gap-4 px-4 ">
//         <div className="col-span-2">
//           <img
//             src={items[0].url}
//             alt="Featured Item"
//             className="w-full border-white border-2 rounded-xl cursor-pointer h-[450px] "
//           />
//         </div>
//         <div>
//           <div className="mb-[10px]">
//             <img
//               src={items[1].url}
//               alt="Featured Item"
//               className="w-full h-[220px] hover:scale-105 transition-all duration-500 border-white border-2 rounded-xl cursor-pointer "
//             />
//           </div>
//           <div>
//             <img
//               src={items[2].url}
//               alt="Featured Item"
//               className="w-full h-[220px] hover:scale-105 transition-all duration-500 border-white border-2 rounded-xl cursor-pointer"
//             />
//           </div>
//         </div>
//         <div className="">
//           <div className="mb-[10px]">
//             <img
//               src={items[1].url}
//               alt="Featured Item"
//               className="w-full h-[220px] hover:scale-105 transition-all duration-500 border-white border-2 rounded-xl cursor-pointer"
//             />
//           </div>
//           <div>
//             <img
//               src={items[2].url}
//               alt="Featured Item"
//               className="w-full h-[220px] hover:scale-105 transition-all duration-500 border-white border-2 rounded-xl cursor-pointer"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FeaturedItems;
