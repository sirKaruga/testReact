import React, { useState, useEffect } from "react";
import { Card, Row, Col } from "react-bootstrap";
import { connect } from "react-redux";
import Item from "../components/item";
import windowSize from "../components/windowSize";
import apiCalls from "../components/apiCalls";

function useRowStyle4(props) {
  const [p1, setp1] = useState({
    name: "",
    image: "",
    price: "",
    id: "",
  });
  const [p2, setp2] = useState({
    name: "",
    image: "",
    price: "",
    id: "",
  });
  const [p3, setp3] = useState({
    name: "",
    image: "",
    price: "",
    id: "",
  });
  const [p4, setp4] = useState({
    name: "",
    image: "",
    price: "",
    id: "",
  });
  const [p5, setp5] = useState({
    name: "",
    image: "",
    price: "",
    id: "",
  });

  useEffect(() => {
    apiCalls({ cartegory: "Computers" }, "/getproduct_cat").then((res) => {
      setp1({
        name: res.data.items[0].name,
        image: res.data.items[0].images[0],
        price: res.data.items[0].price,
        id: res.data.items[0]._id,
      });
      setp2({
        name: res.data.items[1].name,
        image: res.data.items[1].images[0],
        price: res.data.items[1].price,
        id: res.data.items[1]._id,
      });
      setp3({
        name: res.data.items[2].name,
        image: res.data.items[2].images[0],
        price: res.data.items[2].price,
        id: res.data.items[2]._id,
      });
      setp4({
        name: res.data.items[3].name,
        image: res.data.items[3].images[0],
        price: res.data.items[3].price,
        id: res.data.items[3]._id,
      });
      setp5({
        name: res.data.items[4].name,
        image: res.data.items[4].images[0],
        price: res.data.items[4].price,
        id: res.data.items[4]._id,
      });
    });
  }, []);

  //console.log(typeof state.name);
  const cwindow = windowSize().width;
  var display = "inline";
  var display2 = "inline";

  function between(x, min, max) {
    return x >= min && x <= max;
  }
  if (between(cwindow, 0, 1387)) {
    display = "none";
  }
  if (between(cwindow, 0, 1225)) {
    display2 = "none";
  }

  return (
    <Row>
      <Col md="12" sm="12" xsm="12">
        <Card style={{ minHeight: "inherit" }}>
          <Row style={{ minHeight: "inhetit" }}>
            <Col vsm="2">
              <Item
                id={p1.id}
                itemName={p1.name}
                price={p1.price}
                itemPicture={p1.image}
              />
            </Col>

            <Col vsm="2">
              <Item
                id={p2.id}
                itemName={p2.name}
                price={p2.price}
                itemPicture={p2.image}
              />
            </Col>

            <Col vsm="2">
              <Item
                id={p3.id}
                itemName={p3.name}
                price={p3.price}
                itemPicture={p3.image}
              />
            </Col>

            <Col vsm="2">
              <Item
                id={p3.id}
                itemName={p3.name}
                price={p3.price}
                itemPicture={p3.image}
              />
            </Col>

            <Col style={{ display: display2 }} vsm="2">
              <Item
                id={p4.id}
                itemName={p4.name}
                price={p4.price}
                itemPicture={p4.image}
              />
            </Col>

            <Col style={{ display: display }} vsm="2">
              <Item
                id={p5.id}
                itemName={p5.name}
                price={p5.price}
                itemPicture={p5.image}
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

export default connect(mapStateToProps)(useRowStyle4);
