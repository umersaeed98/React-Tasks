


import React,{useContext} from 'react'
import styles from './OurOwner.module.scss'
import { Container, Row,Col } from 'react-bootstrap'
import { ThemeContext } from '../../../../assets/theme/Theme'
const OurOwner = () => {

  const [{theme}] = useContext(ThemeContext)
  return (
    <Container>
        <Row className='py-5'>
            <Col className='text-center'>
            <h2 className={`${styles.ownerText}`} style={{color:theme.color}}>
            “Suspendisse neque erat, imperdiet <br/> ac non, sollicitudin accumsan lacus.<br/> Vestibulum ac ex rutrum,<br/> pellentesque purus et, lacinia mi.<br/> Nullam maximus lectus libero.”
            </h2>
            <h4 className={`${styles.ceoName}`}>
            JOHN SMITH – CEO
            </h4>
            </Col>
        </Row>
    </Container>
  )
} 

export default OurOwner
