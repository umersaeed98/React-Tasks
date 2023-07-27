

import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import styles from './services.module.scss'

const Services = ({color,image,heading,paraghaph,fontSize,paddingTop,paddingRight}) => {
  const servicesStyles ={
    'color':color,
    'paddingTop':paddingTop,
    'paddingRight':paddingRight
  }
  return (
   <Container className={`${styles.servicesContainer}`}>
    <Row>
<Col className={` gx-0 ${styles.icons}`}>
  <div style={servicesStyles}>
  <img src={image} alt=""/>
  </div>
<div className={`${styles.contactDetails}`}>
<h4 style={servicesStyles} className={`fw-bold ${styles.heading}`}>{heading}</h4>
<p style={servicesStyles} className={`${styles.para}` } dangerouslySetInnerHTML={{ __html: paraghaph }}/>
</div>
</Col>
    </Row>
   </Container>
  )
}

export default Services
