


import React from 'react'
import styles from './AboutProjectImage.module.scss'
import aboutProjectMainImage from '../../../assets/images/aboutProjectmainImage.svg'
import { Col, Container, Row } from 'react-bootstrap'
const AboutProjectImage = () => {
  return (
    <Container>
        <Row className={` py-5 ${styles.imageMainRow}`}>
            <Col className={`${styles.imagCol}`}>
            <img src={aboutProjectMainImage} alt="" className='w-100'/>
            </Col>
        </Row>
    </Container>
  )
}

export default AboutProjectImage
