import React from "react";
import { Card, Row, Col, Button } from "react-bootstrap";

import Item from "../components/item";
import tv1 from "../images/tv1.jpg";
import tv2 from "../images/tv2.jpg";

export default function rowStyle1() {
  return (
    <Row>
      <Col md="12" sm="12" xsm="12">
        <Card>
          <Card.Title>Fashioon and Dressing</Card.Title>
          <Row>
            <Col md="2" sm="6" xsm="6">
              <Card
                style={{
                  marginLeft: 0,
                  marginRight: 0,
                  paddingLeft: 0,
                  paddingRight: 0,
                }}
              >
                <Card.Img
                  style={{ minHeight: "7em", maxHeight: "7em" }}
                  variant="top"
                  src={tv1}
                />
                <Card.Body>
                  <Card.Text>
                    <span>High heel fashion Ladies shoes</span>
                    <br />
                    <b>Ksh. 1900=/</b>
                    <br />
                  </Card.Text>
                  <Button variant="primary">Buy</Button>
                </Card.Body>
              </Card>
            </Col>

            <Col md="2" sm="6" xsm="6">
              <Card
                style={{
                  marginLeft: 0,
                  marginRight: 0,
                  paddingLeft: 0,
                  paddingRight: 0,
                }}
              >
                <Card.Img
                  style={{ minHeight: "7em", maxHeight: "7em" }}
                  variant="top"
                  src={tv2}
                />
                <Card.Body>
                  <Card.Text>
                    <span>High heel fashion Ladies shoes</span>
                    <br />
                    <b>Ksh. 1900=/</b>
                    <br />
                  </Card.Text>
                  <Button variant="primary">Buy</Button>
                </Card.Body>
              </Card>
            </Col>

            <Col md="2" sm="6" xsm="6">
              <Card
                style={{
                  marginLeft: 0,
                  marginRight: 0,
                  paddingLeft: 0,
                  paddingRight: 0,
                }}
              >
                <Card.Img
                  style={{ minHeight: "7em", maxHeight: "7em" }}
                  variant="top"
                  src={tv2}
                />
                <Card.Body>
                  <Card.Text>
                    <span>High heel fashion Ladies shoes</span>
                    <br />
                    <b>Ksh. 1900=/</b>
                    <br />
                  </Card.Text>
                  <Button variant="primary">Buy</Button>
                </Card.Body>
              </Card>
            </Col>

            <Col md="2" sm="6" xsm="6">
              <Card
                style={{
                  marginLeft: 0,
                  marginRight: 0,
                  paddingLeft: 0,
                  paddingRight: 0,
                }}
              >
                <Card.Img
                  style={{ minHeight: "7em", maxHeight: "7em" }}
                  variant="top"
                  src={tv2}
                />
                <Card.Body>
                  <Card.Text>
                    <span>High heel fashion Ladies shoes</span>
                    <br />
                    <b>Ksh. 1900=/</b>
                    <br />
                  </Card.Text>
                  <Button variant="primary">Buy</Button>
                </Card.Body>
              </Card>
            </Col>

            <Col md="2" sm="6" xsm="6">
              <Card
                style={{
                  marginLeft: 0,
                  marginRight: 0,
                  paddingLeft: 0,
                  paddingRight: 0,
                }}
              >
                <Card.Img
                  style={{ minHeight: "7em", maxHeight: "7em" }}
                  variant="top"
                  src={tv2}
                />
                <Card.Body>
                  <Card.Text>
                    <span>High heel fashion Ladies shoes</span>
                    <br />
                    <b>Ksh. 1900=/</b>
                    <br />
                  </Card.Text>
                  <Button variant="primary">Buy</Button>
                </Card.Body>
              </Card>
            </Col>

            <Col md="2" sm="6" xsm="6">
              <Card
                style={{
                  marginLeft: 0,
                  marginRight: 0,
                  paddingLeft: 0,
                  paddingRight: 0,
                }}
              >
                <Card.Img
                  style={{ minHeight: "7em", maxHeight: "7em" }}
                  variant="top"
                  src={tv2}
                />
                <Card.Body>
                  <Card.Text>
                    <span>High heel fashion Ladies shoes</span>
                    <br />
                    <b>Ksh. 1900=/</b>
                    <br />
                  </Card.Text>
                  <Button variant="primary">Buy</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Card>
      </Col>
    </Row>
  );
}
