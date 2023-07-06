'use client';

import { fetchCategories, fetchProducts } from '@/redux/features/products';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from '../Card/Card';
import LoadingCard from '../LoadingCard/LoadingCard';

export default function CardsContainer() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.items);
  let { products } = useSelector((state) => state.items);
  const byName = useSelector((state) => state.byName);
  const [currentPage, setCurrentPage] = useState(1);
  const [flag, setFlag] = useState(true);

  useEffect(() => {
    if (!products.length) {
      dispatch(fetchProducts());
    }
    if (!byName.length) {
      dispatch(fetchCategories());
    }
    if (paginado.length < 9) {
      setFlag(false);
    } else setFlag(true);
    
    setCurrentPage(1);
  }, [products]);

  // Paginado
  let paginado = [...items.products];
  if (byName.productsByName.length) paginado = [...byName.productsByName];
  const lastIndex = currentPage * 9;
  const firstIndex = lastIndex - 9;
  let productpage = paginado.slice(firstIndex, lastIndex);
  //

  if (items.loading) {
    return (
      <div className='flex flex-col w-[90%]'>
        <section className='grid grid-cols-3 gap-12'>
          <LoadingCard />
          <LoadingCard />
          <LoadingCard />
          <LoadingCard />
          <LoadingCard />
          <LoadingCard />
        </section>
      </div>
    );
  }

  return (
    <div className='flex flex-col w-[90%] gap-12'>
      <section className='grid grid-cols-3 gap-12'>
        {productpage.map((product) => {
          return (
            <section key={product.id}>
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
      {flag && (
        <footer className='flex justify-center gap-4'>
          <button
            onClick={() => currentPage > 1 && setCurrentPage(currentPage - 1)}>
            prev
          </button>
          <p>{currentPage}</p>
          <button
            onClick={() =>
              lastIndex <= paginado.length - 1 &&
              setCurrentPage(currentPage + 1)
            }>
            next
          </button>
        </footer>
      )}
    </div>
  );
}
