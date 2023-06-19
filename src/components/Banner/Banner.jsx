import React from "react";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="flex justify-center py-20 ">
      <img
        src="https://img.lovepik.com/background/20211021/large/lovepik-cool-line-technology-banner-background-image_400112106.jpg"
        alt="banner"
        className="w-[95%] h-[420px]  cursor-pointer object-contain hover:w-[99%]  transition-all duration-500 "
      />
    </div>
  );
};

export default Banner;
