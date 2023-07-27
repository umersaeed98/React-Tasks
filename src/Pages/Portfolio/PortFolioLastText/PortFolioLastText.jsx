


import React from 'react'
import styles from './PortfolioLastText.module.scss'
import { Col, Container, Row } from 'react-bootstrap'
const PortFolioLastText = () => {
  return (
    <Container fluid className={`${styles.portfolioLastBg}`}>
        <Container>
        <Row className='py-5'>

            <Col className='text-center'>
            <h2 className={`${styles.portfolioLastTextHeading}`}>
            Have a Project in Mind?<br/>
Let’s Get Building!
            </h2>
            </Col>
        </Row>
        </Container>
    </Container>
  )
}

export default PortFolioLastText
