


import React from 'react'
import styles from './ServiceBanner.module.scss'
import SiteMainBanner from '../../../../components/reuseablecomponents/sitemainbanner/SiteMainBanner'
import Buttons from '../../../../components/reuseablecomponents/Buttons/Buttons'
import { Container,Row,Col } from 'react-bootstrap'
import firstservice from '../../../../assets/images/aboutservices1.svg'
import secondservice from '../../../../assets/images/aboutusservices2.svg'
import thirdservice from '../../../../assets/images/aboutservices3.svg'
import vectorBar from '../../../../assets/images/Vector 22.svg'
import Services from '../../../../components/reuseablecomponents/services/Services'
import { Link } from 'react-router-dom'
const ServiceBanner = () => {
  return (
    <Container fluid className={`${styles.servicesBanner}`}>
    <Row className='d-flex text-align-center'>
        <Col xl={8} lg={8} sm={12} xs={12} md={12} className={`  ${styles.aboutBannerLeft}`}>
        <SiteMainBanner
        image={vectorBar}
        heading='Framing'
        paragraph='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis <br/> egestas pellentesque libero dolor in diam consequat ut. '

        />
        <Link to='/portfolio'>
        <Buttons
        color="white"
        backgroundColor=" #FFB400"
        border='3px solid #FFB400 '
        text="VIEW OUR WORK"
        padding='15px 30px'
        marginTop='20px'
        />
        </Link>
        
        </Col>
        <Col xl={4} lg={4} md={12} sm={12} xs={12} className={`${styles.aboutBannerRight}`}>
        
        <h2 className={`${styles.whatWeDo}`}>
        What We DO
        </h2>
        <Services 
        paddingRight='15px'
        image={firstservice}
        heading='Building Construction'
        paraghaph='Lorem ipsum dolor sit consectetur adipiscing elit. Nullam lectus erat'
        color='white'
        />
        <Services 
        paddingRight='15px'
        image={secondservice}
        heading='Building Repairs'
        paraghaph='Lorem ipsum dolor sit consectetur adipiscing elit. Nullam lectus erat'
        color='white'
        />
        <Services 
        paddingRight='15px'
        image={thirdservice}
        heading='Custom Design'
        paraghaph='Lorem ipsum dolor sit consectetur adipiscing elit. Nullam lectus erat'
        color='white'
        />
        </Col>
    </Row>
</Container>
  )
}

export default ServiceBanner
