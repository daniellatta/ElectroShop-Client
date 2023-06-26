"use client";
import { useSelector } from "react-redux";

export default function ByCategory({ filterValues, setFilterValues }) {
  const categories = useSelector((state) => state.items.categories);

  const handleChange = (e) => {
    setFilterValues(e.target.value);
  };

  console.log(categories);

  return (
    <div className="flex flex-col justify-center items-center mt-3">
      <select onChange={handleChange}>
        {categories &&
          categories.map((category) => {
            return (
              <option value={category.id} key={category.id}>
                {category.name}
              </option>
            );
          })}
      </select>
    </div>
  );
}
