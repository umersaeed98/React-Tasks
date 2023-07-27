


import React from 'react'
import styles from './ServicesCards.module.scss'
import vector1 from '../../../assets/images/Vector 1.svg'
import servicesCardFirst from '../../../assets/images/servicesCard1.svg'
import servicesCardSecond from '../../../assets/images/servicesCard2.svg'
import servicesCardThird from '../../../assets/images/servicesCard3.svg'
import ProjectsCards from '../../../components/reuseablecomponents/ProjectsCards/ProjectsCards'
import Buttons from '../../../components/reuseablecomponents/Buttons/Buttons'
import { Container,Row,Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
const ServicesCards = () => {
  return (
    <Container>
    <Row className='pt-5 mt-5'>
        <Col className='text-center'>
        <h2 className={`${styles.projectsHead}`}>
            Latest Projects
        </h2>
        <img src={vector1} alt="" />
        </Col>
    </Row>
    <Container>
        <Row className={` ${styles.cardRow}`}>
            <Col lg={4} md={12} xs={12} sm={12}>
            <ProjectsCards
            image={servicesCardFirst}
            title='Project Title'
            description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id et euismod bibendum adipiscing et orci, fermentum. Cras 
            tristique viverra gravida et sit egestas.'
            border='none'
            />
            </Col>
            <Col lg={4} md={12} xs={12} sm={12}>
            <ProjectsCards
            image={servicesCardSecond}
            title='Project Title'
            description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id et euismod bibendum adipiscing et orci, fermentum. Cras tristique viverra gravida et sit egestas.'
            border='none'
            />
            </Col>
            <Col lg={4} md={12} xs={12} sm={12} className={`${styles.thirdProjectmedia}`}>
            <ProjectsCards
            image={servicesCardThird}
            title='Project Title'
            description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id et euismod bibendum adipiscing et orci, fermentum. Cras tristique viverra gravida et sit egestas.'
            border='none'
            />
            </Col>
        </Row>
        <Row className='py-5'>
            <Col className='text-center'>
            <Link to='/portfolio'>
            <Buttons
            color='#1F1F1F'
            backgroundColor='white'
            border='2px solid #1F1F1F'
            text="VIEW ALL"
            padding='10px 40px'
            />
            </Link>
           
            </Col>
        </Row>
    </Container>
</Container>
  )
}

export default ServicesCards
