import React from "react";
//import BarChart from "../barChart";
import { Col, Row, Card, Button } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";

function items() {
  return (
    <>
      <Row>
        <Col sm="6" md="3">
          Smple Dasboard Tools
        </Col>
        <Col sm="6" md="3"></Col>
        <Col sm="6" md="3"></Col>
        <Col sm="6" md="3">
          <Button className="pull-right">Generate Report</Button>
        </Col>
      </Row>
      <br />
      <Row style={{ background: "rgba(0,0,0,0.6)" }}>
        <Col md="6" sm="12">
          <Card style={{ background: "rgba(0,0,0,0.6)" }}>
            Sales success Rate
            {/* <BarChart /> */}
          </Card>
        </Col>
        <Col md="3" sm="12">
          <Card>
            <Card.Body style={{ background: "rgba(0,0,0,0.6)" }}>
              <h1>
                <Icon.Phone />
                <br />
                Media <br /> Actions
              </h1>
            </Card.Body>
            <Card.Body style={{ background: "rgba(0,0,0,20)" }}>
              <Icon.Flag /> Advertise products
              <br /> Media survey
              <br />
              <ul>this list</ul>
              <Button variant="primary">Direct Media</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md="3" sm="12">
          <Card>
            <Card.Body style={{ background: "rgba(0,0,0,20)" }}>
              <h1>
                <Icon.Phone />
                <br />
                Chat <br /> Actions
              </h1>
            </Card.Body>
            <Card.Body style={{ background: "rgba(0,0,0,0.6)" }}>
              <Icon.Chat /> Advertise products
              <br /> Media survey
              <br />
              <ul>this list</ul>
              <Button variant="primary">Direct Media</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <br />

      <Row>
        <Col md="12" sm="12" style={{ background: "rgba(0,0,0,0.4)" }}>
          <Row>
            <Col md="6" sm="6" style={{ padding: "1em" }}>
              <Card style={{ background: "rgba(0,0,0,1)" }}>
                <Card.Title
                  style={{ background: "rgb(91, 32, 0)", padding: "1em" }}
                >
                  Dashboard Descriptions
                </Card.Title>
                <Card.Body>
                  <ul>Properties</ul>
                  <ul>sites</ul>
                  <ul>Comparison</ul>
                  <ul>Contacts</ul>
                </Card.Body>
              </Card>
            </Col>

            <Col md="6" sm="6" style={{ padding: "1em" }}>
              <Card style={{ background: "rgba(0,0,0,1)" }}>
                <Card.Title
                  style={{
                    color: "black",
                    background: "rgb(198, 202, 179)",
                    padding: "1em",
                  }}
                >
                  Optinal Descriptions
                </Card.Title>
                <Card.Body Style={{ background: "rgb(182, 0, 0)" }}>
                  <ul>items</ul>
                  <ul>sites</ul>
                  <ul>Comparison</ul>
                  <ul>Contacts</ul>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
      <br />
      <Row>
        <Col>
          <Card style={{ background: "rgba(0,0,0,0.5)", padding: "2em" }}>
            Item checked
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default items;
