import React, { useEffect, useState } from 'react';
import { Button, Container, Image, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import logo from '../../../logo.svg';

const NavBar = () => {
  const [isSticky, setSticky] = useState(false);
  const [isCollapsed , setCollapsed] = useState(null);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if(window.scrollY > 50){
        setSticky(true)
      }else{
        setSticky(false)
      }
    })
  }, []);

    return (
          <Navbar expand="lg" className={ (isSticky || isCollapsed) ? "slide in py-2 show shadow-sm navbar navbar-expand-md bg-white navbar-light   fixed-top" : "slide out show navbar navbar-expand-nd navbar-light py-2 fixed-top "}>
            <Container >
                <Navbar.Brand smooth as={HashLink} to="#home"  > <Image style={{height:'33px', width:'43px'}} src={logo} /> <strong>La Cresta Del Mar</strong></Navbar.Brand>
                <Navbar.Toggle onClick={  () => setCollapsed(!isCollapsed ? 'show' : null )} aria-controls="basic-navbar-nav"  style={{background:'#10bad4'}} />
                  <Navbar.Collapse id="navbar-nav" >
                    <Nav className="ml-auto text-center">
                      <Nav.Link  smooth as={HashLink} to="#home"   className="mr-3"><strong>Home</strong></Nav.Link>
                      <Nav.Link  smooth as={HashLink} to="#about" className="mr-3"><strong>Houses</strong></Nav.Link>
                      <Nav.Link  smooth as={HashLink} to="#service" className="mr-3"><strong>Habitat</strong></Nav.Link>
                      <Nav.Link  smooth as={HashLink} to="#blog" className="mr-3"><strong>Locale</strong></Nav.Link>
                      <Nav.Link smooth as={HashLink} to='#reviews' className="mr-3"><strong>Costa</strong></Nav.Link>
                      <Nav.Link smooth as={HashLink} to='#reviews' className="mr-3"><strong>Company</strong></Nav.Link>
                      <Nav.Link  smooth as={HashLink} to="#contact"  className="mr-3"><strong>Contact</strong></Nav.Link>
                        
                     <Button as={Link} to='/login' variant="info" className='main-button'>Login</Button>
                        
                    </Nav>
                  </Navbar.Collapse>
             </Container>
          </Navbar>
    );
};

export default NavBar;