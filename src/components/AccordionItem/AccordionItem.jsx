import React from "react";
import { Collapse } from "react-collapse";
import { FaPlus, FaMinus } from "react-icons/fa";

const AccordionItem = ({ open, toggle, title, desc }) => {
  return (
    <div className="pt-[10px]">
      <div
        className="bg-white py-[25px] px-[50px] flex justify-between items-center cursor-pointer  "
        onClick={toggle}
      >
        <p className="text-xl font-bold">{title}</p>
        <div className="text-[30px] ">{open ? <FaMinus /> : <FaPlus />}</div>
      </div>
      <Collapse
        className="transition-height duration-500 ease-in-out"
        isOpened={open}
      >
        <div className="bg-white px-[50px] pb-[20px] ">{desc}</div>
      </Collapse>
    </div>
  );
};

export default AccordionItem;
