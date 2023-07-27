

import React from 'react'
import AboutBanner from './AboutComponents/AboutBanner'
import AboutDIviConstruction from './AboutComponents/AboutDiviConstruction/AboutDIviConstruction'
import WhyWeBest from './AboutComponents/WhyWeBest/WhyWeBest'
import OurOwner from './AboutComponents/OurOwner/OurOwner'

const About = () => {
  return (
    <div>
      <AboutBanner/>
      <AboutDIviConstruction/>
      <WhyWeBest/>
      <OurOwner/>
    </div>
  )
}

export default About
