import React from "react";
import Example from "../chart";
import { Col, Row, Card } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";

function home() {
  return (
    <>
      <Row>
        <Col sm="6" md="3">
          <Card>
            <h2 style={{ background: "rgba(0,0,0,0.6)" }}>
              <Icon.Chat style={{ color: "black" }} />
              <br /> Some Data
            </h2>
          </Card>
        </Col>
        <Col sm="6" md="3">
          <Card>
            <h2 style={{ background: "rgba(0,0,0,0.6)" }}>
              <Icon.Book style={{ color: "black" }} />
              <br /> More Data
            </h2>
          </Card>
        </Col>
        <Col sm="6" md="3">
          <Card>
            <h2 style={{ background: "rgba(0,0,0,0.6)" }}>
              <Icon.Funnel style={{ color: "black" }} />
              <br /> Much Data
            </h2>
          </Card>
        </Col>
        <Col sm="6" md="3">
          <Card>
            <h2 style={{ background: "rgba(0,0,0,0.6)" }}>
              <Icon.Flag style={{ color: "black" }} />
              <br /> All Data
            </h2>
          </Card>
        </Col>
      </Row>

      <br />

      <Row>
        <Col>
          <Card md="12" sm="12" style={{ background: "rgba(0,0,0,0.7)" }}>
            <Card.Body>
              <span>Business Data Workflow</span>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <br />
      <Row>
        <Col sm="12" md="6">
          Sales Trend
          <Example />
        </Col>
        <Col sm="12" md="6">
          Return
          <Example />
        </Col>
      </Row>

      <br />
      <Card style={{ background: "rgba(0,0,0,0.1)" }}>
        <Card.Body style={{ background: "rgba(0,0,0,0.5)" }}>
          <Row>
            <Col md="6" sm="6">
              <Card style={{ background: "grey" }}>
                <h3 style={{ background: "rgba(0,0,0,244)", color: "wheat" }}>
                  Presentation
                </h3>
                <Card.Body style={{ background: "rgba(0,0,0,0.4)" }}>
                  <ul>Some Important Info</ul>
                  <ul>Other Important Info</ul>
                </Card.Body>
              </Card>
            </Col>
            <Col md="6" sm="6">
              <Card style={{ background: "grey" }}>
                <h3 style={{ background: "rgba(0,0,0,244)", color: "wheat" }}>
                  Actions Possible
                </h3>
                <Card.Body style={{ background: "rgba(0,0,0,0.4)" }}>
                  <ul>Some Important Info</ul>
                  <ul>Other Important Info</ul>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </>
  );
}

export default home;
