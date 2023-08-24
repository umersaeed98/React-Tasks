


import React,{useContext} from 'react'
import styles from './AboutProject.module.scss'
import { Col, Container, Row } from 'react-bootstrap'
import aboutProjectBar from '../../../assets/images/projectaboutbar.svg'
import aboutproject from '../../../assets/images/aboutProject.svg'
import { ThemeContext } from '../../../assets/theme/Theme';
const AboutProject = () => {

  const [{theme}] = useContext(ThemeContext)
  return (
    <Container className={`${styles.aboutProjectMain}`}>
        <Row className={` align-items-center py-5 ${styles.aboutProjectMainRow}`}>
            <Col lg={6} md={12} xs={12} sm={12} className={`${styles.aboutProjectLeft}`}>
            <h2 className={`${styles.aboutProjectHeading}`}>
            About this Project
            </h2>
            <img src={aboutProjectBar} alt="" className='pt-3' />
            <p className={` pt-3 ${styles.projectabutText}`} style={{color:theme.color}} >
            Lectus erat, consectetur eu sapien eget rhoncus consectetur sem.<br/> Proin cursus, dolor a mollis consectetur, risus dolor fermentum <br/> massa, a commodo elit dui sit amet risus.
            </p>
            <ul className={` ${styles.unorderedListItems}`} >
                <li className={` pt-2 ${styles.liItems}`} style={{color:theme.color}}>
                Maecenas ornare nisl
                </li>
                <li className={` pt-2 ${styles.liItems}`} style={{color:theme.color}} >
                A tortor ultrices bibendum
                </li>
                <li className={` pt-2 ${styles.liItems}`} style={{color:theme.color}} >
                Nulla fermentum
                </li>
                <li className={` pt-2 ${styles.liItems}`} style={{color:theme.color}} >
                Metus quis
                </li>
                <li className={` pt-2 ${styles.liItems}`} style={{color:theme.color}} >
                Sodales tristique
                </li>
            </ul>
            </Col>
            
            <Col lg={6} md={12} xs={12} sm={12} className={`${styles.aboutProjectRight}`}>
            <img src={aboutproject} alt="" className={`${styles.imgAbout}`} />
            
            </Col>
        </Row>
    </Container>
  )
}

export default AboutProject
