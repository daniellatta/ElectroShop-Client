import CardsContainer from '@/components/CardsContainer/CardsContainer';
import FilterProducts from '@/components/FilterProducts/FilterProducts';
import SearchBar from '@/components/SearchBar/SearchBar';

export default function productPage() {
  return (
    <div className='flex bg-slate-900'>
      <section className='w-1/5'>
        <FilterProducts />
      </section>
      <section className='flex flex-col gap-20 w-4/5'>
        <section className='flex justify-center'>
          <SearchBar />
        </section>
        <section className='flex justify-center'>
          <CardsContainer />
        </section>
      </section>
    </div>
  );
}
