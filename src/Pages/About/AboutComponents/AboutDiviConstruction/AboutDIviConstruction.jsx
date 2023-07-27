



import React from 'react'
import styles from './AboutDiviConstruction.module.scss'
import { Col, Container, Row } from 'react-bootstrap'
import vectorBar from '../../../../assets/images/Vector 1.svg'

const AboutDIviConstruction = () => {
  return (
    <Container>
        <Row className='py-5'>
            <Col className='text-center'>
            <h2 className={`${styles.DiviConstruction}`}>
            About Divi Construction
            </h2>
            <img src={vectorBar} alt="" />
            </Col>
        </Row>
        <Row>
            <Col lg={6} md={12} xs={12} sm={12} className={`${styles.diviText}`}>
            <p className={` text-muted ${styles.textDivi}`}>
            Lectus erat, consectetur eu sapien eget rhoncus consectetur sem. Proin cursus, dolor a mollis consectetur, risus dolor fermentum massa, a commodo elit dui sit amet risus. Maecenas ornare nisl a tortor ultrices bibendum. Nulla fermentum, metus quis sodales tristique, augue mauris molestie augue, non feugiat ligula neque nec felis.
<br/>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sed nibh dignissim, cursus tellus sit amet, ultrices mauris. Aliquam blandit est in eros elementum, quis vehicula est suscipit.
            </p>
            </Col>
            <Col lg={6} md={12} xs={12} sm={12} className={`${styles.diviText}`} >
            <p className={` text-muted ${styles.textDivi}`}>
            Lectus erat, consectetur eu sapien eget rhoncus consectetur sem. Proin cursus, dolor a mollis consectetur, risus dolor fermentum massa, a commodo elit dui sit amet risus. Maecenas ornare nisl a tortor ultrices bibendum. Nulla fermentum, metus quis sodales tristique, augue mauris molestie augue, non feugiat ligula neque nec felis.
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sed nibh dignissim, cursus tellus sit amet, ultrices mauris. Aliquam blandit est in eros elementum, quis vehicula est suscipit.
            </p>
            </Col>
        </Row>
    </Container>
  )
}

export default AboutDIviConstruction
