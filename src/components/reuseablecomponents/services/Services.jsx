

import React,{useContext} from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import styles from './services.module.scss'
import { ThemeContext } from '../../../assets/theme/Theme'

const Services = ({color,image,heading,paraghaph,fontSize,paddingTop,paddingRight}) => {
  const servicesStyles ={
    'color':color,
    'paddingTop':paddingTop,
    'paddingRight':paddingRight
  }

  const [{theme,theme3,theme4}] = useContext(ThemeContext)
  const themeStyle = {
    color:theme.color
  }
  const mainthemeStyle = {
    color:theme3.color
  }


  

  const mergedStyles = {...servicesStyles, ...themeStyle, ...mainthemeStyle}
  return (
   <Container className={`${styles.servicesContainer}`}>
    <Row>
<Col className={` gx-0 ${styles.icons}`}>
  <div style={servicesStyles}>
  <img src={image} alt=""/>
  </div>
<div className={`${styles.contactDetails}`}>
<h4 style={mergedStyles}   className={`fw-bold ${styles.heading}`}>{heading}</h4>
<p style={mergedStyles} className={`${styles.para}` } dangerouslySetInnerHTML={{ __html: paraghaph }}/>
</div>
</Col>
    </Row>
   </Container>
  )
}

export default Services
