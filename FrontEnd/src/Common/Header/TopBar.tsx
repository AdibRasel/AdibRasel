import React from 'react'
import { NavLink } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { FaGithubSquare, FaLinkedin, FaMailBulk, FaFacebookSquare, FaPhoneSquare } from "react-icons/fa";

const TopBar = () => {

  function formatDate() {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const currentDate = new Date();

    const monthName = months[currentDate.getMonth()];
    const day = currentDate.getDate();
    const year = currentDate.getFullYear();

    return `${monthName} ${day}, ${year}`;
  }
  const formattedDate = formatDate();


  return (<>

    <div className="bg-dark p-1" style={{ borderTop: "4px solid #0dcaf0" }}>


      <Container>
        <Row>

          <Col sm={6} className='text-center text-sm-start '>


            <div className="text-white justify-content-center">


              <span className='text-light me-4'>{formattedDate}</span>

              <a style={{ textDecoration: "none", color: "white", paddingRight: "5px" }} href="https://github.com/AdibRasel" target="_blank" rel="noopener noreferrer"><span className='CommonHover'> <FaGithubSquare /> </span></a>
              <a style={{ textDecoration: "none", color: "white", paddingRight: "5px" }} href="https://www.linkedin.com/in/raselhossainadib/" target="_blank" rel="noopener noreferrer"><span className='CommonHover'> <FaLinkedin /> </span></a>
              <a style={{ textDecoration: "none", color: "white", paddingRight: "5px" }} href="mailto:adibrasel.2022@gmail.com" target="_blank" rel="noopener noreferrer"><span className='CommonHover'> <FaMailBulk /> </span></a>
              <a style={{ textDecoration: "none", color: "white", paddingRight: "5px" }} href="mailto:adibrasel.com@gmail.com" target="_blank" rel="noopener noreferrer"><span className='CommonHover'> <FaMailBulk />  </span></a>
              <a style={{ textDecoration: "none", color: "white", paddingRight: "5px" }} href="mailto:adibrasel.2024@gmail.com" target="_blank" rel="noopener noreferrer"><span className='CommonHover'> <FaMailBulk />  </span></a>
              <a style={{ textDecoration: "none", color: "white", paddingRight: "5px" }} href="https://www.facebook.com/RaselHossainAdib" target="_blank" rel="noopener noreferrer"><span className='CommonHover'> <FaFacebookSquare /> </span></a>
              <a style={{ textDecoration: "none", color: "white", paddingRight: "5px" }} href="tel:+8801934544352" target="_blank" rel="noopener noreferrer"><span className='CommonHover'> <FaPhoneSquare /> </span></a>
              <a style={{ textDecoration: "none", color: "white", paddingRight: "5px" }} href="tel:+8801626757897" target="_blank" rel="noopener noreferrer"><span className='CommonHover'> <FaPhoneSquare /> </span></a>

            </div>




          </Col>


          <Col sm={6} className='text-center text-sm-end text-white'>

            <NavLink className="TopBarNavLink" to="/">
              Home
            </NavLink>

            <NavLink className="TopBarNavLink" to="/about">
              About
            </NavLink>

            <NavLink className="TopBarNavLink" to="/contact">
              Contact
            </NavLink>

          </Col>
        </Row>
      </Container>

    </div>


  </>)
}

export default TopBar