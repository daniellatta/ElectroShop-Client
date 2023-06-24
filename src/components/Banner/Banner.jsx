import React from "react";
import Image from "next/image";
import banner from "../../images/banner.png";

const Banner = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold text-center">
        Unite a nuestra comunidad en Discord!
      </h1>
      <div className="flex justify-center py-12 ">
        <Image
          src={banner}
          alt="banner"
          className="w-[1200px] cursor-pointer object-contain transition-all duration-500 "
        />
      </div>
    </div>
  );
};

export default Banner;
