import React, { useState, useEffect } from 'react';
// import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaHome } from "react-icons/fa";
import { NavLink } from 'react-router-dom';





const AuthenticNav = () => {
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

            <Navbar expand="lg" style={{ backgroundColor: "#ffffffeb" }} className={`${isScrolled ? 'fixed-top container px-3' : ''}`}>
                <Container fluid>
                    {/* <Navbar.Brand href="/"> */}
                    <NavLink className="TopBarNavLink" to="/">
                        <FaHome className='CommonColor CommonHover' />
                    </NavLink>
                    {/* </Navbar.Brand> */}

                    <Navbar.Toggle aria-controls="navbarScroll" />

                    <Navbar.Collapse id="navbarScroll">
                        <Nav className="me-auto my-2 my-lg-0 PublicNavbarActive" style={{ maxHeight: '100px' }} navbarScroll>
                            <NavLink className="TopBarNavLink" to="/">
                                <span className='NavBar'>Home</span>
                            </NavLink>
                            {/* <NavLink className="TopBarNavLink" to="/AuthenticUser">
                                <span className='NavBar'>User</span>
                            </NavLink> */}
                            <NavLink className="TopBarNavLink" to="/AuthenticUserProfile">
                                <span className='NavBar'>Profile</span>
                            </NavLink>
                            <NavLink className="TopBarNavLink" to="/AuthenticCategory">
                                <span className='NavBar'>Category</span>
                            </NavLink>
                            {/* <NavLink className="TopBarNavLink" to="/AuthenticPost">
                                <span className='NavBar'>Post</span>
                            </NavLink> */}
                            <NavLink className="TopBarNavLink" to="/AuthenticComment">
                                <span className='NavBar'>Comment</span>
                            </NavLink>
                            {/* <NavLink className="TopBarNavLink" to="/AuthenticProfile">
                                <span className='NavBar'>Profile</span>
                            </NavLink> */}
                            <NavLink className="TopBarNavLink" to="/MultipleEmailSend">
                                <span className='NavBar'>Multiple Email Send</span>
                            </NavLink>
                            {/* <NavLink className="TopBarNavLink" to="/SingleEmailSend">
                                <span className='NavBar'>Single Email Send</span>
                            </NavLink> */}
                            {/* <NavLink className="TopBarNavLink" to="/WebsiteToPdf">
                                <span className='NavBar'>Website To Pdf</span>
                            </NavLink> */}
                            
                            
                            {/* Uncomment and add your other NavLinks here */}
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

export default AuthenticNav