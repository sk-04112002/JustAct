import React from 'react'
import { Row,Col, Container,Image } from 'react-bootstrap'
import './JAAbout.css'
import About_Image from '../../assets/Section_2_Image.webp'
import play from '../../assets/play.png'
function JAAbout() {
  return (
    <>
        <Container fluid className='about_container text-center'>
            <Container>
              <Row className='align-items-center h-100'>
                <Col lg={6} md={12} sm={12} className='order-lg-1 order-md-2 order-sm-2'>
                <Image src={About_Image} fluid></Image>
              </Col>
              <Col lg={6} md={12} sm={12} className='order-lg-2 order-md-1 order-sm-1'>
                  <div className="about_content d-flex flex-column justify-content-center align-items-center py-sm-5 py-md-5">
                  <div className="display-3 mb-5 text-light about_head">
                      How JustAct works
                  </div>
                  <div className="h3 text-light about_sidehead mb-5">
                  JustAct uses AI-driven mediation with a Game Theory algorithm and follows an aggregator model for arbitration and mediation through online case sourcing and partnerships.
                  </div>
                  <div className="d-flex">
                  <a href="https://www.youtube.com/watch?v=Ra5eZIe5_80" target='_blank'>
                    <button type='button' className='btn_1'><Image src={play}fluid className='play_logo'></Image>JustAct English</button>
                  </a>
                  <a href="https://www.youtube.com/watch?v=dsYc3_w0ln8" target='_blank'>
                    <button type='button' className='btn_2'><Image src={play}fluid className='play_logo'></Image>JustAct English</button>
                  </a>
                  </div>
                  </div>
                </Col>
              </Row>
            </Container>
        </Container>
    </>
  )
}

export default JAAbout