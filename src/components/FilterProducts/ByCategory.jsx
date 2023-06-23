'use client';

import axios from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

export default function ByCategory({ filterValues, setFilterValues }) {
  const dispatch = useDispatch();
  const [categories, setCategories] = useState();

  useEffect(() => {
    axios
      .get('http://localhost:8080/api/v1/category')
      .then(({ data }) => setCategories(data));
  }, []);

  const handleChange = (e) => {
    setFilterValues(e.target.value);
  };

  return (
    <div>
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
