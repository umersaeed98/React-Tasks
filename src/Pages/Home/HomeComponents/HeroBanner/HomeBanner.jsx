


import React from 'react'
import vector1 from '../../../../assets/images/Vector 1.svg'
import Banner from '../../../../components/reuseablecomponents/Banner/Banner'

const HomeBanner = () => {
  return (
   <Banner
   image={vector1}
   heading='Construction Inc'
   description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lectus erat <br/> consectetur eu sapien eget, rhoncus consectetur sem.'
   />
)
}

export default HomeBanner
