import React, { useState, useEffect } from 'react';



import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import { FaHome } from "react-icons/fa";

const NavBarTop = () => {

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 0;
      setIsScrolled(scrolled);
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);



  return (<>


    <Container>

      <Navbar expand="lg" style={{backgroundColor:"#ffffffeb"}}>
      {/* ========= navbar fixed > below line========  */}
      {/* <Navbar expand="lg" style={{backgroundColor:"#ffffffeb"}} className={`${isScrolled ? 'fixed-top container' : ''}`}> */}
        <Container fluid>


          <Navbar.Brand href="#">
            <FaHome className='CommonColor CommonHover'/>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="navbarScroll" />


          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>

              <Nav.Link href="https://adibrasel.github.io/Javascript/" target="_blank"><span className='CommonColor CommonHover fst-italic'> Javascript </span></Nav.Link>
              <Nav.Link href="https://adibrasel.github.io/MongoDB/" target="_blank"><span className='CommonColor CommonHover fst-italic'> MongoDB </span></Nav.Link>
              <Nav.Link href="https://adibrasel.github.io/Express_js/" target="_blank"><span className='CommonColor CommonHover fst-italic'> Express JS </span></Nav.Link>
              <Nav.Link href="https://adibrasel.github.io/React_JS/index.html" target="_blank"><span className='CommonColor CommonHover fst-italic'> React JS </span></Nav.Link>
              <Nav.Link href="https://adibrasel.github.io/Node_JS/" target="_blank"><span className='CommonColor CommonHover fst-italic'> Node JS </span></Nav.Link>
              <Nav.Link href="https://adibrasel.github.io/API/" target="_blank"><span className='CommonColor CommonHover fst-italic'> API </span></Nav.Link>


              {/* DropDown Start  */}
              {/* <NavDropdown title="Link" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown> */}
              {/* DropDown End  */}

              
            </Nav>


            
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <button style={{ backgroundColor: "#474F7A", color: "#FFD0EC" }} className='btn'>Search</button>
            </Form>


          </Navbar.Collapse>
        </Container>
      </Navbar>


    </Container>




  </>)
}

export default NavBarTop