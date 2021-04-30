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
        borderBottom: "1px solid grey",
      }}
      className="d-flex justify-content-center lhover"
    >
      <a
        style={{ color: "black", textDecoration: "none" }}
        href={props.toLocation}
      >
        <Card.Img
          style={{
            paddingLeft: 0,
            paddingRight: 0,
            minHeight: "7em",
            maxHeight: "7em",
            marginTop: "2em",
            width: "auto",
            maxWidth: "90px",
          }}
          variant="top"
          src={props.itemPicture}
        />
        <Card.Body>
          <Card.Text className="d-flex justify-content-center">
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
