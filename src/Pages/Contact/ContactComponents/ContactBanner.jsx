


import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import SiteMainBanner from '../../../components/reuseablecomponents/sitemainbanner/SiteMainBanner'
import vectorBar from '../../../assets/images/Vector 22.svg'
import Buttons from '../../../components/reuseablecomponents/Buttons/Buttons'
import styles from './ContactBanner.module.scss'
import Services from '../../../components/reuseablecomponents/services/Services'
import facebook from '../../../assets/images/contactFacebook.svg'
import linkedin from '../../../assets/images/contactTwitter.svg'
import twitter from '../../../assets/images/contactLinkedin.svg'

const ContactBanner = () => {
  return (
    <Container fluid >
<Row className={`${styles.contactBannerMain}`}>
    <Col xl={8} lg={8} md={12} xs={12} sm={12} className={`${styles.contantBannerCol}`} >
    <SiteMainBanner 
    image={vectorBar}
    heading='Contact Us'
    paragraph='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis egestas pellentesque libero dolor in diam consequat ut. Mi nibh amet viverra id aliquet neque odio.'
    />
    <Buttons
            color="white"
            backgroundColor=" #FFB400"
            border='3px solid #FFB400 '
            text="SEND US A MESSAGE"
            padding='15px 30px'
            marginTop='20px'
            />
    </Col>
    <Col xl={4} lg={4} md={12} sm={12} xs={12} className={`${styles.contactBannerBgColor}`}>
    <h2>
    Contact Info
          </h2>
          <Services
          paddingTop='0'
          image=''
          heading='Our Office'
          paraghaph='1234 Divi St. #1000, San Francisc, CA 93251'
          color='black'
          />
          <Services
          paddingTop="0"
          image=''
          heading='Open Office Hours'
          paraghaph='M-F: 9am – 6pm <br/> S-S: 10am – 4pm'
          color="black"
          />
          <Services
          paddingTop="0"
          image=''
          heading='Get in Touch'
          paraghaph='constructioninc.com<br/>
          (346) 426-2351s'
          color='black'
          />
<div className={`${styles.socialIcons}`}>
<img src={facebook} alt="" className='pe-3' />
<img src={linkedin} alt="" className='px-3' />
<img src={twitter} alt=""  className='px-3'/>
</div>

    </Col>
</Row>
    </Container>
  )
}

export default ContactBanner
