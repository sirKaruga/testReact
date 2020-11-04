import React from "react";
import { Card, Row, Col, Button, Carousel } from "react-bootstrap";
import { connect } from "react-redux";
import naturePic from "../images/shoe.webp";
import Item from "../components/item";

function rowStyle3(props) {
  return (
    <Row>
      <Col md="12" sm="12" xsm="12">
        <Card>
          <Row>
            <Col md="4" sm="12" xsm="12">
              <Card
                style={{
                  background: "blue",
                  color: "white",
                  height: "matchParent",
                }}
              >
                <Card.Title>Fashion and Dressing</Card.Title>
                <Carousel>
                  <Carousel.Item interval={1000}>
                    <img
                      className="d-block w-100"
                      src={naturePic}
                      alt="First slide"
                    />
                    <Carousel.Caption>
                      <h3>Fast connectivity</h3>
                      <p>Simple and easy to connect</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item interval={500}>
                    <img
                      className="d-block w-100"
                      src={naturePic}
                      alt="Third slide"
                    />
                    <Carousel.Caption>
                      <h3>Super UI</h3>
                      <p>With Simplicity, quality evolves</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={naturePic}
                      alt="Third slide"
                    />
                    <Carousel.Caption>
                      <h3>Bootstrap in use</h3>
                      <p>This is a test app</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                </Carousel>
              </Card>
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
