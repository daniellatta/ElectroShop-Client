import CardsContainer from '@/components/CardsContainer/CardsContainer';
import SearchBar from '@/components/SearchBar/SearchBar';

export default function productPage() {
  return (
    <div className='flex flex-col'>
      <section className='flex items-center justify-center'>
        <SearchBar />
      </section>
      <section className='flex items-center justify-center'>
        <CardsContainer />
      </section>
    </div>
  );
}
