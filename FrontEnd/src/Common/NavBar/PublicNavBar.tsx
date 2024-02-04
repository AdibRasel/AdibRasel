import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaHome } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

const PublicNavBar = () => {
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

    return (
        <>
            <Container>

                <Navbar expand="lg" style={{ backgroundColor: "#ffffffeb" }} className={`${isScrolled ? 'fixed-top container px-3' : ''}`}>
                    <Container fluid>
                        <Navbar.Brand href="#">
                            <FaHome className='CommonColor CommonHover' />
                        </Navbar.Brand>

                        <Navbar.Toggle aria-controls="navbarScroll" />

                        <Navbar.Collapse id="navbarScroll">
                            <Nav className="me-auto my-2 my-lg-0 PublicNavbarActive" style={{ maxHeight: '100px' }} navbarScroll>
                                <NavLink className="TopBarNavLink" to="/">
                                    <span className='NavBar'>Home</span>
                                </NavLink>
                                <NavLink className="TopBarNavLink" to="/1">
                                    <span className='NavBar'>Home 1</span>
                                </NavLink>
                                <NavLink className="TopBarNavLink" to="/2">
                                    <span className='NavBar'>Home 2</span>
                                </NavLink>
                                <NavLink className="TopBarNavLink" to="/3">
                                    <span className='NavBar'>Home 3</span>
                                </NavLink>
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
        </>
    );
}

export default PublicNavBar;
