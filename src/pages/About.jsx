import React from 'react'
import StatsSection from '../section/About/StatsSection'
import HeroSection from '../section/About/HeroSection'
import OurCredentials from '../section/About/OurCrediantials'

const About = () => {
  return (
    <div className='poppins-font w-full'>
      <HeroSection />
     <StatsSection />
     <OurCredentials />
    </div>
  )
}

export default About
