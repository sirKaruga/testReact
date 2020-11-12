import React from "react";
import { Card, Row, Col, Carousel } from "react-bootstrap";
import { connect } from "react-redux";
import naturePic from "../images/shoe.webp";
import Item from "../components/item";

function rowStyle3(props) {
  return (
    <Row>
      <Col md="12" sm="12" xsm="12">
        <Card style={{ minHeight: "inhetit" }}>
          <Row style={{ minHeight: "inhetit" }}>
            <Col style={{ objectFit: "cover" }} md="2" sm="6" xsm="6">
              <div
                style={{
                  color: "white",
                  objectFit: "cover",
                }}
              >
                <Carousel style={{ color: "black" }}>
                  <Carousel.Item interval={1000}>
                    <Item
                      id={props.returnedItem.shopItems[1].idindex}
                      itemName={props.returnedItem.shopItems[1].itemname}
                      price={props.returnedItem.shopItems[1].price}
                      itemPicture={props.returnedItem.shopItems[1].itempics}
                    />
                  </Carousel.Item>
                  <Carousel.Item interval={500}>
                    <Item
                      id={props.returnedItem.shopItems[0].idindex}
                      itemName={props.returnedItem.shopItems[0].itemname}
                      price={props.returnedItem.shopItems[0].price}
                      itemPicture={props.returnedItem.shopItems[0].itempics}
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <Item
                      id={props.returnedItem.shopItems[1].idindex}
                      itemName={props.returnedItem.shopItems[1].itemname}
                      price={props.returnedItem.shopItems[1].price}
                      itemPicture={props.returnedItem.shopItems[1].itempics}
                    />
                  </Carousel.Item>
                </Carousel>
              </div>
            </Col>

            <Col md="2" sm="6" xsm="6">
              <Item
                id={props.returnedItem.shopItems[1].idindex}
                itemName={props.returnedItem.shopItems[1].itemname}
                price={props.returnedItem.shopItems[1].price}
                itemPicture={props.returnedItem.shopItems[1].itempics}
              />
            </Col>

            <Col md="2" sm="6" xsm="6">
              <Item
                id={props.returnedItem.shopItems[0].idindex}
                itemName={props.returnedItem.shopItems[0].itemname}
                price={props.returnedItem.shopItems[0].price}
                itemPicture={props.returnedItem.shopItems[0].itempics}
              />
            </Col>

            <Col md="2" sm="6" xsm="6">
              <Item
                id={props.returnedItem.shopItems[0].idindex}
                itemName={props.returnedItem.shopItems[0].itemname}
                price={props.returnedItem.shopItems[0].price}
                itemPicture={props.returnedItem.shopItems[0].itempics}
              />
            </Col>

            <Col md="2" sm="6" xsm="6">
              <Item
                id={props.returnedItem.shopItems[1].idindex}
                itemName={props.returnedItem.shopItems[1].itemname}
                price={props.returnedItem.shopItems[1].price}
                itemPicture={props.returnedItem.shopItems[1].itempics}
              />
            </Col>

            <Col md="2" sm="6" xsm="6">
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
