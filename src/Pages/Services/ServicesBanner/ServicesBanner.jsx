

import React from 'react'
import firstAboutServices from '../../../assets/images/aboutservices1.svg'
import secondAboutServices from '../../../assets/images/aboutusservices2.svg'
import thirdAboutServices from '../../../assets/images/aboutservices3.svg'
import Services from '../../../components/reuseablecomponents/services/Services'
import Buttons from '../../../components/reuseablecomponents/Buttons/Buttons'
import { Container,Row,Col } from 'react-bootstrap'
import SiteMainBanner from '../../../components/reuseablecomponents/sitemainbanner/SiteMainBanner'
import vectorBar from '../../../assets/images/aboutBar.svg'
import styles from './ServicesBanner.module.scss'
import { Link } from 'react-router-dom'

const ServicesBanner = () => {

  return (
    <Container fluid className={`${styles.servicesBanner}`}>
    <Row>
        <Col xl={8} lg={8} sm={12} xs={12} md={12} className={`${styles.aboutBannerLeft}`}>
        <SiteMainBanner
        image={vectorBar}
        heading='Our Construction Services'
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
        image={firstAboutServices}
        heading='Building Construction'
        paraghaph='Lorem ipsum dolor sit consectetur adipiscing elit. Nullam lectus erat'
        color='white'
        paddingRight='15px'
        />
        <Services 
        image={secondAboutServices}
        heading='Building Repairs'
        paraghaph='Lorem ipsum dolor sit consectetur adipiscing elit. Nullam lectus erat'
        color='white'
        paddingRight='15px'
        />
        <Services 
        image={thirdAboutServices}
        heading='Custom Design'
        paraghaph='Lorem ipsum dolor sit consectetur adipiscing elit. Nullam lectus erat'
        color='white'
        paddingRight='15px'
        />
        </Col>
    </Row>
</Container>
  )
}

export default ServicesBanner
