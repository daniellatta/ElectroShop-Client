import React from 'react'

const AboutUs = () => {
  return (
    <section className='flex items-center flex-col'>
        <div className='flex items-center flex-col'>
            <h3 className='text-black font-thin text-5xl tracking-widest uppercase'>Our Mission is Digital</h3>
            <p className='font-light text-black my-2 uppercase'>In 2023, we started pioneering the evolution of classic brick-and-mortar stores.</p>
            <p className='font-light text-black uppercase'>Disrupting the industry of online stores by having second-to-none customer attention is our priority.</p>
        </div>

        <div className='flex items-center flex-col my-4'>
            <p>We're a team of enthusiasts who are passionate about bringing the best products to the market.</p>
            <p>Our goal is to help you find the perfect product that meets your needs and exceeds your expectations.</p>

            <p>We're committed to offering you a wide selection of high-quality products at competitive prices.</p>
            <p>Our team is dedicated to providing you with exceptional customer service. If you have any questions or concerns, don't hesitate to reach out to us.</p>
            <p className='font-medium text-blue-800 my-2'>We're always here to help.</p>
        </div>
    </section>
  )
}

export default AboutUs