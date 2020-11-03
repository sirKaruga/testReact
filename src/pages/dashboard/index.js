import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import DashboardNavbar from "./dashboardNavbar";

function dashboard() {
  return (
    <div
      style={{
        background: "#777B7E",
        minHeight: "100vh",
        color: "white",
        overflow: "hidden",
      }}
    >
      <DashboardNavbar />
      <Row>
        <Col xsm="12" sm="12" md="3" lg="3">
          <Card
            style={{
              background: "rgba(0,0,0,0.5)",
              minHeight: "99vh",
              color: "white",
            }}
          >
            <Card.Body>
              <li>something</li>
              <li>something</li>
              <li>something</li>
            </Card.Body>
          </Card>
        </Col>

        <Col xsm="12" sm="12" md="9" lg="9">
          <Card
            style={{
              background: "rgba(0,0,0,0.3)",
              minHeight: "100vh",
              color: "white",
            }}
          >
            <Card.Body>
              <li>something</li>
              <li>something</li>
              <li>something</li>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default dashboard;
