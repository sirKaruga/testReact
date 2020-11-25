import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import Item from "../components/item";
import { connect } from "react-redux";

function rowStyle2(props) {
  console.log(props.returnedItem);

  return (
    <Row style={{ overflow: "hidden" }}>
      <Col style={{ paddingRight: 0 }} md="4" sm="4" xsm="4">
        <Card style={{ paddingLeft: 0, paddingRight: 0 }}>
          <Row>
            <Col
              style={{ paddingLeft: 0, paddingRight: 0 }}
              sm="6"
              md="6"
              xsm="6"
            >
              <Item
                style={{ paddingLeft: 0, paddingRight: 0 }}
                id={props.returnedItem.shopItems[0].idindex}
                itemName={props.returnedItem.shopItems[0].itemname}
                price={props.returnedItem.shopItems[0].price}
                itemPicture={props.returnedItem.shopItems[0].itempics}
              />
            </Col>

            <Col
              style={{ paddingLeft: 0, paddingRight: 0 }}
              sm="6"
              md="6"
              xsm="6"
            >
              <Item
                style={{ paddingLeft: 0, paddingRight: 0 }}
                id={props.returnedItem.shopItems[1].idindex}
                itemName={props.returnedItem.shopItems[1].itemname}
                price={props.returnedItem.shopItems[1].price}
                itemPicture={props.returnedItem.shopItems[1].itempics}
              />
            </Col>
          </Row>
        </Card>
      </Col>
      <Col style={{ paddingLeft: "1px", paddingRight: "1px" }} md="4" sm="4">
        <Card style={{ paddingLeft: 0, paddingRight: 0 }}>
          <Row>
            <Col
              style={{ paddingLeft: 0, paddingRight: 0 }}
              sm="6"
              md="6"
              xsm="6"
            >
              <Item
                style={{ paddingRight: 0 }}
                id={props.returnedItem.shopItems[0].idindex}
                itemName={props.returnedItem.shopItems[0].itemname}
                price={props.returnedItem.shopItems[0].price}
                itemPicture={props.returnedItem.shopItems[0].itempics}
              />
            </Col>

            <Col
              style={{ paddingLeft: 0, paddingRight: 0 }}
              sm="6"
              md="6"
              xsm="6"
            >
              <Item
                style={{ paddingLeft: 0 }}
                id={props.returnedItem.shopItems[1].idindex}
                itemName={props.returnedItem.shopItems[1].itemname}
                price={props.returnedItem.shopItems[1].price}
                itemPicture={props.returnedItem.shopItems[1].itempics}
              />
            </Col>
          </Row>
        </Card>
        Simply the best
      </Col>

      <Col style={{ paddingLeft: 0 }} md="4" sm="4" xsm="4">
        <Card style={{ paddingLeft: 0, paddingRight: 0 }}>
          <Row>
            <Col
              style={{ paddingLeft: 0, paddingRight: 0 }}
              sm="6"
              md="6"
              xsm="6"
            >
              <Item
                style={{ paddingLeft: 0, paddingRight: 0 }}
                id={props.returnedItem.shopItems[0].idindex}
                itemName={props.returnedItem.shopItems[0].itemname}
                price={props.returnedItem.shopItems[0].price}
                itemPicture={props.returnedItem.shopItems[0].itempics}
              />
            </Col>

            <Col
              style={{ paddingLeft: 0, paddingRight: 0 }}
              sm="6"
              md="6"
              xsm="6"
            >
              <Item
                style={{ paddingLeft: 0, paddingRight: 0 }}
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
