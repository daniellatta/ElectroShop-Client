import React from "react";
import { BsFillWrenchAdjustableCircleFill } from "react-icons/bs";
import { FaBeer, FaGalacticRepublic, FaGenderless } from "react-icons/fa";

const Footer = () => {
  const keyBoardSize = [
    "Bluetooth Keyboards",
    "Ergonomic Keyboards",
    "Backlit Keyboards",
    "Tenkeyless Keyboards",
    "Numpad Keyboards",
    "60% Dvorak Keyboards",
    "USB-C Keyboards",
  ];

  const moreItems = [
    "50% Keyboards",
    "TKL Keyboards",
    "Ortholinear Keyboards",
    "Split Keyboards",
    "Hot-swappable Keyboards",
  ];

  const someMoreItems = [
    "Wireless Keyboards",
    "Mechanical Keyboards",
    "RGB Keyboards",
    "Gaming Keyboards",
    "Programmable Keyboards",
    "Macropad Keyboards",
    "Compact Keyboards",
    "Low-profile Keyboards",
  ];

  return (
    <div className="flex justify-around bg-slate-500">
      <h1 className="text-4xl">Footer</h1>
      <div className="flex flex-col">
        {keyBoardSize.map((keyboard, i) => (
          <a key={i}>{keyboard}</a>
        ))}
      </div>

      <div>
        <ul>
          {someMoreItems.map((keyboard, i) => (
            <li key={i}>{keyboard}</li>
          ))}
        </ul>{" "}
      </div>
      <div>
        <ul>
          {moreItems.map((items, i) => (
            <li key={i}>{items}</li>
          ))}
        </ul>{" "}
      </div>
      <div>
        <p className="py-4">
          <BsFillWrenchAdjustableCircleFill size="1.8em" />
        </p>
        <p className="pb-4">
          <FaGalacticRepublic size="1.8em" />
        </p>
        <p className="pb-4">
          <FaBeer size="1.8em" />
        </p>
        <p className="pb-4">
          <FaGenderless size="1.8em" />
        </p>
      </div>
    </div>
  );
};

export default Footer;
