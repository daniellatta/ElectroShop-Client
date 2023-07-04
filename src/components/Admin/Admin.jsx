import Link from "next/link";
import React from "react";

const Admin = () => {
  return (
    <div className="flex relative">
      <div className="bg-[#333333] absolute h-96 w-48 top-20">
        <p className="uppercase text-[#00B8EA] py-4 px-3 text-xs">main</p>
        <div className="mx-3 text-[#fff]">
          <p>Products</p>
          <Link href="/adminDelete">Manage users</Link>
        </div>
      </div>
    </div>
  );
};

export default Admin;
