


import React from 'react'
import styles from './Experience.module.scss'
import { Container,Row,Col } from 'react-bootstrap'
import vector1 from '../../../../assets/images/Vector 1.svg'
import Buttons from '../../../../components/reuseablecomponents/Buttons/Buttons'

const Experience = () => {
  return (
   <Container fluid>
    <Row className='pt-5 mt-5'>
        <Col lg={3} md={12} xs={12} sm={12} className={` p-5 ${styles.experienceData}`}>
        <h2 className={styles.experienceHead}>
        We’ve Been Building For Over 10 Years
        </h2>
        <img src={vector1} alt="" />
        <p className={` pt-4 text-light ${styles.experienceText}`}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien, dignissim tristique tellus sed faucibus nullam. Tincidunt mauris ut quam sed mauris proin feugiat. Scelerisque lorem posuere iaculis nunc amet phasellus.
        </p>
        <Buttons 
        color='#FFB400'
        backgroundColor='#2A2A2A'
        border='1px solid #FFB400'
        text='ABOUT US'
        padding='15px 30px'
        />
        </Col>
        <Col lg={9} md={12} xs={12} sm={12}>
        World
        </Col>
    </Row>
   </Container>
  )
}

export default Experience
