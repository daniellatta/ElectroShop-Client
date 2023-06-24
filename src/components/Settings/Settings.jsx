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
      title: "Titulo 1",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel egestas dolor, nec dignissim metus. Donec augue elit, rhoncus ac sodales id, porttitor vitae est. Donec laoreet rutrum libero sed pharetra.",
    },
    {
      title: "Titulo 2",
      desc: "Donec vel egestas dolor, nec dignissim metus. Donec augue elit, rhoncus ac sodales id, porttitor vitae est. Donec laoreet rutrum libero sed pharetra. Duis a arcu convallis, gravida purus eget, mollis diam.",
    },
    {
      title: "Titulo 3",
      desc: " Donec vel egestas dolor, nec dignissim metus. Donec augue elit, rhoncus ac sodales id, porttitor vitae est. Donec laoreet rutrum libero sed pharetra. Duis a arcu convallis, gravida purus eget, mollis diam.",
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
      <div className="flex justify-center ">
        <a
          href="delete"
          className="w-full p-10 align-middle bg-red-500 mt-12 font-bold text-4xl text-center"
        >
          DELETE ACCOUNT
        </a>
      </div>
    </div>
  );
};

export default Settings;
