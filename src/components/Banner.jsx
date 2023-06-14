import React from "react";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="flex justify-center py-20 ">
      <img
        src="https://support.activision.com/content/dam/atvi/support/article-assets/hero-banners/crash-4/crash-hero-banner.jpg"
        alt="banner"
        className="w-[95%] h-[420px] object-contain hover:w-[99%]  transition-all duration-500 "
      />
    </div>
  );
};

export default Banner;
