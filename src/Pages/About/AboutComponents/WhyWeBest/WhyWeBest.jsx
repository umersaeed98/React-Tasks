



import React from 'react'
import styles from './WhyWeBest.module.scss'
import { Col, Container, Row } from 'react-bootstrap'
import Services from '../../../../components/reuseablecomponents/services/Services'
import yellowArrow from '../../../../assets/images/yellowArrow.svg'
import Buttons from '../../../../components/reuseablecomponents/Buttons/Buttons'
import whyChooseUs from '../../../../assets/images/whyChooseUs.svg'
import { Link } from 'react-router-dom'
const WhyWeBest = () => {
  return (
    <Container fluid>
        <Row className='mt-3'>
            <Col lg={4} md={12} sm={12} xs={12} className={` gx-0 ${styles.whyWeBestLeft}`}>
            <h2 className={`pb-4 ${styles.whyWeBestLeftText}`}>
            Only the Best
            </h2>
            <Services
            paddingRight='15px'
            image={yellowArrow}
            heading='Eco Friendly Construction'
            paraghaph='Donec sollicitudin molestie malesuada.<br/> Praesent sapien massa, convallis  a pellentesque nec, egestas non nisi. '
            color='black'
            />
            <Services
            paddingRight='15px'
            image={yellowArrow}
            heading='The Newest Technology Repairs'
            paraghaph='Donec sollicitudin molestie malesuada.<br/> Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. '
            color='black'
            />
            <Services
            paddingRight='15px'
            image={yellowArrow}
            heading='High Quality Construction Management'
            paraghaph='Donec sollicitudin molestie malesuada. <br/> Praesent sapien massa, convallis  a pellentesque nec, egestas non nisi. '
            color='black'
            />
            <div className={` text-end ${styles.buttonQuote}`}>
              <Link to='/contact'>
              <Buttons
        color="#FFB400"
        backgroundColor="#F7F7F7"
        border='3px solid #FFB400'
        text='FREE QUOTE'
        padding='15px 30px'
        marginTop='60px'
        />
              </Link>
            
            </div>
            </Col>
            <Col lg={8} md={12} sm={12} xs={12} className='gx-0'>
            <img src={whyChooseUs} alt="" className='w-100' />
            <Row className={`gx-0 ${styles.lastRowWhyChoose}`}>
            <Col md={6} className={` text-center py-3 ${styles.counter}`}>
            <h2>12</h2>
            <h4 className={`${styles.years}`}>YEARS ESTABLISHED</h4>
            </Col>
            <Col md={6} className={` text-center py-3 ${styles.completedProjects}`}>
            <h2 className='text-light'>250</h2>
            <h4 className={` text-light ${styles.projectscompleted}`}>COMPLETED PROJECTS</h4>
            </Col>
          </Row>
          <Row className={`py-3 gx-0 ${styles.endLastRowWhyChooseUs}`}>
            <Col md={6} className={` text-center py-3 ${styles.counter}`}>
            <h2>12</h2>
            <h4 className={`${styles.years}`}>YEARS ESTABLISHED</h4>
            </Col>
            <Col md={6} className={` text-center py-3 ${styles.completedProjects}`}>
            <h2 >250</h2>
            <h4 className={`  ${styles.projectscompleted}`}>COMPLETED PROJECTS</h4>
            </Col>
          </Row>
            </Col>
        </Row>
    </Container>
  )
}

export default WhyWeBest
