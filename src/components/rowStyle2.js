import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import Item from "../components/item";
import { connect } from "react-redux";

function rowStyle2(props) {
  console.log(props.returnedItem);

  return (
    <Row style={{ overflow: "hidden" }}>
      <Col md="4" sm="12" xsm="12">
        <Card>
          <Card.Header>Fashioon and Dressing</Card.Header>
          <Row>
            <Col sm="6" md="6" xsm="6">
              <Item
                id={props.returnedItem.shopItems[0].idindex}
                itemName={props.returnedItem.shopItems[0].itemname}
                price={props.returnedItem.shopItems[0].price}
                itemPicture={props.returnedItem.shopItems[0].itempics}
              />
            </Col>

            <Col sm="6" md="6" xsm="6">
              <Item
                id={props.returnedItem.shopItems[1].idindex}
                itemName={props.returnedItem.shopItems[1].itemname}
                price={props.returnedItem.shopItems[1].price}
                itemPicture={props.returnedItem.shopItems[1].itempics}
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
                id={props.returnedItem.shopItems[0].idindex}
                itemName={props.returnedItem.shopItems[0].itemname}
                price={props.returnedItem.shopItems[0].price}
                itemPicture={props.returnedItem.shopItems[0].itempics}
              />
            </Col>

            <Col sm="6" md="6" xsm="6">
              <Item
                id={props.returnedItem.shopItems[1].idindex}
                itemName={props.returnedItem.shopItems[1].itemname}
                price={props.returnedItem.shopItems[1].price}
                itemPicture={props.returnedItem.shopItems[1].itempics}
              />
            </Col>
          </Row>
        </Card>
      </Col>

      <Col md="4" sm="12" xsm="12">
        <Card>
          <Card.Title>Fashioon and Dressing</Card.Title>
          <Row>
            <Col sm="6" md="6" xsm="6">
              <Item
                id={props.returnedItem.shopItems[0].idindex}
                itemName={props.returnedItem.shopItems[0].itemname}
                price={props.returnedItem.shopItems[0].price}
                itemPicture={props.returnedItem.shopItems[0].itempics}
              />
            </Col>

            <Col sm="6" md="6" xsm="6">
              <Item
                id={props.returnedItem.shopItems[1].idindex}
                itemName={props.returnedItem.shopItems[1].itemname}
                price={props.returnedItem.shopItems[1].price}
                itemPicture={props.returnedItem.shopItems[1].itempics}
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

export default connect(mapStateToProps)(rowStyle2);
