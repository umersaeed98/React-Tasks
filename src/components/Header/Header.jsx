



import React from 'react'
import { Nav,Navbar,Container } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const Header = () => {
  return (
   <Navbar expand="lg" bg='white' className='py-3'>
      <Container>
        <LinkContainer to='/'>
        <Navbar.Brand className='fw-bold'>Construction Company Landing</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0 "
            navbarScroll
          >
            <LinkContainer to='home'>
             <Nav.Link className='text-dark pe-3'>Home</Nav.Link>
            </LinkContainer>
           <LinkContainer to='about'>
           <Nav.Link className='text-dark pe-3'>About</Nav.Link>
           </LinkContainer>
            <LinkContainer to='project'>
            <Nav.Link className='text-dark pe-3'>Project</Nav.Link>
            </LinkContainer>
            <LinkContainer to='blog'>
            <Nav.Link className='text-dark pe-3'>Blog</Nav.Link>
            </LinkContainer>
              <LinkContainer to='portfolio'>
            <Nav.Link className='text-dark pe-3'>Portfolio</Nav.Link>
            </LinkContainer>
              <LinkContainer to='service'>
            <Nav.Link className='text-dark pe-3'>Service</Nav.Link>
            </LinkContainer>
              <LinkContainer to='services'>
            <Nav.Link className='text-dark pe-3'>Services</Nav.Link>
            </LinkContainer>
              <LinkContainer to='contact'>
            <Nav.Link className='text-dark pe-3'>Contact
            <i className="fas fa-shopping-cart px-3"></i>
            </Nav.Link>
            </LinkContainer>
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
