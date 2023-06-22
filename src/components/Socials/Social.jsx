import { FaInstagram, FaFacebook, FaWhatsapp, FaPhone } from "react-icons/fa";

const Social = () => {
  return (
    <div>
      <div className="hidden lg:flex z-20 fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] text-white flex justify-between items-center ml-[-115px] hover:ml-[-10px] duration-300 bg-gradient-to-b from-pink-500 via-red-500 to-yellow-500">
            <a
              target="_blank"
              href="asd"
              className="flex justify-end pr-2 items-center w-full text-grey-300"
            >
              <p className="pr-6">Instagram</p>
              <FaInstagram size={30} />{" "}
            </a>
          </li>
          <li className="w-[160px] h-[60px] text-white flex justify-between items-center ml-[-115px] hover:ml-[-10px] duration-300 bg-gradient-to-bl from-green-300 via-blue-500 to-purple-600">
            <a
              target="_blank"
              href="asd"
              className="flex justify-end items-center w-full text-grey-300 pr-2 "
            >
              <p className="pr-6">Facebook</p>
              <FaFacebook size={30} />{" "}
            </a>
          </li>
          <li className="w-[160px] h-[60px] text-white flex justify-between items-center ml-[-115px] hover:ml-[-10px] duration-300 bg-gradient-to-r from-green-200 to-green-500">
            <a
              target="_blank"
              href="asd"
              className="flex justify-end pr-2 items-center w-full text-grey-300"
            >
              <p className="pr-6">WhatsApp</p>
              <FaWhatsapp size={30} />{" "}
            </a>
          </li>
          <li className="w-[160px] h-[60px] text-white flex justify-between items-center ml-[-115px] hover:ml-[-10px] duration-300 bg-gradient-to-r from-blue-700 via-blue-800 to-gray-900">
            <a
              target="_blank"
              href="asd"
              className="flex justify-end w-full text-grey-300 pr-2"
            >
              <p className="pr-[22px] ">Telefono</p>
              <FaPhone size={30} />{" "}
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Social;

//CAMBIAR Y PONER LOS STATES SACAR EL IDIOMA , CAMBIAR LOS HREF Y PONER EL ONMOUSE ENTRE Y ON MOUSE LEAVE
