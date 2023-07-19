

import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import styles from './services.module.scss'

const Services = ({color,image,heading,paraghaph,fontSize}) => {
  return (
   <Container className='pt-4'>
    <Row>
<Col lg={2} md={12} sm={12} xs={12} className={` gx-0 ${styles.icons}`}>
<img src={image} alt=""/>
</Col>
<Col lg={10} md={12} sm={12} xs={12} className={styles.details}>
<h4 className={`fw-bold ${styles.heading}`}>{heading}</h4>
<p className='text-light'>{paraghaph}</p>
</Col>
    </Row>
   </Container>
  )
}

export default Services
