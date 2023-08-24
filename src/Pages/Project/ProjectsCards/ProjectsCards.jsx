


import React,{useContext} from 'react'
import styles from './Projectscards.module.scss'
import { Col, Container, Row } from 'react-bootstrap'
import Servicecards from '../../Service/ServiceComponents/ServiceCards/ServiceCards'
import { ThemeContext } from '../../../assets/theme/Theme';
const ProjectsCards = () => {
  const [{theme,theme2}] = useContext(ThemeContext)
  return (
    <Container fluid className={` gx-0 ${styles.projectsCards}`} >
        <Row className='gx-0'  >
            <Col className='gx-0'>
            <Servicecards/>
            </Col>
        </Row>
    </Container>
  )
}

export default ProjectsCards
