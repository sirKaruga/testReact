import React from "react";
import { Card } from "react-bootstrap";
import { connect } from "react-redux";
import { addToCart } from "../store/actions/";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

function useItem(props) {
  let parameters = useParams();
  return (
    <div
      style={{
        paddingLeft: 0,
        paddingRight: 0,
        minWidth: "105px",
      }}
      className="lhover"
    >
      <Link
        style={{
          color: "black",
          textDecoration: "none",
        }}
        to={`/more/${props.id}`}
      >
        <Card.Img
          style={{
            paddingLeft: 0,
            paddingRight: 0,
            minHeight: "7em",
            maxHeight: "7em",
            marginTop: "2em",
            width: "auto",
            maxWidth: "40vw",
          }}
          variant="top"
          src={props.itemPicture}
        />
        <Card.Body className="d-flex justify-content-center">
          <Card.Text>
            <span>{props.itemName.slice(0, 6) + "..."}</span>
            <br />
            <b>ksh. {props.price}/=</b>
            <br />
          </Card.Text>
        </Card.Body>
      </Link>
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

export default connect(mapStateToProps, mapDispatchToProps)(useItem);
