



import React from 'react'
import styles from './OnlineEstimateForm.module.scss'
import { Container,Row,Col } from 'react-bootstrap'
import Buttons from '../../../../components/reuseablecomponents/Buttons/Buttons'

const OnlineEstimateForm = () => {
  return (
    <Container>
      <Row className='align-items-center py-4'>
        <Col lg={6} md={12} sm={12} xs={12} className={`${styles.onlineformCol}`}>
        <h2 className={styles.onlineFormEstimated}>
        Call: (541) 931-3526
        </h2>
        <h3 className={` pt-3 ${styles.estimateText}`}>
        We Can’t Wait to Make Your Ideas a Reality
        </h3>
        </Col>
        <Col lg={6} md={12} xs={12} sm={12} className={` text-end ${styles.btnCol}`}>
        <Buttons
        color="#FFB400"
        backgroundColor="white"
        border='3px solid #FFB400'
        text='ONLINE ESTIMATE FORM'
        padding='15px 20px'
        hoverColor='white'
        hoverBackgroundColor="red"
        />
        </Col>
      </Row>
    </Container>

  )
}

export default OnlineEstimateForm
