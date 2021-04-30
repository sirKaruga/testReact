import React from "react";
import { Card, Row, Col, Carousel } from "react-bootstrap";
import { connect } from "react-redux";
import Item from "../components/item";
import windowSize from "../components/windowSize";

function rowStyle3(props) {
  const cwindow = windowSize().width;
  var display = "inline";
  var display2 = "inline";
  var display3 = "inline";

  function between(x, min, max) {
    return x >= min && x <= max;
  }
  if (between(cwindow, 0, 1387)) {
    display = "none";
  }
  if (between(cwindow, 0, 1225)) {
    display2 = "none";
  }
  if (between(cwindow, 0, 774)) {
    display3 = "none";
  }

  return (
    <Row>
      <Col md="12" sm="12" xsm="12">
        <Card style={{ minHeight: "inhetit" }}>
          <Card.Header
            style={{ background: "orange", color: "white", fontSize: "1em" }}
          >
            <Row>
              <Col style={{ textAlign: "left" }}>
                <b>Fashion and Dressing</b>
              </Col>
              <Col style={{ textAlign: "right" }}>
                <b>More...</b>
              </Col>
            </Row>
          </Card.Header>
          <Row style={{ minHeight: "inhetit" }}>
            <Col vsm="2">
              <Item
                id={props.returnedItem.shopItems[0].idindex}
                itemName={props.returnedItem.shopItems[0].itemname}
                price={props.returnedItem.shopItems[0].price}
                itemPicture={props.returnedItem.shopItems[0].itempics}
              />
            </Col>

            <Col vsm="2">
              <Item
                id={props.returnedItem.shopItems[1].idindex}
                itemName={props.returnedItem.shopItems[1].itemname}
                price={props.returnedItem.shopItems[1].price}
                itemPicture={props.returnedItem.shopItems[1].itempics}
              />
            </Col>

            <Col vsm="2">
              <Item
                id={props.returnedItem.shopItems[0].idindex}
                itemName={props.returnedItem.shopItems[0].itemname}
                price={props.returnedItem.shopItems[0].price}
                itemPicture={props.returnedItem.shopItems[0].itempics}
              />
            </Col>

            <Col vsm="2">
              <Item
                id={props.returnedItem.shopItems[0].idindex}
                itemName={props.returnedItem.shopItems[0].itemname}
                price={props.returnedItem.shopItems[0].price}
                itemPicture={props.returnedItem.shopItems[0].itempics}
              />
            </Col>

            <Col style={{ display: display2 }} vsm="2">
              <Item
                id={props.returnedItem.shopItems[1].idindex}
                itemName={props.returnedItem.shopItems[1].itemname}
                price={props.returnedItem.shopItems[1].price}
                itemPicture={props.returnedItem.shopItems[1].itempics}
              />
            </Col>

            <Col style={{ display: display }} vsm="2">
              <Item
                id={props.returnedItem.shopItems[0].idindex}
                itemName={props.returnedItem.shopItems[0].itemname}
                price={props.returnedItem.shopItems[0].price}
                itemPicture={props.returnedItem.shopItems[0].itempics}
              />
            </Col>
          </Row>
        </Card>
      </Col>
    </Row>
  );
}

function mapStateToProps(props) {
  return {
    returnedItem: props,
  };
}

export default connect(mapStateToProps)(rowStyle3);
