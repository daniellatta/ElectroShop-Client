'use client';

import { fetchProducts } from '@/redux/features/products';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from '../Card/Card';

export default function CardsContainer() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.items);
  const byName = useSelector((state) => state.byName);
  //hola

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  let products = items.products;
  if (byName.productsByName.length) products = byName.productsByName;
  return (
    <div>
      {items.loading && <p>Loading...</p>}

      <section className='grid grid-cols-3 gap-12'>
        {products.map((product) => {
          return (
            <section className='h-[300px] w-[300px]' key={product.id}>
              <Card
                key={product.id}
                id={product.id}
                name={product.name}
                image={product.image}
                price={product.price}
                review={product.review}
                stock={product.stock}
                description={product.description}
              />
            </section>
          );
        })}
      </section>
    </div>
  );
}
