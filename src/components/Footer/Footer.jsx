import React from "react";
import Link from "next/link";
import { FaMoneyBill, FaTruck, FaShieldAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex justify-around py-4 text-blue-200 bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black">
      <div className="flex flex-col">
        <div className="flex justify-center">
          <FaMoneyBill size="4em" />
        </div>
        <p className="p-4 text-center">
          Elegí cómo pagar Podés pagar con tarjeta, débito, efectivo o hasta 12
          cuotas sin tarjeta con ElectroShopsin.
        </p>
      </div>

      <div>
        <div className="flex justify-center">
          <FaTruck size="4em" />
        </div>

        <p className="p-4 text-center">
          Envío gratis desde $ 8.000 Solo por estar registrado en ElectroShop
          tenés envíos gratis en miles de productos. Es un beneficio
          ElectroCredito.
        </p>
      </div>
      <div>
        <div className="flex justify-center">
          <FaShieldAlt size="4em" />
        </div>
        <p className="p-4 text-center">
          Seguridad, de principio a fin ¿No te gusta? ¡Devolvelo! En
          ElectroShop, no hay nada que no puedas hacer, porque estás siempre
          protegido.
        </p>
      </div>
    </div>
  );
};

export default Footer;
