import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import Item from "../components/item";
import myObject from "../components/object";

function rowStyle2(props) {
  return (
    <Row style={{ overflow: "hidden" }}>
      <Col md="4" sm="12">
        <Card>
          <Card.Title>Fashioon and Dressing</Card.Title>
          <Row>
            <Col sm="6" md="6" xsm="6">
              <Item
                dispatcher={props}
                itemName="my Item name"
                price="3000"
                itemPicture={require("../images/tv1.jpg")}
              />
            </Col>

            <Col sm="6" md="6" xsm="6">
              <Item
                itemName="my Item name"
                price="3000"
                itemPicture={require("../images/tv1.jpg")}
              />
            </Col>
          </Row>
        </Card>
      </Col>
      <Col md="4" sm="12">
        <Card>
          <Card.Title>Fashioon and Dressing</Card.Title>
          <Row>
            <Col sm="6" md="6" xsm="6">
              <Item
                itemName="my Item name"
                price="3000"
                itemPicture={require("../images/tv1.jpg")}
              />
            </Col>

            <Col sm="6" md="6" xsm="6">
              <Item
                itemName="my Item name"
                price="3000"
                itemPicture={require("../images/tv1.jpg")}
              />
            </Col>
          </Row>
        </Card>
      </Col>

      <Col md="4" sm="12">
        <Card>
          <Card.Title>Fashioon and Dressing</Card.Title>
          <Row>
            <Col sm="6" md="6" xsm="6">
              <Item
                itemName="my Item name"
                price="3000"
                itemPicture={require("../images/tv1.jpg")}
              />
            </Col>

            <Col sm="6" md="6" xsm="6">
              <Item
                itemName="my Item name"
                price="3000"
                itemPicture={require("../images/tv1.jpg")}
              />
            </Col>
          </Row>
        </Card>
      </Col>
    </Row>
  );
}

export default rowStyle2;
