import React from "react";
import Image from "next/image";
import banner from "../../images/banner.png";
import Link from "next/link";

const Banner = () => {
  return (
    <div>
      <h1 className="text-2xl font-black text-center text-[#fff] tracking-wide pt-4 uppercase">
      Join our community on Discord:
      </h1>
      <div className="flex justify-center py-12 ">
        <Link href='https://discord.com/' target="_blank">
        <Image
          src={banner}
          alt="banner"
          className="w-[1200px] cursor-pointer object-contain transition-all duration-500 "
        />
        </Link>
      </div>
    </div>
  );
};

export default Banner;
