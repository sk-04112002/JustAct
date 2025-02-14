import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './JASection_1.css';

function JASection_1() {
  const [rightContent, setRightContent] = useState("Negotiation");
  const [activeItem, setActiveItem] = useState("Negotiation");

  const contentMap = {
    Negotiation: {
      text: "Solving a dispute through a process of bids and offers using technology, game theory, and AI/ML to enable a quick and amicable solution.",
      buttons: ["Negotiation Rules", "Model Clause"],
      links: ["https://justact.co.in/negotiation-rules","https://justact.co.in/negotiation-model-clause"]
    },
    Mediation: {
      text: "Resolution of a dispute through an iterative dialogue facilitated by a trained mediator with domain expertise to arrive at a settlement agreement.",
      buttons: ["Mediation Rules", "Model Clause"],
      links: ["https://justact.co.in/mediation-rules","https://justact.co.in/mediation-model-clause"]
    },
    Arbitration: {
      text: "For more complex disputes, Arbitration follows a process where parties may engage lawyers and advisors to put forth their case to a panel of one or more trained arbitrators to arrive at an “arbitral award”. Arbitration can be Fast track or Regular.",
      buttons: ["Arbitration Rules", "Model Clause"],
      links: ["https://justact.co.in/arbitration-rules","https://justact.co.in/arbitration-model-clause"]
    },
  };

  return (
    <Container fluid>
      <Row>
        <Col lg={6} className="left px-lg-5 py-lg-5 px-md-3 py-md-3 px-sm-2 py-sm-2">
          <p className="display-3 my-5 pt-md-3 pt-sm-2">Online Dispute Resolution</p>
          <div className="d-none d-lg-block">
            {Object.keys(contentMap).map((item) => (
              <p
                key={item}
                className={`h3 my-5 clickable ${activeItem === item ? 'active' : ''}`}
                onClick={() => { setRightContent(item); setActiveItem(item); }}
              >
                {item}
              </p>
            ))}
          </div>

          <div className="d-flex d-lg-none justify-content-between">
            {Object.keys(contentMap).map((item) => (
              <p
                key={item}
                className={`h3 my-4 clickable ${activeItem === item ? 'active' : ''}`}
                onClick={() => { setRightContent(item); setActiveItem(item); }}
              >
                {item}
              </p>
            ))}
          </div>
        </Col>

        <Col lg={6} className="right text-left px-lg-5 py-lg-5 px-md-3 py-md-3 px-sm-2 py-sm-2">
          <div className="h2 my-5 pt-lg-5 pt-md-3 pt-sm-2">{rightContent}</div>
          <div className="h4 my-4">{contentMap[rightContent].text}</div>

          <div className="mt-4">
            {contentMap[rightContent].buttons.map((btn, index) => (
              <a href={contentMap[rightContent].links[index]} target="_blank" rel="noopener noreferrer" key={index}>
                <Button className="m-2 left_btn">{btn}</Button>
              </a>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default JASection_1;
