import React from "react";
import { Card, Container, Button, Col } from "react-bootstrap";

export default function ShopItem({ price, description, imaeSrc }) {
  return (
    <Col sm="6" md="6" xsm="6" className="col-6 col-sm-6 col-xsm-6">
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
          src={imageSrc}
        />
        <Card.Body>
          <Card.Text>
            <span>{description}</span>
            <br />
            <b>{price}</b>
            <br />
          </Card.Text>
          <Button variant="primary">Buy</Button>
        </Card.Body>
      </Card>
    </Col>
  );
}
