



import React from 'react'
import styles from './Projects.module.scss'
import { Col, Container, Row } from 'react-bootstrap'
import belowborder from '../../../../assets/images/belowBorder.svg'
import Buttons from '../../../../components/reuseablecomponents/Buttons/Buttons'
import { Link } from 'react-router-dom'

const Projects = () => {
  return (
    <Container fluid>
      <Row>
        <Col lg={4} md={12} sm={12} xs={12} className={`${styles.servicebg}`} >
        </Col>
        <Col lg={8} md={12} sm={12} xs={12} className={` gx-0 ${styles.serviceDetails}`}>
          <Row className={` gx-0 ${styles.serviceFirstDetails}`}>
            <Col>
            <h2 className={styles.serviceHead}>
            No Project Too Big Or Too Small
          </h2>
          <img src={belowborder} alt="" />
            </Col>
          </Row>
          
          <Row className={`pt-4 gx-0 ${styles.serviceSecondDetails}`}>
            <Col md={6}>
              <p className={` text-muted ${styles.detailsText}`}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien, dignissim tristique tellus sed faucibus nullam. Tincidunt mauris ut quam sed mauris proin feugiat. Scelerisque lorem posuere iaculis nunc amet phasellus.
<p className='pt-5 mt-4 text-muted'>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien, dignissim tristique tellus sed faucibus nullam.
</p>
                
              </p>
            </Col>
            <Col md={6} className={` text-muted ${styles.detailsText}`}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien, dignissim tristique tellus sed faucibus nullam. Tincidunt mauris ut quam sed mauris proin feugiat. Scelerisque lorem posuere iaculis nunc amet phasellus.
              </p>
              <Link to='/project'>
              <Buttons
              color='#1F1F1F'
              backgroundColor=" #F7F7F7"
              border="4px solid #1F1F1F"
              text="LEARN MORE"
              padding="15px 80px"
              marginTop="50px"
              />
              </Link>
             
            </Col>
          </Row>
          <Row className={`gx-0 ${styles.endRow}`}>
            <Col md={6} className={` text-center py-3 ${styles.counter}`}>
            <h2>12</h2>
            <h4 className={`${styles.years}`}>YEARS ESTABLISHED</h4>
            </Col>
            <Col md={6} className={` text-center py-3 ${styles.completedProjects}`}>
            <h2 className='text-light'>250</h2>
            <h4 className={` text-light ${styles.projectscompleted}`}>COMPLETED PROJECTS</h4>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  )
}

export default Projects
