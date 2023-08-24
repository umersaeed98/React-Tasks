


import React,{useContext} from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import clients from '../../../../assets/images/clientsMain.png'
import styles from './Clients.module.scss'
import { ThemeContext } from '../../../../assets/theme/Theme'
const Clients = () => {

  const [{theme2}] = useContext(ThemeContext)
  return (
    <Container fluid className={styles.clientsData} style={{backgroundColor:theme2.backgroundColor}}> 
 <Container>
        <Row className='pt-5'>
            <Col className='text-center'>
            <img src={clients} alt="" className={styles.clientsLogo} />
            </Col>
        </Row>
    </Container>
    </Container>
   
  )
}

export default Clients
