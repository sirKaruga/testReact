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
      <a style={{ color: "black", textDecoration: "none" }} href="/about:johns">
        <Card.Img
          style={{
            paddingLeft: 0,
            paddingRight: 0,
            minHeight: "7em",
            maxHeight: "7em",
            marginTop: "2em",
            maxWidth: "7em",
          }}
          variant="top"
          src={props.itemPicture}
        />
        <Card.Body>
          <Card.Text>
            <span>{props.itemName}</span>
          </Card.Text>
        </Card.Body>
      </a>
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
