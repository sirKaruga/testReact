import React from "react";
import { Row, Col, Carousel, Card } from "react-bootstrap";

export default function topCarouselRow() {
  return (
    <div className="d-none d-md-inline">
      <Row>
        <Col sm="12" md="2">
          <Card>this is small</Card>
        </Col>

        <Col sm="12" md="8">
          <Card>this is big</Card>
        </Col>

        <Col sm="12" md="2">
          <Card>this is small</Card>
        </Col>
      </Row>
    </div>
  );
}
