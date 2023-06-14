import React from "react";
import { FaShoppingBag } from "react-icons/fa";

const ForYou = () => {
  return (
    <div className="flex justify-between px-12 text-center">
      <div className="p-4">
        <p className="absolute cursor-pointer hover:text-red-500">
          <FaShoppingBag size="1.5em" />{" "}
        </p>
        <img
          src="https://www.hillspet.com/content/dam/cp-sites/hills/hills-pet/en_us/exported/dog-care/new-pet-parent/images/golden-retriever-puppy-running-outside.jpg"
          alt="puppy"
          className="w-[350px] h-[200px] hover:w-[400px] hover:h-[250px]  transition-all duration-500 "
        />
        <p>Especialmente elegido para vos</p>
      </div>
      <div className="p-4">
        <p className="absolute cursor-pointer hover:text-red-500">
          <FaShoppingBag size="1.5em" />{" "}
        </p>
        <img
          src="https://www.wboy.com/wp-content/uploads/sites/43/2023/03/everything-you-need-to-make-a-puppy-starter-kit.jpg?w=1280"
          alt="puppy"
          className="w-[350px] h-[200px] hover:w-[400px] hover:h-[250px]  transition-all duration-500 "
        />
        <p>Especialmente elegido para vos</p>
      </div>
      <div className="p-4">
        <p className="absolute cursor-pointer hover:text-red-500">
          <FaShoppingBag size="1.5em" />{" "}
        </p>
        <img
          src="https://media-cldnry.s-nbcnews.com/image/upload/rockcms/2023-03/puppy-dog-mc-230321-03-b700d4.jpg"
          alt="puppy"
          className="w-[350px] h-[200px] hover:w-[400px] hover:h-[250px]  transition-all duration-500 "
        />
        <p>Especialmente elegido para vos</p>
      </div>
    </div>
  );
};

export default ForYou;
