


import React,{useContext} from 'react'
import styles from './LowerProjectsAbout.module.scss'
import { Col, Container, Row } from 'react-bootstrap'
import lowerprojectabout from '../../../assets/images/loweraboutproject.svg' 
import { ThemeContext } from '../../../assets/theme/Theme';
const LowerProjectsAbout = () => {
  const [{theme}] = useContext(ThemeContext)
  return (
    <Container>
        <Row className={` py-5  align-items-center ${styles.loweraboutProjectRow}`}>
            <Col lg={6} sm={12} md={12} xs={12} className={`${styles.loweraboutproject}`}>
            <img src={lowerprojectabout} alt="" className='w-100' />
            </Col>
            <Col lg={6} sm={12} md={12} xs={12}>
            <p className={` ${styles.lowerProjectText}`} style={{color:theme.color}} >
            Lorem ipsum dolor sit consectetur adipiscing elit. Nullam lectus erat, consectetur eu sapien eget rhoncus consectetur sem.
Proin cursus, dolor a mollis consectetur, risus dolor fermentum massa, a commodo elit dui sit amet risus. Maecenas ornare nisl a tortor ultrices bibendum. Nulla fermentum, metus quis sodales tristique, augue mauris molestie augue non feugiat ligula neque nec felis.
<br/> <br/>
Lectus erat, consectetur eu sapien eget rhoncus consectetur sem. Proin cursus, dolor a mollis consectetur, risus dolor fermentum massa, a commodo elit dui sit amet risus. Maecenas ornare nisl a tortor ultrices bibendum. Nulla fermentum, metus quis sodales tristique, augue mauris molestie augue, non feugiat ligula neque nec felis.
            </p>
            </Col>
        </Row>
    </Container>
  )
}

export default LowerProjectsAbout
