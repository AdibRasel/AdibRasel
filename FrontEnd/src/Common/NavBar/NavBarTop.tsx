import React, { useState, useEffect } from 'react';



import Container from 'react-bootstrap/Container';


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


    <Container className='d-md-block d-none'>



      <div className="">
        <a href="https://adibrasel.github.io/Javascript/" target="_blank"><span className="mt-md-0 mt-3 NavBarTopMenu"> Javascript </span></a>
        <a href="https://adibrasel.github.io/MongoDB/" target="_blank"><span className="mt-md-0 mt-3 NavBarTopMenu"> MongoDB </span></a>
        <a href="https://adibrasel.github.io/Express_js/" target="_blank"><span className="mt-md-0 mt-3 NavBarTopMenu"> Express JS </span></a>
        <a href="https://adibrasel.github.io/React_JS/index.html" target="_blank"><span className="mt-md-0 mt-3 NavBarTopMenu"> React JS </span></a>
        <a href="https://adibrasel.github.io/Node_JS/" target="_blank"><span className="mt-md-0 mt-3 NavBarTopMenu"> Node JS </span></a>
        <a href="https://adibrasel.github.io/API/" target="_blank"><span className="mt-md-0 mt-3 NavBarTopMenu"> Rest API </span></a>
      </div>


    </Container>




  </>)
}

export default NavBarTop