"use client";
import React, { useEffect } from "react";
import useAuthenticate from "@/hook/Authenticated";
import CreateProductForm from "@/components/CreateProductForm/CreateProductForm";

const ProductCreate = () => {
  const { secureRouteAdmin, admin } = useAuthenticate();

  useEffect(() => {
    secureRouteAdmin();
  }, []);

  return (
    <div className="bg-[url('https://static.vecteezy.com/system/resources/previews/000/676/628/original/blue-blur-backdrop.jpg')] bg-cover h-screen pt-[100px]">
      {admin && <CreateProductForm />}
    </div>
  );
};

export default ProductCreate;
