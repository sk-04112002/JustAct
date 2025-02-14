import React from 'react'
import { Row, Col, Container, Image } from 'react-bootstrap'
import './JAFooter.css'
import JALogo_White from '../../assets/JustAct_Logo_White.png'

function JAFooter() {
  return (
    <>
      <Container fluid className='footer_section'>
        <Container>
          <Row>
            <Col lg={4} md={12} sm={12}>
              <div className="text-left my-5">
                <Image src={JALogo_White} fluid className='footer_logo mb-3'></Image>
                <div className="footer_address h2 mb-lg-5">T4, 7th street, VSI Estate Phase 2,
                  Thiruvanmiyur, Chennai, Tamil Nadu 600041, India</div>
                  <div className="socials d-flex justify-content-start gap-5">
                  <a href="https://www.linkedin.com/company/justact/" target='_blank'><i className="bi bi-linkedin s_icon"></i></a>
                  <a href="https://www.youtube.com/channel/UCWEn7whMx2ZX10OUzTeYvhA" target='_blank'>
                  <i className="bi bi-youtube s_icon"></i>
                  </a>
                  <a href="https://www.instagram.com/_just_act_/" target='_blank'><i className="bi bi-instagram s_icon"></i></a>
                  <a href="https://play.google.com/store/apps/details?id=stouch.os.justact&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1&pli=1" target='_blank'><i className="bi bi-google-play s_icon"></i></a>
                  </div>
                
              </div>
            </Col>
            <Col lg={2} md={6} sm={6} xs={6}>
              <div className="d-flex flex-column justify-content-center mt-5 text-light">
                <div className="h5 mb-3">Resources</div>
                <a href="https://justact.co.in/resources/blogs" target="_blank" className="h6 footer_link mb-3">Blogs</a>
                <a href="https://justact.co.in/resources/webinar-videos" target="_blank" className="h6 footer_link mb-3">Webinars</a>
                <a href="https://justact.co.in/resources/model-clauses" target="_blank" className="h6 footer_link">Model Clauses</a>
              </div>
            </Col>
            <Col lg={2} md={6} sm={6} xs={6}>
              <div className="d-flex flex-column justify-content-center mt-5 text-light">
                <div className="h5 mb-3">Neutrals</div>
                <a href="https://justact.co.in/neutral/arbitrators" target="_blank" className="h6 footer_link mb-3">Arbitrators</a>
                <a href="https://justact.co.in/neutral/mediators" target="_blank" className="h6 footer_link mb-3">Mediators</a>
                <a href="https://neutral.justact.co.in/" target="_blank" className="h6 footer_link">Login as Neutral</a>
              </div>
            </Col>
            <Col lg={2} md={6} sm={6} xs={6}>
              <div className="d-flex flex-column justify-content-center mt-5 text-light">
                <div className="h5 mb-3">Training</div>
                <a href="https://justact.co.in/training/corporate-short-programme" target="_blank" className="h6 footer_link mb-3">Corporate Short Training</a>
                <a href="https://justact.co.in/training/mediation-training-programme" target="_blank" className="h6 footer_link mb-3">Mediator Training Programme</a>
                <a href="https://justact.co.in/training/world-of-mediation" target="_blank" className="h6 footer_link">World of Mediation</a>
              </div>
            </Col>
            <Col lg={2} md={6} sm={6} xs={6}>
              <div className="d-flex flex-column justify-content-center mt-5 text-light">
                <div className="h5 mb-3">About Us</div>
                <a href="https://justact.co.in/about-us" target="_blank" className="h6 footer_link mb-3">About JustAct</a>
                <a href="https://justact.co.in/about-us#our-advantages" target="_blank" className="h6 footer_link mb-3">Our Advantages</a>
                <a href="https://justact.co.in/about-us#how-it-works" target="_blank" className="h6 footer_link">How JustAct Works</a>
                <a href="https://justact.co.in/about-us#our-values" target="_blank" className="h6 footer_link">Our Values</a>
                <a href="https://justact.co.in/about-us#board-of-directors" target="_blank" className="h6 footer_link">Board of Directors</a>
                <a href="https://justact.co.in/about-us#management-team" target="_blank" className="h6 footer_link">Management Team</a>
                <a href="https://justact.co.in/about-us#partnerships" target="_blank" className="h6 footer_link">Our Partners</a>
                <a href="https://justact.co.in/terms-and-conditions" target="_blank" className="h6 footer_link">Terms And Conditions</a>
                <a href="https://justact.co.in/privacy-policy" target="_blank" className="h6 footer_link">Privacy Policy</a>
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg={4} md={12} sm={12}>
            <p className='py-5 text-light mb-0'>Copyright &copy; 2025 Lex Carta Private Limited</p>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  )
}

export default JAFooter
