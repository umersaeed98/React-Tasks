

import React, { useContext } from 'react'
import { Col, Container, Row,Accordion } from 'react-bootstrap'
import vector1 from '../../../../assets/images/Vector 1.svg'
import styles from './Faqs.module.scss'
import Buttons from '../../../../components/reuseablecomponents/Buttons/Buttons'
import { Link } from 'react-router-dom'
import { ThemeContext } from '../../../../assets/theme/Theme'

const Faqs = () => {

const [{theme}] = useContext(ThemeContext)
    
  return (
    <Container fluid className={styles.faqMain} style={{backgroundColor:theme.backgroundColor}}> 
    <Container >
        <Row className={` p-5 ${styles.faqRow}`}>
            <Col lg={4} md={12} xs={12} sm={12} className={` pt-5 ${styles.faqLeft}`}>
            <h2 className={styles.faqHead} style={{color:theme.color}}>
            Let’s Build Something<br/> Together
            </h2>
            <img src={vector1} alt="" className='pt-3'/>
            <p className=' pt-4' style={{color:theme.color}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien, dignissim tristique tellus sed faucibus nullam. Tincidunt mauris ut quam sed mauris proin feugiat. 
            </p>
            <Link to='/contact'>
            <Buttons
            color="#FFB400"
            backgroundColor="#F7F7F7"
            border='3px solid #FFB400'
            text='GET IN TOUCH'
            padding='15px 60px'
            marginTop="15px"
            />
            </Link>
            
            </Col>
            <Col lg={8} md={12} sm={12} xs={12} className='pt-5'>
            <Accordion defaultActiveKey="0" className={styles.customAccordion}>
      <Accordion.Item eventKey="0" className={styles.accorditem}>
        <Accordion.Header  className={` ${styles.headerBg}`}>Donec rutrum congue leo eget malesuada?</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Vivamus suscipit tortor eget felis porttitor volutpat?</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Curabitur non nulla sit amet nisl tempus?</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>Pellentesque in ipsum id orci porta dapibus?</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header>Curabitur non nulla sit amet nisl?</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
            
            </Col>
        </Row>
    </Container>
    </Container>
  )
}

export default Faqs
