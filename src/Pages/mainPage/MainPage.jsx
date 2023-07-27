


import React from 'react'
import HeroSection from './HeroSection'
import GetQuote from './mainComponents/GetQuote/GetQuote'
import Projects from './mainComponents/Projects/Projects'
import LatestProjects from './mainComponents/LatestProjects/LatestProjects'
import Experience from './mainComponents/Experience/Experience'
import Faqs from './mainComponents/FAQS/Faqs'
import Testimonials from './testimonials/Testimonials'
import Clients from './mainComponents/Clients/Clients'

const MainPage = () => {
  return (
    <React.Fragment>
      <HeroSection/>
      <GetQuote/>
      <Projects/>
      <LatestProjects/>
      <Experience/>
      <Faqs/>
      <Testimonials/>
      <Clients/>
    </React.Fragment>
  )
}

export default MainPage
