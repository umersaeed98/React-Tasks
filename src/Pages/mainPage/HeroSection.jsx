




import React from 'react'
import styles from './HeroSec.module.scss'
import { Container, Row, Col } from 'react-bootstrap'
import vectorbar from '../../assets/images/Vector 22.svg'
import Services from '../../components/reuseablecomponents/services/Services'
import firstservices from '../../assets/images/services1.svg'
import secondservices from '../../assets/images/services2.svg'
import thirdservices from '../../assets/images/services3.svg'
import Buttons from '../../components/reuseablecomponents/Buttons/Buttons'
import SiteMainBanner from '../../components/reuseablecomponents/sitemainbanner/SiteMainBanner'
import { Link } from 'react-router-dom'

const HeroSection = () => {
  return (
    <Container fluid>
      <Row className={`${styles.herorow}`}>
        <Col xl={8} lg={8} md={12} xs={12} sm={12} className={styles.herobg} >
          <SiteMainBanner
          image={vectorbar}
          heading='Construction'
          paragraph='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis egestas pellentesque libero dolor in diam consequat ut. Mi nibh amet viverra id aliquet neque odio.'
          />
          <Link to='portfolio'>
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
        <Col className={styles.herobgcolor} xl={4} lg={4} md={12} xs={12} sm={12}>
          <h2>
            Our Services
          </h2>
          <Services image={firstservices} heading='Building Construction' paraghaph='Lorem ipsum dolor sit consectetur adipiscing elit. ' paddingRight='20px' />
          <Services image={secondservices} heading='Foundation Work' paraghaph='Lorem ipsum dolor sit consectetur adipiscing elit. ' paddingRight='20px' />
          <Services image={thirdservices} heading='Site Management' paraghaph='Lorem ipsum dolor sit consectetur adipiscing elit. ' paddingRight='20px' />
        </Col>
      </Row>
    </Container>
  )
}

export default HeroSection
