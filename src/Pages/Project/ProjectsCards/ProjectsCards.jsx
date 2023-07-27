


import React from 'react'
import styles from './Projectscards.module.scss'
import { Col, Container, Row } from 'react-bootstrap'
import Servicecards from '../../Service/ServiceComponents/ServiceCards/ServiceCards'
const ProjectsCards = () => {
  return (
    <Container fluid className={` gx-0 ${styles.projectsCards}`}>
        <Row className='gx-0'>
            <Col className='gx-0'>
            <Servicecards/>
            </Col>
        </Row>
    </Container>
  )
}

export default ProjectsCards
