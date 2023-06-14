import React from "react";

const Item = ({ title, description }) => {
  return (
    <div className="bg-slate-500 p-4">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default Item;
