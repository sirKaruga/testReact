import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Ip from "../images/fig1.jpg";
import { Card, Row, Col, Container } from "react-bootstrap";

const More = () => {
  return (
    <Container style={{ background: "rgba(0,0,0,0.8)" }}>
      <Row>
        <Col>
          <Card>
            <Carousel>
              <Carousel.Item interval={1000}>
                <img
                  style={{ height: "30vh" }}
                  className="d-block w-100"
                  src={Ip}
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3>Fast connectivity</h3>
                  <p>Simple and easy to connect</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item interval={500}>
                <img
                  style={{ height: "30vh" }}
                  className="d-block w-100"
                  src={Ip}
                  alt="Third slide"
                />
                <Carousel.Caption>
                  <h3>Super UI</h3>
                  <p>With Simplicity, quality evolves</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  style={{ height: "30vh" }}
                  className="d-block w-100"
                  src={Ip}
                  alt="Third slide"
                />
                <Carousel.Caption>
                  <h3>Bootstrap in use</h3>
                  <p>This is a test app</p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Card>
        </Col>
      </Row>
      {/* end of carousel*/}
      <br />

      {/* end of moddle section*/}

      <Row style={{ background: "rgba(0,0,0,0.6)" }}>
        <Col md="4" sm="6">
          <Card style={{ background: "rgba(0,0,0,0.8)", color: "white" }}>
            <Card.Body>
              <Card.Title>
                <p>A good title</p>
              </Card.Title>
              <Card.Text>
                This is a sample item. <br />
                description of something goes here This is a sample item. <br />
                description of something goes here
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md="4" sm="6">
          <Card style={{ background: "rgba(0,0,0,0.8)", color: "white" }}>
            <Card.Body>
              <Card.Title>
                <p>A good title</p>
              </Card.Title>
              <Card.Text>
                This is a sample item. <br />
                description of something goes here This is a sample item. <br />
                description of something goes here
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md="4" sm="6">
          <Card style={{ background: "rgba(0,0,0,0.8)", color: "white" }}>
            <Card.Body>
              <Card.Title>
                <p>A good title</p>
              </Card.Title>
              <Card.Text>
                This is a sample item. <br />
                description of something goes here. This is a sample item.{" "}
                <br />
                description of something goes here
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <br />
    </Container>
  );
};

export default More;
