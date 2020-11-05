import React from "react";
import { Card, Row, Col, Nav } from "react-bootstrap";
import * as Icons from "react-bootstrap-icons";
import DashboardNavbar from "./dashboardNavbar";
import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Switch,
} from "react-router-dom";
import Home from "./dashboardPages/homePage";
import Items from "./dashboardPages/itemsPage";

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
      <Router>
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
                  <Nav defaultActiveKey="/home" className="flex-column">
                    <NavLink
                      activeStyle={{ color: "#cc1738" }}
                      style={{ color: "#8C0073", padding: "0.5em" }}
                      to="/home"
                    >
                      <Icons.Table />
                      &nbsp;
                      <b>Data-Visuals</b>
                    </NavLink>
                    <NavLink
                      activeStyle={{ color: "#cc1738" }}
                      style={{ color: "#8C0073", padding: "0.5em" }}
                      to="/items"
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
                <Switch>
                  <Route path="/dashboard" component={Home} />
                  <Route path="/home" component={Home} />
                  <Route path="/items" component={Items} />
                </Switch>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Router>
    </div>
  );
}

export default dashboard;
