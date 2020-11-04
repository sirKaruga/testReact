import React from "react";
import { Card, Row, Col, Nav } from "react-bootstrap";
import * as Icons from "react-bootstrap-icons";
import DashboardNavbar from "./dashboardNavbar";
import { BrowserRouter as Router, NavLink } from "react-router-dom";
import LineChartExample from "./chart";

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
            <br />
            <Card>
              <Card.Title
                style={{ background: "rgba(0,0,0,0.5)", paddingTop: "0.5em" }}
              >
                My Components
              </Card.Title>
              <Card.Body style={{ background: "rgba(0,0,0,0.5)" }}>
                <Router>
                  <Nav defaultActiveKey="/home" className="flex-column">
                    <NavLink
                      activeStyle={{ color: "#cc1738" }}
                      style={{ color: "#8C0073", padding: "0.5em" }}
                      to="/myShop"
                    >
                      <Icons.Table />
                      &nbsp;
                      <b>Data-Visuals</b>
                    </NavLink>
                    <NavLink
                      activeStyle={{ color: "#cc1738" }}
                      style={{ color: "#8C0073", padding: "0.5em" }}
                      to="/myShop"
                      eventKey="link-1"
                    >
                      <Icons.Bucket />
                      &nbsp;
                      <b>More-Items</b>
                    </NavLink>
                    <NavLink
                      activeStyle={{ color: "#cc1738" }}
                      style={{ color: "#8C0073", padding: "0.5em" }}
                      to="/myShop"
                      eventKey="link-2"
                    >
                      <Icons.Calendar />
                      &nbsp;
                      <b>Calendars</b>
                    </NavLink>
                    <NavLink
                      activeStyle={{ color: "#cc1738" }}
                      style={{ color: "#8C0073", padding: "0.5em" }}
                      to="/myShop"
                      eventKey="disabled"
                      disabled
                    >
                      <Icons.Cup />
                      &nbsp;
                      <b>Products</b>
                    </NavLink>
                  </Nav>
                </Router>
              </Card.Body>
            </Card>
            <br />

            <Card>
              <Card.Title
                style={{ background: "rgba(0,0,0,0.5)", paddingTop: "0.5em" }}
              >
                My Pages
              </Card.Title>
              <Card.Body style={{ background: "rgba(0,0,0,0.5)" }}>
                <Router>
                  <Nav defaultActiveKey="/home" className="flex-column">
                    <NavLink
                      activeStyle={{ color: "#cc1738" }}
                      style={{ color: "#8C0073", padding: "0.5em" }}
                      to="/myShop"
                    >
                      <Icons.Cart />
                      &nbsp;
                      <b>Shop-Item</b>
                    </NavLink>
                    <NavLink
                      activeStyle={{ color: "#cc1738" }}
                      style={{ color: "#8C0073", padding: "0.5em" }}
                      to="/myShop"
                      eventKey="link-1"
                    >
                      <Icons.Code />
                      &nbsp;
                      <b>App-Item</b>
                    </NavLink>
                    <NavLink
                      activeStyle={{ color: "#cc1738" }}
                      style={{ color: "#8C0073", padding: "0.5em" }}
                      to="/myShop"
                      eventKey="link-2"
                    >
                      <Icons.Calendar />
                      &nbsp;
                      <b>Calendars</b>
                    </NavLink>
                    <NavLink
                      activeStyle={{ color: "#cc1738" }}
                      style={{ color: "#8C0073", padding: "0.5em" }}
                      to="/myShop"
                      eventKey="disabled"
                      disabled
                    >
                      <Icons.Flag />
                      &nbsp;
                      <b>Media-Na</b>
                    </NavLink>
                  </Nav>
                </Router>
              </Card.Body>
            </Card>
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
              <LineChartExample />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default dashboard;
