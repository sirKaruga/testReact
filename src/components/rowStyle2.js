import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import Item from "../components/catItem";
import { connect } from "react-redux";

function rowStyle2(props) {
  console.log(props);

  return (
    <>
      <Row style={{ overflow: "hidden" }}>
        <Col
          style={{
            marginLeft: 0,
            marginRight: 0,
            marginTop: 0,
            marginBottom: 0,
          }}
        >
          <Card
            style={{
              paddingLeft: 0,
              paddingRight: 0,
              backgroundColor: "red",
              color: "white",
            }}
          >
            <span className="mr-auto">Featured Categories</span>
          </Card>
        </Col>
      </Row>
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
                  id={"Phones"}
                  itemName={"Phones"}
                  itemPicture={require("../images/phone.jpg")}
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
                  id={"Compters"}
                  itemName={"Compters"}
                  itemPicture={require("../images/comp.jpg")}
                />
              </Col>
            </Row>
          </Card>
        </Col>
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
                  style={{ paddingRight: 0 }}
                  id={"TV's"}
                  itemName={"TV's"}
                  itemPicture={require("../images/mytv.jpg")}
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
                  id={"Accessories"}
                  itemName={"Accessories"}
                  itemPicture={require("../images/accessories.jpg")}
                />
              </Col>
            </Row>
          </Card>
        </Col>

        <Col md="4" sm="4" xsm="4">
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
                  id={"Furniture"}
                  itemName={"Furniture"}
                  itemPicture={require("../images/fnt.jpeg")}
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
                  id={"Others"}
                  itemName={"Others"}
                  itemPicture={require("../images/otr.png")}
                />
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </>
  );
}

function mapStateToProps(props) {
  return {
    returnedItem: props,
  };
}

export default connect(mapStateToProps)(rowStyle2);
