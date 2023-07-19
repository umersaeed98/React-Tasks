


import React from 'react'
import HeroSection from './HeroSection'
import GetQuote from './mainComponents/GetQuote/GetQuote'
import Projects from './mainComponents/Projects/Projects'
import LatestProjects from './mainComponents/LatestProjects/LatestProjects'
import Experience from './mainComponents/Experience/Experience'

const MainPage = () => {
  return (
    <React.Fragment>
      <HeroSection/>
      <GetQuote/>
      <Projects/>
      <LatestProjects/>
      <Experience/>
    </React.Fragment>
  )
}

export default MainPage
