

import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'

const Services = ({color,image,heading,paraghaph,fontSize}) => {
  return (
   <Container className='pt-4'>
    <Row>
<Col lg={2} md={2} sm={12} xs={12} className='gx-0'>
<img src={image} alt="" />
</Col>
<Col lg={10} md={10} sm={12} xs={12}>
<h4 className='fw-bold'>{heading}</h4>
<p className='text-light'>{paraghaph}</p>
</Col>
    </Row>
   </Container>
  )
}

export default Services
