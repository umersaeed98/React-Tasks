


import React, { useContext } from 'react'
import styles from './ServiceDescription.module.scss'
import { Col, Container, Row } from 'react-bootstrap'
import { ThemeContext } from '../../../../assets/theme/Theme'
const ServiceDescription = () => {
  const [{theme}] = useContext(ThemeContext)
  return (
    <Container>
        <Row className='pt-5'>
            <Col lg={6} md={12} xs={12} sm={12} className={`${styles.description}`}> 
            <p className={` m-0 ${styles.serviceDescription}`} style={{color:theme.color}}>
            Lectus erat, consectetur eu sapien eget rhoncus consectetur sem. Proin cursus, dolor a mollis consectetur, risus dolor fermentum massa, a commodo elit dui sit amet risus. Maecenas ornare nisl a tortor ultrices bibendum. Nulla fermentum, metus quis sodales tristique, augue mauris molestie augue, non feugiat ligula neque nec felis.
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sed nibh dignissim, cursus tellus sit amet, ultrices mauris. Aliquam blandit est in eros elementum, quis vehicula est suscipit. Proin cursus, dolor a mollis consectetur, risus dolor fermentum massa, a commodo elit dui sit amet risus. Maecenas ornare nisl a tortor ultrices bibendum. 
            </p>
            </Col>
            <Col lg={6} md={12} xs={12} sm={12} className={` m-0 ${styles.description}`}> 
            <p className={`${styles.serviceDescription}`} style={{color:theme.color}}>
            Lorem ipsum dolor sit consectetur adipiscing elit. Nullam lectus erat, consectetur eu sapien eget rhoncus consectetur sem.
Proin cursus, dolor a mollis consectetur, risus dolor fermentum massa, a commodo elit dui sit amet risus. Maecenas ornare nisl a tortor ultrices bibendum. Nulla fermentum, metus quis sodales tristique, augue mauris molestie augue non feugiat ligula neque nec felis.
<br/> <br/>
Lectus erat, consectetur eu sapien eget rhoncus consectetur sem. Proin cursus, dolor a mollis consectetur, risus dolor fermentum massa, a commodo elit dui sit amet risus. Maecenas ornare nisl a tortor ultrices bibendum.  
            </p>
            </Col>
        </Row>
    </Container>
  )
}

export default ServiceDescription
