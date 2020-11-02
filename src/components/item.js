import React from "react";
import { Card, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../store/actions/";

function item(props) {
  function handleBuyClick() {
    console.log(props);
  }
  console.log(props);

  return (
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
        src={props.itemPicture}
      />
      <Card.Body>
        <Card.Text>
          <span>{props.itemName}</span>
          <br />
          <b>Ksh. {props.price}/=</b>
          <br />
        </Card.Text>
        <Button onClick={handleBuyClick} variant="primary">
          Buy
        </Button>
      </Card.Body>
    </Card>
  );
}

export default item;
