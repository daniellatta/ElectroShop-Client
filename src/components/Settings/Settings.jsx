"use client";
import React, { useState } from "react";
import AccordionItem from "../AccordionItem/AccordionItem";

const Settings = () => {
  const [open, setOpen] = useState(false);

  const toggle = (index) => {
    if (open === index) return setOpen(null);

    setOpen(index);
  };

  const accordionData = [
    {
      title: "Hello wrold",
      desc: "Holaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    },
    {
      title: "Hello wrold",
      desc: "Holaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    },
    {
      title: "Hello wrold",
      desc: "Holaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    },
  ];

  return (
    <div className="flex justify-between flex-col">
      {accordionData.map((data, i) => (
        <AccordionItem
          open={i === open}
          key={i}
          toggle={() => toggle(i)}
          title={data.title}
          desc={data.desc}
        />
      ))}
    </div>
  );
};

export default Settings;
