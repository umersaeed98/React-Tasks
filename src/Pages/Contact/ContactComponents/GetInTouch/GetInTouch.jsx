


import React from 'react'
import styles from './GetInTouch.module.scss'
import { Col, Container,Row,Accordion } from 'react-bootstrap'
import Buttons from '../../../../components/reuseablecomponents/Buttons/Buttons'
import vector1 from '../../../../assets/images/Vector 1.svg'

const GetInTouch = () => {
  return (
    <Container fluid className={`${styles.getInTouchForm}`}>

    
    <Container>
        <Row className='py-5'>
            <Col lg={6} md={12} xs={12} sm={12} className={` p-4 ${styles.getInTouchLeft}`}>
            <h2 className={styles.getInTouch}>
            Get In Touch
            </h2>
            <img src={vector1} alt="" />
            <form action="" className='pt-4'>
                <input type="text" name="name" id="name" placeholder='Name' className={`  ${styles.getInTouchText}`} />
                <input type="email" name='email' id='email' placeholder='Email' className={`  ${styles.getInTouchEmail}`} />
                <textarea className={` mt-4 p-2 ${styles.textAreaGetInTouch}`}
        value='Message'
        rows={7} // Set the number of visible rows for the textarea
        cols={50} // Set the number of visible columns for the textarea
      />

      <div className='text-end'>
        <Buttons
        color="black"
        backgroundColor="#F7F7F7"
        border="3px solid black"
        text="SEND MESSAGE"
        padding="8px 30px"
        marginTop="15px"
        hoverBackgroundColor='red'
        />
      </div>
            </form>
            </Col>
            <Col lg={6} md={12} sm={12} xs={12} className={` p-4 ${styles.rightGetInTouch}`}>
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

export default GetInTouch
