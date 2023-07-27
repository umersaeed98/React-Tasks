


import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import styles from './Banner.module.scss'
import Buttons from '../Buttons/Buttons'
import { Link } from 'react-router-dom'

const Banner = ({image,heading,description,}) => {
  return (
    <Container fluid className={`${styles.homePagetopBanner}`}>
        <Row className='gx-0'>
            <Col className='text-center'>
            <img src={image} alt="" />
            <h2 className={` text-light ${styles.bannerHeading}`} dangerouslySetInnerHTML={{ __html: heading }}/>
            <p className={` pt-4 text-light ${styles.bannerDesc}`} dangerouslySetInnerHTML={{ __html: description }} />
            <Link to='/portfolio'>
            <Buttons  
            color="white"
            backgroundColor=" #FFB400"
            border='3px solid #FFB400 '
            text="VIEW OUR WORK"
            padding='15px 30px'
            marginTop='20px'
            />
            </Link>
            
            </Col>
        </Row>
    </Container>
  )
}

export default Banner
