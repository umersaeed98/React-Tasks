


import React from 'react'
import styles from './HomeServices.module.scss'
import { Col, Container, Row } from 'react-bootstrap'
import firstServices from '../../../../assets/images/servicess1.svg'
import secondServices from '../../../../assets/images/servicess2.svg'
import thirdServices from '../../../../assets/images/servicesss3.svg'
import fourthServices from '../../../../assets/images/servicess4.svg'
import fifthServices from '../../../../assets/images/servicesss5.svg'
import sixthServices from '../../../../assets/images/servicesss6.svg'
import Services from '../../../../components/reuseablecomponents/services/Services'

const HomeServices = () => {
  return (
    <Container className='p-5'>
      <Row>
        <Col lg={4} md={12} sm={12} xs={12}>
      <Services image={firstServices} heading='Building Construction' paraghaph='Lorem ipsum dolor sit consectetur adipiscing elit. Nullam lectus erat' color='black' paddingRight="15px"/>
        </Col>
        <Col lg={4} md={12} sm={12} xs={12}>
      <Services image={secondServices} heading='Building Repairs' paraghaph='Lorem ipsum dolor sit consectetur adipiscing elit. Nullam lectus erat' color='black' paddingRight="15px"/>
        </Col>
        <Col lg={4} md={12} sm={12} xs={12}>
      <Services image={thirdServices} heading='Demolition' paraghaph='Lorem ipsum dolor sit consectetur adipiscing elit. Nullam lectus erat' color='black' paddingRight="15px"/>
        </Col>
      </Row>
      <Row>
        <Col lg={4} md={12} sm={12} xs={12}>
      <Services image={fourthServices} heading='Foundation' paraghaph='Lorem ipsum dolor sit consectetur adipiscing elit. Nullam lectus erat' color='black' paddingRight="15px"/>
        </Col>
        <Col lg={4} md={12} sm={12} xs={12}>
      <Services image={fifthServices} heading='Painting & Exterior' paraghaph='Lorem ipsum dolor sit consectetur adipiscing elit. Nullam lectus erat' color='black' paddingRight="15px"/>
        </Col>
        <Col lg={4} md={12} sm={12} xs={12}>
      <Services image={sixthServices} heading='Site Management' paraghaph='Lorem ipsum dolor sit consectetur adipiscing elit. Nullam lectus erat' color='black' paddingRight="15px"/>
        </Col>
      </Row>
    </Container>
  )
}

export default HomeServices
