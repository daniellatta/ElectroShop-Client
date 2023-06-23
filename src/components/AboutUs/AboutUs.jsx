import React from 'react'

const AboutUs = () => {
  return (
    <div>

      <section className='flex items-center flex-col'>
          <div className='flex items-center flex-col'>
              <h3 className='text-black font-thin text-5xl tracking-widest uppercase'>Our Mission is Digital</h3>
              <p className='font-light text-black mt-2 uppercase'>In 2023, we started pioneering the evolution of classic brick-and-mortar stores.</p>
              <p className='font-light text-black uppercase'>Disrupting the industry of online stores by having second-to-none customer attention is our priority.</p>
          </div>

          <div className='flex items-center flex-col mt-4'>
              <p>We're a team of enthusiasts who are passionate about bringing the best products to the market.</p>
              <p>Our goal is to help you find the perfect product that meets your needs and exceeds your expectations.</p>

              <p>We're committed to offering you a wide selection of high-quality products at competitive prices.</p>
              <p>Our team is dedicated to providing you with exceptional customer service. If you have any questions or concerns, don't hesitate to reach out to us.</p>
              <p className='font-semibold'>We're always here to help.</p>
          </div>
      </section>
      <section className='flex items-center flex-col bg-[#1e293b] p-4 rounded-md mt-3'>
        <h1 className='text-blue-400 font-extrabold tracking-widest text-3xl uppercase'>meet the team</h1>
        <ul className='text-center tracking-wide text-white my-4 uppercase font-light'>
          <li>Leandro Solari</li>
          <li>Andres Hernandez</li>
          <li>Alan Romero</li>
          <li>Adrian Ballesteros</li>
          <li>Luciano Fredes</li>
          <li>Lemuel Fenske</li>
          <li>Daniel Latta</li>
        </ul>
      </section>
      <section className='my-3 bg-slate-400 h-15 rounded-md'>
        <div className='flex items-center p-4'>
          <svg className='h-10 mr-2' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 012.916.52 6.003 6.003 0 01-5.395 4.972m0 0a6.726 6.726 0 01-2.749 1.35m0 0a6.772 6.772 0 01-3.044 0" />
          </svg>
          <p>Top Buyers: Portland Holdings Limited, Meta Platforms, Inc., Google LLC, Deloitte, JPMorgan Chase & Co., BlackRock, SoyHenry.</p>
        </div>
      </section>
    </div>
  )
}

export default AboutUs