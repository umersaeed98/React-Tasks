


import React from 'react'
import styles from './PortFolioCards.module.scss'
import firstPortfolio from '../../../assets/images/portfoliocard1.svg'
import secondPortfolio from '../../../assets/images/portfolioCard2.svg'
import thirdPortfolio from '../../../assets/images/portfolioCard3.svg'
import fourthPortfolio from '../../../assets/images/portfolioCard4.svg'
import fifthPortfolio from '../../../assets/images/portfolioCard5.svg'
import sixthPortfolio from '../../../assets/images/portfolioCard6.svg'
import seventhPortfolio from '../../../assets/images/portfolioCard7.svg'
import eightPortfolio from '../../../assets/images/portfolioCard8.svg'
import ninthPortfolio from '../../../assets/images/portfolioCard9.svg'
import ProjectsCards from '../../../components/reuseablecomponents/ProjectsCards/ProjectsCards'
import { Col, Container, Row } from 'react-bootstrap'
const PortFolioCards = () => {
  return (
    <>
    
    
      <Container className='mt-5'>
        <Row>
        <Col lg={4} md={12} xs={12} sm={12}>
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
                description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id et euismod bibendum adipiscing et orci, fermentum. Cras 
                tristique viverra gravida et sit egestas.'
                border='none'
                />
                </Col>
                <Col lg={4} md={12} xs={12} sm={12}>
                <ProjectsCards
                image={thirdPortfolio}
                title='Project Title'
                description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id et euismod bibendum adipiscing et orci, fermentum. Cras 
                tristique viverra gravida et sit egestas.'
                border='none'
                />
                </Col>
        </Row>
      </Container>
      <Container>
        <Row>
        <Col lg={4} md={12} xs={12} sm={12}>
                <ProjectsCards
                image={fourthPortfolio}
                title='Project Title'
                description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id et euismod bibendum adipiscing et orci, fermentum. Cras 
                tristique viverra gravida et sit egestas.'
                border='none'
                />
                </Col>
                <Col lg={4} md={12} xs={12} sm={12}>
                <ProjectsCards
                image={fifthPortfolio}
                title='Project Title'
                description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id et euismod bibendum adipiscing et orci, fermentum. Cras 
                tristique viverra gravida et sit egestas.'
                border='none'
                />
                </Col>
                <Col lg={4} md={12} xs={12} sm={12}>
                <ProjectsCards
                image={sixthPortfolio}
                title='Project Title'
                description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id et euismod bibendum adipiscing et orci, fermentum. Cras 
                tristique viverra gravida et sit egestas.'
                border='none'
                />
                </Col>
        </Row>
      </Container>
      <Container className='mb-5'>
        <Row>
        <Col lg={4} md={12} xs={12} sm={12}>
                <ProjectsCards
                image={seventhPortfolio}
                title='Project Title'
                description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id et euismod bibendum adipiscing et orci, fermentum. Cras 
                tristique viverra gravida et sit egestas.'
                border='none'
                />
                </Col>
                <Col lg={4} md={12} xs={12} sm={12}>
                <ProjectsCards
                image={eightPortfolio}
                title='Project Title'
                description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id et euismod bibendum adipiscing et orci, fermentum. Cras 
                tristique viverra gravida et sit egestas.'
                border='none'
                />
                </Col>
                <Col lg={4} md={12} xs={12} sm={12}>
                <ProjectsCards
                image={ninthPortfolio}
                title='Project Title'
                description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id et euismod bibendum adipiscing et orci, fermentum. Cras 
                tristique viverra gravida et sit egestas.'
                border='none'
                />
                </Col>
        </Row>
      </Container>
      </>
  )
}

export default PortFolioCards
