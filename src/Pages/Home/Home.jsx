

import React from 'react'
import HomeBanner from './HomeComponents/HeroBanner/HomeBanner'
import HomeServices from './HomeComponents/HomeServices/HomeServices'
import HomeProjects from './HomeComponents/HomeProjects/HomeProjects'
import HomeExperience from './HomeComponents/HomeExperience/HomeExperience'
import HomeTestimonials from './HomeComponents/HomeTestimonials/HomeTestimonials'
import HomeClients from './HomeComponents/HomeClients/HomeClients'

const Home = () => {
  return (
    <div>
      <HomeBanner/>
      <HomeServices/>
      <HomeProjects/>
      <HomeExperience/>
      <HomeTestimonials/>
      <HomeClients/>
    </div>
  )
}

export default Home
