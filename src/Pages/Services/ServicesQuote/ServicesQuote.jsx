


import React from 'react'
import styles from './ServicesQuote.module.scss'
import { Container,Row,Col, } from 'react-bootstrap'
import Buttons from '../../../components/reuseablecomponents/Buttons/Buttons'
import { Link } from 'react-router-dom'
const ServicesQuote = () => {
  return (
    <Container fluid className={`${styles.servicesMainQuote}`}>
 <Container>
      <Row className='align-items-center py-4'>
        <Col lg={6} md={12} sm={12} xs={12}>
        <h2 className={styles.quote}>
        Get a Quote For Your
        </h2>
        </Col>
        <Col lg={6} md={12} xs={12} sm={12} className={` text-end ${styles.btnCol}`}>
       <Link to='/contact'>
       <Buttons
        color="#FFB400"
        backgroundColor="white"
        border='3px solid #FFB400'
        text='FREE QUOTE'
        padding='15px 50px'
        />
       </Link>
        
        </Col>
      </Row>
    </Container>
    </Container>
   
  )
}

export default ServicesQuote
