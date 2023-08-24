


import React, { useContext } from 'react'
import styles from './HomeProjects.module.scss'
import { Col, Container, Row } from 'react-bootstrap'
import Services from '../../../../components/reuseablecomponents/services/Services'
import peojectshome from '../../../../assets/images/homeprojects.svg'
import belowBorder from '../../../../assets/images/belowBorder.svg'
import Buttons from '../../../../components/reuseablecomponents/Buttons/Buttons'
import { Link } from 'react-router-dom'
import { ThemeContext } from '../../../../assets/theme/Theme'

const HomeProjects = () => {

    const [{theme,theme2}] = useContext(ThemeContext)
  return (
    <Container fluid>
<Row>
    <Col lg={4} md={12} sm={12} xs={12} className={`${styles.bgHomeServices}`}>
    <Services image={peojectshome} heading='Eco Friendly Construction' paraghaph='Donec sollicitudin molestie malesuada. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. ' color='black' paddingRight='15px' />
    <Services image={peojectshome} heading='The Newest Technology Repairs' paraghaph='Donec sollicitudin molestie malesuada. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. ' color='black' paddingRight='15px'/>
    <Services image={peojectshome} heading='High Quality Construction Management' paraghaph='Donec sollicitudin molestie malesuada. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. ' color='black' paddingRight='15px'/>
    </Col>
    <Col lg={8} md={12} sm={12} xs={12} className={` gx-0 ${styles.homeProjects}`} style={{backgroundColor:theme2.backgroundColor}}>
    <Row className={` gx-0 ${styles.homeServicesHead}`}>
        <Col>
        <h2 className={styles.homeServicesText} style={{color:theme.color}}>
        No Project Too Big Or Too Small
        </h2>
        <img src={belowBorder} alt="" />
        </Col>
    </Row>
    <Row className={` gx-0 ${styles.homeProjectsText}`}>
        <Col md={6} className='pe-4'>
        <p className={`   ${styles.projectTextDetails}`} style={{color:theme.color}}>
        Lectus erat, consectetur eu sapien eget rhoncus consectetur sem. Proin cursus, dolor a mollis consectetur, risus dolor fermentum massa, a commodo elit dui sit amet risus. Maecenas ornare nisl a tortor ultrices bibendum. Nulla fermentum, metus quis sodales tristique, augue mauris molestie augue, non feugiat ligula neque nec felis 
        </p>
        </Col>
        <Col md={6} className={`${styles.bottomText}`}>
        <p className={`    ${styles.projectTextDetails}`} style={{color:theme.color}}>
        Lectus erat, consectetur eu sapien eget rhoncus consectetur sem. Proin cursus, dolor a mollis consectetur, risus dolor fermentum massa, a commodo elit dui sit amet risus. Maecenas ornare nisl a tortor ultrices bibendum. Nulla fermentum, metus quis sodales tristique, 
        </p>
        </Col>
    </Row>
    <Row className={` gx-0 py-5  ${styles.endRowProjects}`}>
        <Col lg={6} md={12} xs={12} sm={12} className={` text-center ${styles.freeConsultation}`}>
        <h3 className={`${styles.freeConsultationText}`}>
        Get Free Consultation
        </h3>
        </Col>
        <Col lg={6} md={12} xs={12} sm={12} className='text-center'>
            <Link to='/contact'>
            <Buttons
        color='#FFB400'
        border='3px solid #FFB400'
        backgroundColor='#2A2A2A'
        text='ONLINE ESTIMATE FORM'
        borderRadius='0'
        padding='10px 25px'
        />
            </Link>
        
        </Col>
    </Row>
    </Col>
</Row>
    </Container>
  )
}

export default HomeProjects
