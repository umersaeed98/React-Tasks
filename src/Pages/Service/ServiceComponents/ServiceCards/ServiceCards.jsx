


import React from 'react'
import styles from './ServiceCards.module.scss'
import firstPortfolio from '../../../../assets/images/portfoliocard1.svg'
import secondPortfolio from '../../../../assets/images/portfolioCard7.svg'
import thirdportfolio from '../../../../assets/images/portfolioCard8.svg'
import ProjectsCards from '../../../../components/reuseablecomponents/ProjectsCards/ProjectsCards'
import Buttons from '../../../../components/reuseablecomponents/Buttons/Buttons'
import vector1 from '../../../../assets/images/Vector 1.svg'
import { Container,Row,Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
const ServiceCards = () => {
  return (
    <Container fluid className={`${styles.serviceCardsBg}`}>
<Container>
    <Row className='pt-5'>
        <Col className='text-center'>
        <h2 className={`${styles.projectsHead}`}>
        Related Projects
        </h2>
        <img src={vector1} alt="" />
        </Col>
    </Row>
    <Container>
        <Row className={`gx-0 ${styles.cardRow}`}>
            <Col lg={4} md={12} xs={12} sm={12} className='gx-0'>
            <ProjectsCards
            image={firstPortfolio}
            title='Project Title'
            description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id et euismod bibendum adipiscing et orci, fermentum. Cras 
            tristique viverra gravida et sit egestas.'
            border='none'
            />
            </Col>
            <Col lg={4} md={12} xs={12} sm={12}>
            <ProjectsCards
            image={secondPortfolio}
            title='Project Title'
            description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id et euismod bibendum adipiscing et orci, fermentum. Cras tristique viverra gravida et sit egestas.'
            border='none'
            />
            </Col>
            <Col lg={4} md={12} xs={12} sm={12} className={`${styles.thirdProjectmedia}`}>
            <ProjectsCards
            image={thirdportfolio}
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
            backgroundColor='transparent'
            border='2px solid #1F1F1F'
            text="VIEW ALL"
            padding='10px 40px'
            />
                </Link>
            
            </Col>
        </Row>
    </Container>
</Container>
    </Container>
    
  )
}

export default ServiceCards
