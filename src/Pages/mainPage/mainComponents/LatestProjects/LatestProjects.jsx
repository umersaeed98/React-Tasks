



import React from 'react'
import styles from './LatestProjects.module.scss'
import { Container, Row,Col } from 'react-bootstrap'
import ProjectsCards from '../../../../components/reuseablecomponents/ProjectsCards/ProjectsCards'
import vector1 from '../../../../assets/images/Vector 1.svg'
import firstproject from '../../../../assets/images/projectsCard1.svg'
import secondproject from '../../../../assets/images/projectscard2.svg'
import thirdproject from '../../../../assets/images/projectscard3.svg'
import Buttons from '../../../../components/reuseablecomponents/Buttons/Buttons'
import { Link } from 'react-router-dom'

const LatestProjects = () => {
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
            <Row className={styles.cardRow}>
                <Col lg={4} md={12} xs={12} sm={12}>
                <ProjectsCards
                image={firstproject}
                title='Project Title'
                description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id et euismod bibendum adipiscing et orci, fermentum. Cras 
                tristique viverra gravida et sit egestas.'
                border='none'
                />
                </Col>
                <Col lg={4} md={12} xs={12} sm={12}>
                <ProjectsCards
                image={secondproject}
                title='Project Title'
                description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id et euismod bibendum adipiscing et orci, fermentum. Cras tristique viverra gravida et sit egestas.'
                border='none'
                />
                </Col>
                <Col lg={4} md={12} xs={12} sm={12} className={`${styles.thirdProjectmedia}`}>
                <ProjectsCards
                image={thirdproject}
                title='Project Title'
                description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id et euismod bibendum adipiscing et orci, fermentum. Cras tristique viverra gravida et sit egestas.'
                border='none'
                />
                </Col>
            </Row>
            <Row className='mt-5'>
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

export default LatestProjects
