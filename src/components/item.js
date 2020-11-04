import React, { useEffect } from "react";
import { Card, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { addToCart } from "../store/actions/";

function item(props) {
  props.addToCart(props.id);

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
        <Button variant="primary">Buy</Button>
      </Card.Body>
    </Card>
  );
}

function mapStateToProps(props) {
  return {
    returnedItem: props,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addToCart: (props) => {
      dispatch(addToCart(props));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(item);
