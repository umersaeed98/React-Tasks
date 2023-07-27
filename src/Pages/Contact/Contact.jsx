



import React from 'react'
import ContactBanner from './ContactComponents/ContactBanner'
import OnlineEstimateForm from './ContactComponents/OnlineEstimateForm/OnlineEstimateForm'
import GetInTouch from './ContactComponents/GetInTouch/GetInTouch'
import Map from './ContactComponents/Map/Map'

const Contact = () => {
  return (
    <div>
      <ContactBanner/>
      <OnlineEstimateForm/>
      <GetInTouch/>
      <Map/>
    </div>
  )
}

export default Contact
