


import React from 'react'
import styles from './ServiceVideo.module.scss'
import { Container,Row,Col } from 'react-bootstrap'
import vector1 from '../../../../assets/images/Vector 1.svg'
import Buttons from '../../../../components/reuseablecomponents/Buttons/Buttons'
import YouTube from 'react-youtube';
import { Link } from 'react-router-dom'

const Experience = () => {
    const videoId = 'Tn6-PIqc4UM';
    const opts = {
        height: '550px',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };
  return (
   <Container fluid>
    <Row className='pt-5'>
        <Col lg={4} md={12} xs={12} sm={12} className={` gx-0  ${styles.videoData}`}>
        <h2 className={styles.experienceHead}>
        About Process
        </h2>
        <img src={vector1} alt="" />
        <p className={` pt-5 text-light ${styles.experienceText}`}>
        Lectus erat, consectetur eu sapien eget rhoncus consectetur sem. Proin cursus, dolor a mollis consectetur, risus dolor fermentum massa, a commodo elit dui sit amet risus.
        </p>
        <ul className={`${styles.unorderedListsVideo}`}>
            <li className={` text-light ${styles.listData}`}>
            Maecenas ornare nisl
            </li>
            <li className={`text-light pt-3 ${styles.listData}`}>
            A tortor ultrices bibendum
            </li>
            <li className={`text-light pt-3 ${styles.listData}`}>
            Nulla fermentum
            </li>
            <li className={`text-light pt-3 ${styles.listData}`}>
            Metus quis
            </li>
            <li className={`text-light pt-3 ${styles.listData}`}>
            Sodales tristique
            </li>
        </ul>
        </Col>
        <Col lg={8} md={12} xs={12} sm={12} className='gx-0'>
        <Container fluid className={styles.experienceBottom}>
            <Row className={styles.videoMainRow}>
                <Col className='gx-0 gy-0'>
                <YouTube videoId={videoId} opts={opts}/>
                </Col>
            </Row>
            
            <Row className={` ${styles.lastRow}`}>
            <Col lg={6} sm={12} xs={12} md={12} className={` text-start py-3  px-4 gx-0 ${styles.quote}`}>
            <h2 className={`${styles.number}`}>Call for a Quote</h2>
            <h5 className='pt-3'>(346) 234-6973</h5>
            </Col>
            <Col lg={6}  md={12} xs={12} sm={12} className={` text-center d-flex align-items-center justify-content-center py-3 px-4 ${styles.onlineForm}`}>
            <Link to='/contact'>
            <Buttons 
            color='black'
            backgroundColor='white'
            border="3px solid black"
            text="ONLINE ESTIMATE FORM"
            padding="20px 30px"

            />
            </Link>
            
            </Col>
          </Row>
          
        </Container>
        </Col>
    </Row>
   </Container>
  )
}

export default Experience
