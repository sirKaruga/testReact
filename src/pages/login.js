import React from "react";
import { Row, Col, Card, Container } from "react-bootstrap";

const Login = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${require("../images/city.jpg")})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
        backgroundColor: "brown",
        overflow: "hidden",
      }}
    >
      <Row>
        <div
          style={{
            height: "70vh",
            color: "white",
            background: "rgba(0,0,0,0.5)",
            paddingTop: "3em",
            float: "center",
            width: "100vw",
          }}
        >
          <Container>
            <h1>this is content item</h1>
            <p>the trvavel be safe when yout profie is okey</p>
          </Container>
        </div>
      </Row>
      <Row>
        <Col sm="12" md="4">
          <Card style={{ background: "rgba(0,0,0,0.8)", color: "#ffffff" }}>
            <Card.Header stylw={{ background: "black" }}>
              Services we offer
            </Card.Header>
            <Card.Body>
              <p>
                Travelling is among our best. With the suit of our company, YOU
                ARE SORTED
              </p>
              <p>Other unlimited travels are among the best</p>
            </Card.Body>
          </Card>
        </Col>
        <Col sm="12" md="4">
          <Card>
            <Card.Header>Services we offer</Card.Header>
            <Card.Body>
              <p>
                Travelling is among our best. With the suit of our company, YOU
                ARE SORTED
              </p>
              <p>Other unlimited travels are among the best</p>
            </Card.Body>
          </Card>
        </Col>
        <Col sm="12" md="4">
          <Card style={{ background: "rgba(0,0,0,0.8)", color: "#ffffff" }}>
            <Card.Header>Services we offer</Card.Header>
            <Card.Body>
              <p>
                Travelling is among our best. With the suit of our company, YOU
                ARE SORTED
              </p>
              <p>Other unlimited travels are among the best</p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Login;
