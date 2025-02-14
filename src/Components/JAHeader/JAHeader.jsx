import React from 'react'
import Header_Image from '../../assets/JustAct_Header.png'
import { Container,Row,Col,Image } from 'react-bootstrap'
import './JAHeader.css'
function JAHeader() {
  return (
    <>
        <Container>
            <Row>
                <Col lg={4}>
                    <p className='display-4 fw-bold head_two my-5 head_1'><span className='display-1 fw-bold r_head'>r</span>eady <span className='display-1 fw-bold r_head'>r</span>elaxed <span className='display-1 fw-bold r_head'>r</span>esolution</p>
                    <h4 className='head_2'>JustAct is an <span className='ccolor'>Online Dispute Resolution </span>platform offered by Lex Carta Private Limited and is set up by lawyers and professionals to disrupt the way disputes are resolved today.</h4>
                </Col>
                <Col lg={8}>
                    <Image src={Header_Image} fluid className='my-5'></Image>
                </Col>
            </Row>
        </Container>
    </>
  )
}

export default JAHeader