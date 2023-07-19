


import React from 'react'
import styles from './GetQuote.module.scss'
import { Col, Container, Row } from 'react-bootstrap'
import Buttons from '../../../../components/reuseablecomponents/Buttons/Buttons'

const GetQuote = () => {
  return (
    <Container>
      <Row className='align-items-center py-4'>
        <Col lg={6} md={6} sm={12} xs={12} className='py-3'>
        <h2 className={styles.quote}>
        Get a Quote For Your Project
        </h2>
        </Col>
        <Col lg={6} md={6} xs={12} sm={12} className='text-center'>
        <Buttons
        color="#FFB400"
        backgroundColor="white"
        border='3px solid #FFB400'
        text='FREE QUOTE'
        padding='15px 50px'
        />
        </Col>
      </Row>
    </Container>
  )
}

export default GetQuote
