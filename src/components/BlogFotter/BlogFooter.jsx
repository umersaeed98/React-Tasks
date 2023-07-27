



import React from 'react'
import styles from './BlogFooter.module.scss'
import { Container, Row, Col } from 'react-bootstrap'
import footervector from '../../assets/images/Vector 6.svg'
import Buttons from '../reuseablecomponents/Buttons/Buttons'
import facebook from '../../assets/images/facebook.svg'
import twitter from '../../assets/images/twitter.svg'
import linkedin from '../../assets/images/linkedin.svg'
import location from '../../assets/images/Subtract.svg'
import phone from '../../assets/images/Vector (2).svg'
import vector from '../../assets/images/mail.svg'
const BlogFooter = () => {

  return (

    <Container fluid>
      <Row>
        <Col lg={6} md={12} sm={12} xs={12} className={` p-5 ${styles.BlogfooterLeft}`}>
          <h2 className={styles.footerText}>
            Join Our Newsletter
          </h2>
          <img src={footervector} alt="" />
          <form action="" className='pt-4'>
            <input type="text" name="name" id="name" placeholder='Name' className={`${styles.text}`} />
            <input type="text" name='text' id='text' placeholder='SurName' className={`${styles.textsurname}`} />
            <input type="email" name="email" id="email" placeholder='Email' className={`${styles.email}`} />


            <div>
              <Buttons
                color="white"
                backgroundColor="#FFB400"
                border="3px solid white"
                text="SEND MESSAGE"
                padding="11px 20px"
                marginTop="15px"
                width='100%'
              />
            </div>
          </form>
        </Col>
        <Col lg={6} md={12} xs={12} sm={12}>
          <Row className={` p-4 ${styles.footerSections}`} >
            <Col className='text-center'>
              <img src={facebook} alt="" className='px-3' />
              <img src={twitter} alt="" className='px-3' />
              <img src={linkedin} alt="" className='px-3' />
            </Col>
          </Row>
          <Row className=' p-3'>
            <Col className={`p-2 ${styles.footerLists}`} >
              <ul className='list-unstyled'>
                <li className='py-3 d-flex'>
                  <div>
                    <img src={location} alt="" className='px-3' />
                  </div>
                  <div>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </div>

                </li>
                <li className='py-3 d-flex'>

                  <div>
                    <img src={phone} alt="" className='px-3' />
                  </div>
                  <div>
                    +00 123 456 78
                  </div>



                </li>
                <li className='py-3 d-flex'>

                  <div>
                    <img src={vector} alt="" className='px-3' />
                  </div>
                  <div>
                    constractioninc@gmail.com
                  </div>


                </li>
              </ul>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  )
}

export default BlogFooter
