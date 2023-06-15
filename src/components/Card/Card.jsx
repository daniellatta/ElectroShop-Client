'use client';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '@/redux/features/searchBar';

export default function Card() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.items);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <div>
      {items.loading ? <h1>Loading...</h1> : ''}
      {items.products &&
        items.products.map((item) => {
          return (
            <section key={item.id}>
              <article>
                <img src={item.image} alt='' />
                <h3>{item.image && item.name}</h3>
              </article>
            </section>
          );
        })}
    </div>
  );
}
