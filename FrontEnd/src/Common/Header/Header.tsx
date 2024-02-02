import React from 'react'
import { NavLink } from 'react-router-dom';

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
          <NavLink className="TopBarNavLink" to="/">
            <img src={Logo} className='img-fluid HeaderLogo' alt="" />
          </NavLink>

        </Col>


        <Col sm={8} className='text-center text-sm-end text-white'>
          <NavLink className="TopBarNavLink" to="/">
            <img src={HeaderImage} className='img-fluid HeaderImage' alt="" />
          </NavLink>

        </Col>
      </Row>
    </Container>




  </>)
}

export default Header