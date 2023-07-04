import React from "react";
import { Collapse } from "react-collapse";
import { FaPlus, FaMinus } from "react-icons/fa";

const AccordionItem = ({ open, toggle, title, desc }) => {
  return (
    <div className="pt-10">
      <div
        className="bg-white py-6 px-6 flex justify-between items-center cursor-pointer border-b border-gray-300"
        onClick={toggle}
      >
        <p className="text-lg font-semibold text-gray-800">{title}</p>
        <div className="text-2xl text-gray-600">
          {open ? <FaMinus /> : <FaPlus />}
        </div>
      </div>
      <Collapse
        className="transition-height duration-500 ease-in-out"
        isOpened={open}
      >
        <div className="bg-gray-100 px-6 py-4">
          <p className="text-gray-700">{desc}</p>
        </div>
      </Collapse>
    </div>
  );
};

export default AccordionItem;
