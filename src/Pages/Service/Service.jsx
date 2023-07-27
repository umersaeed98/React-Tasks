


import React from 'react'
import ServiceBanner from './ServiceComponents/ServiceBanner/ServiceBanner'
import ServiceDescription from './ServiceComponents/ServiceDescription/ServiceDescription'
import ServiceVideo from './ServiceComponents/ServiceVideo/ServiceVideo'
import ServiceCards from './ServiceComponents/ServiceCards/ServiceCards'
import ServiceFaqs from './ServiceComponents/ServiceFaqs/ServicesFaqs'


const Service = () => {
  return (
    <div>
      <ServiceBanner/>
      <ServiceDescription/>
      <ServiceVideo/>
      <ServiceCards/>
      <ServiceFaqs/>
    </div>
  )
}

export default Service
