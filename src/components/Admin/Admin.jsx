import Link from "next/link";
import React from "react";

const Admin = () => {
  return (
    <div className="flex relative">
      <div className="bg-[#333333] absolute h-96 w-48 top-20">
        <p className="uppercase text-[#00B8EA] py-4 px-3 text-xs">main</p>
        <div className="flex flex-col mx-3 mt-3 text-[#fff] gap-4">
          {/* <Link href="/admin/product">Products</Link> */}
          <Link href="/admin/productCreate">CreateProduct</Link>
          <Link href="/adminDelete">Manage users</Link>
        </div>
      </div>
    </div>
  );
};

export default Admin;
