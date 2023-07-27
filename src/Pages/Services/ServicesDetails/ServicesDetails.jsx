


import React from 'react'
import vector1 from '../../../assets/images/Vector 1.svg'
import { Col, Container, Row } from 'react-bootstrap'
import ServicesReuse from '../../../components/reuseablecomponents/ServicesReuse/ServicesReuse'
import styles from './ServicesDetails.module.scss'
import Buttons from '../../../components/reuseablecomponents/Buttons/Buttons'
import { Link } from 'react-router-dom'

const ServicesDetails = () => {
    return (
        <>
        
        
        <Container fluid>
            <Row>
                <Col lg={3} md={12} sm={12} xs={12}>

                </Col>
                <Col lg={9} md={12} sm={12} xs={12} className={`${styles.servicesDetailsContainer}`} >
                    <ServicesReuse
                        heading='Building Construction'
                        image={vector1}
                        description='Lectus erat, consectetur eu sapien eget rhoncus consectetur sem. Proin cursus, dolor a mollis consectetur, risus dolor fermentum massa, a commodo elit dui sit amet risus. Maecenas ornare nisl a tortor ultrices bibendum. '
                    />
                    <Row>
<Col lg={4} md={12} sm={12} xs={12}>
<ul className={`${styles.unorderedListServices}`}>
    <li className={`  ${styles.listItemsServices}`}>
    Lectus erat consectetur
    </li>
    <li className={`  ${styles.listItemsServices}`}>
    Eu sapien eget
    </li>
    <li className={`  ${styles.listItemsServices}`}>
    Rhoncus consectetur
    </li>
    <li className={`  ${styles.listItemsServices}`}>
    Proin cursus
    </li>
    <li className={`  ${styles.listItemsServices}`}>
    Dolor a mollis consectetur
    </li>
</ul>
</Col>
<Col lg={4} md={12} sm={12} xs={12}>
<ul className={`${styles.unorderedListServices}`}>
    <li className={`  ${styles.listItemsServices}`}>
    Risus dolor fermentum
    </li>
    <li className={`  ${styles.listItemsServices}`}>
    Massa a commodo
    </li>
    <li className={`  ${styles.listItemsServices}`}>
    Elit dui sit amet risus
    </li>
    <li className={`  ${styles.listItemsServices}`}>
    Maecenas ornare
    </li>
    <li className={`  ${styles.listItemsServices}`}>
    Nisl a tortor ultrices
    </li>
</ul>
</Col>
<Col lg={4} md={12} sm={12} xs={12}>
<ul className={`${styles.unorderedListServices}`}>
    <li className={`  ${styles.listItemsServices}`}>
    Bibendum nulla fermentum
    </li>
    <li className={`  ${styles.listItemsServices}`}>
    Metus quis sodales
    </li>
    <li className={`  ${styles.listItemsServices}`}>
    Tristique augue mauri
    </li>
    <li className={`  ${styles.listItemsServices}`}>
    Molestie augue non
    </li>
    <li className={`  ${styles.listItemsServices}`}>
    Feugiat ligula neque
    </li>
</ul>
</Col>
                    </Row>
                
                </Col>
            </Row>
        </Container>
        <Container fluid>
            <Row>
                <Col lg={3} md={12} sm={12} xs={12} >
                
                </Col>
                <Col lg={9} md={12} sm={12} xs={12}>
                <Row className={` ${styles.servicesLastRow}`}>
            <Col lg={6} sm={12} xs={12} md={12} className={` text-center py-3  gx-0 px-4 ${styles.quote}`}>
           <Link to='/contact'>
           <Buttons 
            color='white'
            backgroundColor='#2A2A2A'
            border="3px solid white"
            text="GET A QUOTE"
            padding="11px 30px"

            />
           </Link>
            
            </Col>
            <Col lg={6}  md={12} xs={12} sm={12} className={` text-center py-3 px-4 gx-0 ${styles.onlineForm}`}>
            <Link to='/project' > 
            <Buttons 
            color='white'
            backgroundColor='#FFB400'
            border="3px solid white"
            text="LEARN MORE"
            padding="11px 30px"

            />
            </Link>
            
            </Col>
          </Row>
                </Col>
            </Row>
        </Container>
        </>
    )
}

export default ServicesDetails
