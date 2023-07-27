


import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import clients from '../../../../assets/images/Clients.svg'
import styles from './Clients.module.scss'

const Clients = () => {
  return (
    <Container fluid className={styles.clientsData}> 
 <Container>
        <Row className='pt-5'>
            <Col className='text-center'>
            <img src={clients} alt="" className={styles.clientsLogo} />
            </Col>
        </Row>
    </Container>
    </Container>
   
  )
}

export default Clients
