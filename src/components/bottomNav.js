import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import "./nav.css";

const bottomNav = () => {
  return (
    <div style={{ overflow: "hidden", fontSize: "1em" }}>
      <Card
        style={{
          background: "rgba(0,0,0,0.4)",
          padding: 0,
          margin: 0,
        }}
      >
        <Card.Body>
          <Row>
            <Col md="3" sm="6">
              <h5 style={{ color: "black" }} className="links">
                Contacts
              </h5>
              sales@wasilisha.com
              <ul>
                <a style={{ color: "purple" }} href="google.com">
                  +254708453589
                </a>
                <br />
                <a style={{ color: "purple" }} href="google.com">
                  Or: +254753338225
                </a>
              </ul>
            </Col>
          </Row>
          <Row style={{ background: "rgba(0,0,0,0.5)" }}>
            <Col style={{ color: "white" }}>© sir Karuga Works</Col>
          </Row>
        </Card.Body>
      </Card>
    </div>
  );
};

export default bottomNav;
