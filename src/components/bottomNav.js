import React from "react";
import { Row, Col, Container, Card } from "react-bootstrap";
import "./nav.css";
import { NavLink } from "react-router-dom";

const bottomNav = () => {
  return (
    <div style={{ overflow: "hidden", fontSize: "1.2em" }}>
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
              <ul>
                <a className="links" href="google.com">
                  e-mail: sales@wasilisha.com
                </a>
              </ul>
              <ul>
                <a href="google.com">Contact: +254708453589</a>
              </ul>
            </Col>
            <Col md="3" sm="6">
              <h5 style={{ color: "black" }} className="links">
                Pages
              </h5>
              <ul>
                <NavLink
                  activeStyle={{ color: "red" }}
                  className="links"
                  to="/"
                >
                  Home
                </NavLink>
                <br />
                <NavLink
                  activeStyle={{ color: "red" }}
                  className="links"
                  to="/more"
                >
                  More
                </NavLink>
                <br />
                <NavLink
                  activeStyle={{ color: "red" }}
                  className="links"
                  to="/register"
                >
                  Register
                </NavLink>
                <br />
                <NavLink
                  activeStyle={{ color: "red" }}
                  className="links"
                  to="/about"
                >
                  About
                </NavLink>
              </ul>
            </Col>

            <Col md="3" sm="6">
              <h5 style={{ color: "black" }} className="links">
                About
              </h5>
              <ul>
                <a href="google.com">Its nice being here</a>
              </ul>
              <ul>
                <NavLink
                  activeStyle={{ color: "red" }}
                  className="links"
                  to="/shop/buy"
                >
                  my Shop
                </NavLink>
              </ul>
            </Col>
          </Row>
          <Row style={{ background: "rgba(0,0,0,0.5)" }}>
            <Col style={{ color: "white" }}>
              Designed and Developed by sir Karuga
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </div>
  );
};

export default bottomNav;
