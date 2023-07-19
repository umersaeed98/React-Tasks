




import React from 'react'
import styles from './HeroSec.module.scss'
import { Container, Row, Col } from 'react-bootstrap'
import vectorbar from '../../assets/images/Vector 22.svg'
import Services from '../../components/reuseablecomponents/services/Services'
import firstservices from '../../assets/images/services1.svg'
import secondservices from '../../assets/images/services2.svg'
import thirdservices from '../../assets/images/services3.svg'
import Buttons from '../../components/reuseablecomponents/Buttons/Buttons'

const HeroSection = () => {
  return (
    <Container fluid>
      <Row className={`${styles.herorow}`}>
        <Col xl={8} lg={8} md={12} xs={12} sm={12} className={styles.herobg} >
          <div className={` d-flex ${styles.heroText}`}>
            <div className={styles.heroImage}>
              <img src={vectorbar} alt="" className={styles.barImage} />
            </div>
            <div>
              <h2 className={`text-light py-2 px-4 ${styles.heading}`}>
                Construction
              </h2>
            </div>
          </div>
          <p className='text-light pt-4'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas error eos optio quia, cumque maxime voluptatibus perspiciatis non impedit nostrum expedita, saepe quam eveniet ducimus accusantium excepturi? Laboriosam, commodi asperiores!</p>



          <Buttons
            color="white"
            backgroundColor="#FFB400"
            padding="15px 30px"
            borderRadius="0"
            text="VIEW OUR WORK"
            fontSize="14px"
            border="1px solid #FFB400"
            marginTop="25px"
          />


        </Col>
        <Col className={styles.herobgcolor} xl={4} lg={4} md={12} xs={12} sm={12}>
          <h2>
            Our Services
          </h2>
          <Services image={firstservices} heading='Building Construction' paraghaph='Lorem ipsum dolor sit consectetur adipiscing elit. ' />
          <Services image={secondservices} heading='Foundation Work' paraghaph='Lorem ipsum dolor sit consectetur adipiscing elit. ' />
          <Services image={thirdservices} heading='Site Management' paraghaph='Lorem ipsum dolor sit consectetur adipiscing elit. ' />
        </Col>
      </Row>
    </Container>
  )
}

export default HeroSection
