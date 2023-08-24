



import React,{useContext} from 'react'
import { Nav,Navbar,Container } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import styles from './Header.module.scss'
import { ThemeContext } from '../../assets/theme/Theme'

const Header = () => {
  
  const [{theme}] = useContext(ThemeContext)
  
  return (
    <div >

    
   <Navbar expand="lg"  className='py-3' style={{backgroundColor:theme.backgroundColor}} >
      <Container>
        <LinkContainer to='/' style={{color:theme.color}} >
        <Navbar.Brand className={`fw-bold ${styles.brandHeader}`} >Construction Company Landing</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className='text-center'>
          <Nav
            className="ms-auto my-2 my-lg-0 "
            navbarScroll
          >
            <LinkContainer to='home' style={{color:theme.color}} activeClassName={styles.activeLink} >
             <Nav.Link className=' pe-2' >Home</Nav.Link>
            </LinkContainer>
           <LinkContainer to='about' style={{color:theme.color}} activeClassName={styles.activeLink}>
           <Nav.Link className=' pe-2'>About</Nav.Link>
           </LinkContainer>
            <LinkContainer to='project' style={{color:theme.color}} activeClassName={styles.activeLink}>
            <Nav.Link className=' pe-2'>Project</Nav.Link>
            </LinkContainer>
            <LinkContainer to='blog' style={{color:theme.color}} activeClassName={styles.activeLink}>
            <Nav.Link className=' pe-2'>Blog</Nav.Link>
            </LinkContainer>
              <LinkContainer to='portfolio' style={{color:theme.color}} activeClassName={styles.activeLink}>
            <Nav.Link className=' pe-2'>Portfolio</Nav.Link>
            </LinkContainer>
              <LinkContainer to='service' style={{color:theme.color}} activeClassName={styles.activeLink}>
            <Nav.Link className=' pe-2'>Service</Nav.Link>
            </LinkContainer>
              <LinkContainer to='services' style={{color:theme.color}} activeClassName={styles.activeLink}>
            <Nav.Link className=' pe-2'>Services</Nav.Link>
            </LinkContainer>
              <LinkContainer to='contact' style={{color:theme.color}} activeClassName={styles.activeLink}>
            <Nav.Link className=' pe-2'>Contact
            </Nav.Link>
            </LinkContainer>
            <LinkContainer to='/'>
            <Nav.Link style={{color:theme.color}}>
            <i className="fas fa-shopping-cart px-3"></i>
            </Nav.Link>
            </LinkContainer>
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Header
