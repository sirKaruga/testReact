import React from "react";
import Example from "./chart";
import { Col, Row } from "react-bootstrap";
import { Switch, BrowserRouter as Route } from "react-router-dom";

const Home = () => {
  return (
    <Row>
      <Col>
        <Example />
      </Col>
      <Col>
        <Example />
      </Col>
    </Row>
  );
};
export default function dashboardPages() {
  return (
    <div>
      <Home />

      <Route path="/tryi" component={Home} />
    </div>
  );
}
