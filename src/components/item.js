import React from "react";
import { Card } from "react-bootstrap";
import { connect } from "react-redux";
import { addToCart } from "../store/actions/";

function item(props) {
  return (
    <div
      style={{
        paddingLeft: 0,
        paddingRight: 0,
        minWidth: "105px",
      }}
    >
      <Card.Img
        style={{
          paddingLeft: 0,
          paddingRight: 0,
          minHeight: "7em",
          maxHeight: "7em",
          marginTop: "2em",
        }}
        variant="top"
        src={props.itemPicture}
      />
      <Card.Body>
        <Card.Text>
          <span>{props.itemName.slice(0, 6) + "..."}</span>
          <br />
          <b>ksh. {props.price}/=</b>
          <br />
        </Card.Text>
      </Card.Body>
    </div>
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
