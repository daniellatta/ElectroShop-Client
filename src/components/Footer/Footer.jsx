import React from "react";
import { BsFillWrenchAdjustableCircleFill } from "react-icons/bs";
import { FaBeer, FaGalacticRepublic, FaGenderless } from "react-icons/fa";

const Footer = () => {
  const keyBoardSize = [
    "20% Keyboards",
    "60% Keyboards",
    "65% Keyboards",
    "75% Keyboards",
    "80% Keyboards",
    "96% Keyboards",
    "100% Keyboards",
  ];

  return (
    <div className="flex justify-around">
      <h1 className="text-4xl">Footer</h1>
      <div>
        <ul>
          {keyBoardSize.map((keyboard, i) => (
            <li key={i}>{keyboard}</li>
          ))}
        </ul>{" "}
      </div>
      <div>
        <ul>
          {keyBoardSize.map((keyboard, i) => (
            <li key={i}>{keyboard}</li>
          ))}
        </ul>{" "}
      </div>
      <div>
        <ul>
          {keyBoardSize.map((keyboard, i) => (
            <li key={i}>{keyboard}</li>
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
