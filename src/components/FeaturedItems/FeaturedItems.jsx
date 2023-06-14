import React from "react";

const FeaturedItems = () => {
  const items = [
    {
      url: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80",
    },
  ];

  return (
    <div className="grid grid-cols-5 gap-4 px-4">
      <div className="col-span-5 md:col-span-5 lg:col-span-2">
        <img src={items[0].url} alt="Featured Item" className="w-full" />
      </div>
      <div className="">
        <div className="pb-8">
          <img src={items[1].url} alt="Featured Item" className="w-full" />
        </div>
        <div>
          <img src={items[2].url} alt="Featured Item" className="w-full" />
        </div>
      </div>
      <div className="">
        <div className="pb-8">
          <img src={items[1].url} alt="Featured Item" className="w-full" />
        </div>
        <div>
          <img src={items[2].url} alt="Featured Item" className="w-full" />
        </div>
      </div>
      <div className="">
        <div className="pb-8">
          <img src={items[1].url} alt="Featured Item" className="w-full" />
        </div>
        <div>
          <img src={items[2].url} alt="Featured Item" className="w-full" />
        </div>
      </div>
    </div>
  );
};

export default FeaturedItems;