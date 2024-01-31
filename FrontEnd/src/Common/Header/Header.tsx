import React from 'react'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Logo from "../../Assets/Image/Logo.png"
import HeaderImage from "../../Assets/Image/Header-Image.png"


const Header = () => {
  return (<>
  
  
  <Container>
        <Row className='Header'>
          <Col sm={4} className='text-center text-sm-start '>
            <img src={Logo}  className='img-fluid HeaderLogo' alt="" />
          </Col>


          <Col sm={8} className='text-center text-sm-end text-white'>
            <img src={HeaderImage} className='img-fluid HeaderImage' alt="" />
          </Col>
        </Row>
      </Container>
  
  
  
  
  </>)
}

export default Header