


import React from 'react'
import ServicesBanner from './ServicesBanner/ServicesBanner'
import ServicesQuote from './ServicesQuote/ServicesQuote'
import ServicesDetails from './ServicesDetails/ServicesDetails'
import ServicesSecondDetails from './ServicesSecondDetails/ServicesSecondDetails'
import ServicesThirdDetails from './ServicesThirdDetails/ServicesThirdDetails'
import ServicesCards from './ServicesCards/ServicesCards'

const Services = () => {
  return (
    <div>
      <ServicesBanner/>
      <ServicesQuote/>
      <ServicesDetails/>
      <ServicesSecondDetails/>
      <ServicesThirdDetails/>
      <ServicesCards/>
    </div>
  )
}

export default Services
