import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import './JASection_2.css';
import Mediator_1 from '../../assets/Mediator_1.jpg';
import Mediator_2 from '../../assets/Mediator_2.jpg';
import Mediator_3 from '../../assets/Mediator_3.jpg';

function JASection_2() {
  return (
    <Container>
      <div className="text-center">
        <div className="head h2 my-5">Our Mediators</div>
      </div>
      <Row className="justify-content-center">
        <Col lg={3} md={12} sm={12} className="d-flex justify-content-center my-3">
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={Mediator_1} className="card_image" />
            <Card.Body>
              <Card.Title>A J Jawad</Card.Title>
              <Card.Text>Mediator since 2007. Certified mediator with the ADR Group, UK.</Card.Text>
            </Card.Body>
            <Card.Body>
              <Card.Link href="https://justact.co.in/neutral/mediators/7" className="card_link" target='_blank'>
                <p className="card_btn">See More</p>
              </Card.Link>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={3} md={12} sm={12} className="d-flex justify-content-center my-3">
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={Mediator_2} className="card_image" />
            <Card.Body>
              <Card.Title>ATUL KUMAR RAWAT</Card.Title>
              <Card.Text>COMPANY SECRETARY AND MANAGER LEGAL</Card.Text>
            </Card.Body>
            <Card.Body>
              <Card.Link href="https://justact.co.in/neutral/mediators/43" className="card_link" target='_blank'>
                <p className="card_btn">See More</p>
              </Card.Link>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={3} md={12} sm={12} className="d-flex justify-content-center my-3">
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={Mediator_3} className="card_image" />
            <Card.Body>
              <Card.Title>Anees Jawad</Card.Title>
              <Card.Text>
                Accredited mediator with TNMCC and a certified mediator with ADR ODR International.
              </Card.Text>
            </Card.Body>
            <Card.Body>
              <Card.Link href="https://justact.co.in/neutral/mediators/23" className="card_link" target='_blank'>
                <p className="card_btn">See More</p>
              </Card.Link>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={3} md={12} sm={12} className="my-3">
          <div className="other_mediators d-flex flex-column align-items-center justify-content-center h-100 p-lg-0 p-5">
            <div className="h3 text-center mb-3">
            Meet our panel of Mediators and Arbitrators.
            </div>
            <a href="https://justact.co.in/neutral/mediators" target='_blank'>
              <button type='button' className='section_2_btn'>Browse</button>
            </a>
          </div>
        </Col>



      </Row>
    </Container>
  );
}

export default JASection_2;
