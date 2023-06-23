'use client';

import { fetchProducts } from '@/redux/features/products';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from '../Card/Card';
import LoadingCard from '../LoadingCard/LoadingCard';

export default function CardsContainer() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.items);
  const byName = useSelector((state) => state.byName);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

<<<<<<< HEAD
  let products = items.products;
  if (byName.productsByName.length) products = byName.productsByName;

  if (items.loading) {
    return (
      <div>
        <section className='grid grid-cols-3 gap-12'>
          <LoadingCard />
          <LoadingCard />
          <LoadingCard />
        </section>
      </div>
    );
  }

  return (
    <div>
=======
  //Paginado
  let products = [...items.products];
  if (byName.productsByName.length) products = [...byName.productsByName];
  if (items.productsByPrice.length) products = [...items.productsByPrice];
  const lastIndex = currentPage * 9;
  const firstIndex = lastIndex - 9;
  let breedPage = products.slice(firstIndex, lastIndex);
  //
  return (
    <div className='flex flex-col w-full'>
      {items.loading && <h1>Loading...</h1>}
>>>>>>> bdf9f2ef428ec9c57e6e0a5facc702f788e14321
      <section className='grid grid-cols-3 gap-12'>
        {breedPage.map((product) => {
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
      <footer className='flex justify-center gap-4'>
        <button
          onClick={() => currentPage > 1 && setCurrentPage(currentPage - 1)}>
          prev
        </button>
        <p>{currentPage}</p>
        <button
          onClick={() =>
            lastIndex <= products.length - 1 && setCurrentPage(currentPage + 1)
          }>
          next
        </button>
      </footer>
    </div>
  );
}
