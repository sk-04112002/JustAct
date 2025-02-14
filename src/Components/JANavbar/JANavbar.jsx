import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from '../../assets/Just_Act_Logo.jpg';
import './JANavbar.css'
import { Image } from 'react-bootstrap';

function JANavbar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home"><Image src={Logo} style={{height:"4rem",width:"4rem"}}></Image></Navbar.Brand>
        <div className="d-lg-none d-flex gap-2 ms-auto">
          <button type='button' className='btn btn_sm'>Login</button>
          <button type='button' className='btn btn_sm'>Sign Up</button>
        </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
          <Nav>
            <NavDropdown title="Resources" id="basic-nav-dropdown">
              <NavDropdown.Item href="https://justact.co.in/resources/blogs" target='_blank'>
                Blogs
             </NavDropdown.Item>
             <NavDropdown.Divider />
              <NavDropdown.Item href="https://justact.co.in/resources/webinar-videos" target='_blank'>Webinars</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="https://justact.co.in/resources/model-clauses" target='_blank'>
                Model Clauses
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Neutrals" id="basic-nav-dropdown">
              <NavDropdown.Item href="https://justact.co.in/neutral/arbitrators" target='_blank'>
                Arbitrators
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="https://justact.co.in/neutral/mediators" target='_blank'>Mediators</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="https://neutral.justact.co.in/" target='_blank'>
                Login as Neutral
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Training" id="basic-nav-dropdown">
              <NavDropdown.Item href="https://justact.co.in/training/corporate-short-programme" target='_blank'>
                Corporate Short Training
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="https://justact.co.in/training/mediation-training-programme" target='_blank'>Mediator Training Programme</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="https://justact.co.in/training/world-of-mediation" target='_blank'>
                World of Mediation
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="About Us" id="basic-nav-dropdown">
              <NavDropdown.Item href="https://justact.co.in/about-us" target='_blank'>
                About JustAct
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="https://justact.co.in/about-us#our-advantages" target='_blank'>Our Advantages</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="https://justact.co.in/about-us#how-it-works" target='_blank'>
                How JustAct Works
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="https://justact.co.in/about-us#our-values" target='_blank'>
                Our Values
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="https://justact.co.in/about-us#board-of-directors" target='_blank'>Board of Directors</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="https://justact.co.in/about-us#management-team" target='_blank'>
                Management Team
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="https://justact.co.in/about-us#partnerships" target='_blank'>
                Our Partners
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="https://justact.co.in/terms-and-conditions" target='_blank'>Terms And Conditions</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="https://justact.co.in/privacy-policy" target='_blank'>Privacy Policy</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <div className="d-none d-lg-flex gap-2 mx-4">
          <a href="https://justact.co.in/login" target='_blank'>
          <button type='button' className='btn btn_lg'>Login</button>
          </a>
          <a href="https://justact.co.in/signup" target='_blank'>
          <button type='button' className='btn btn_lg'>Sign Up</button>
          </a>
        </div>
      </Container>
    </Navbar>
  );
}

export default JANavbar;