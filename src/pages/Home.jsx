import React from 'react'
import Hero from '../section/Home/Hero'
import Services from '../section/Home/Services'
import WhyChooseUs from '../section/Home/WhyChooseUs'
import ClientTestinomial from '../section/Home/ClientTestinomial'

const Home = () => {
  return (
    <div className='poppins-font bg-[#EAF2F5] w-full min-h-screen '>
      <Hero />
      <Services />
      <WhyChooseUs />
      <ClientTestinomial />
    </div>
  )
}

export default Home
