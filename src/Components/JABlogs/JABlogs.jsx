import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './JABlogs.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Blog_Mediation from '../../assets/Blog_Mediation.jpg';
import Blog_Mediation_2 from '../../assets/Blog_Mediation_2.jpg';
import Blog_Arbitration from '../../assets/Blog_Arbitration.jpg';

function JABlogs() {
  return (
    <Container>
      <div className="text-left my-5">
        <div className="blogs_head h2 my-5 text-center">Blogs</div>
        <Row className="justify-content-center">
          <Col lg={4} md={12} sm={12} className="d-flex justify-content-center my-3">
            <Card style={{ width: '25rem' }}>
              <Card.Img variant="top" src={Blog_Mediation} />
              <Card.Body>
                <Card.Title className="my-4">Mediation in Commercial Disputes</Card.Title>
                <Card.Text>
                Mediation is mandatory in commercial disputes to ease litigation delays, but challenges like bureaucratic hurdles and enforcement remain. It remains a viable alternative to court proceedings.

                </Card.Text>
                <a href="https://justact.co.in/blog/commercial-disputes" target='_blank'>
                <Button variant="primary" className='blog_btn'>Read More</Button>
                </a>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4} md={12} sm={12} className="d-flex justify-content-center my-3">
            <Card style={{ width: '25rem' }}>
              <Card.Img variant="top" src={Blog_Mediation_2} />
              <Card.Body>
                <Card.Title className="my-4">Mediation in Family Matters</Card.Title>
                <Card.Text>
                Mediation in family disputes fosters amicable resolutions, reduces litigation stress, and is encouraged by courts to ease the judicial backlog.

                </Card.Text>
                <a href="https://justact.co.in/blog/mediation-in-family" target='_blank'>
                <Button variant="primary" className='blog_btn'>Read More</Button>
                </a>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4} md={12} sm={12} className="d-flex justify-content-center my-3">
            <Card style={{ width: '25rem' }}>
              <Card.Img variant="top" src={Blog_Arbitration} />
              <Card.Body>
                <Card.Title className="my-4">Experts as Arbitrators</Card.Title>
                <Card.Text>
                Expert arbitrators enhance arbitration efficiency by providing domain-specific knowledge, improving clarity, precision, and speed in dispute resolution.
                </Card.Text>
                <a href="https://justact.co.in/blog/experts-as-arbitrators" target='_blank'>
                <Button variant="primary" className='blog_btn'>Read More</Button>
                </a>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </Container>
  );
}

export default JABlogs;
