import Banner from '@/components/Banner/Banner';
import Carousel from '@/components/Carousel/Carousel';
import FeaturedItems from '@/components/FeaturedItems/FeaturedItems';
import Footer from '@/components/Footer/Footer';
import ForYou from '@/components/ForYou/ForYou';

import NewItems from '@/components/NewItems/NewItems';

export default function Landing() {
  return (
    <div>
      <section className='bg-black text-white py-20'>
        <div className='flex justify-around'>
          <h1 className='text-4xl font-bold'>Mi Landing Page</h1>
          <p>text u otras cosas</p>
        </div>
      </section>

      <div className='bg-slate-700'>
        <Carousel />

        <FeaturedItems />

        <NewItems />

        <Banner />

        <ForYou />
      </div>

      <div className='bg-neutral-700'>
        <div className='container mx-auto'>
          <h2 className='text-2xl font-bold mb-8'>Miscelánea</h2>
          <p>
            Lorem Ipsum es simplemente el texto de relleno de las imprentas y
            archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar
            de las industrias desde el año 1500, cuando un impresor (N. del T.
            persona que se dedica a la imprenta) desconocido usó una galería de
            textos y los mezcló de tal manera que logró hacer un libro de textos
            especimen. No sólo sobrevivió 500 años, sino que tambien ingresó
            como texto de relleno en documentos electrónicos, quedando
            esencialmente igual al original. Fue popularizado en los 60s con la
            creación de las hojas etraset, las cuales contenian pasajes de Lorem
            Ipsum, y más recientemente con software de autoedición, como por
            ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.
          </p>{' '}
        </div>

        <div className='bg-sky-700 p-8'>
          <Footer />
        </div>
      </div>
    </div>
  );
}
