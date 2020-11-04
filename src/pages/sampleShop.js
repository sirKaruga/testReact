import React from "react";
import { Container } from "react-bootstrap";
import RowStyle1 from "../components/rowStyle1";
import RowStyle2 from "../components/rowStyle2";
import RowStyle3 from "../components/rowStyle3";
import { Cart } from "react-bootstrap-icons";

function MyShop() {
  return (
    <Container style={{ minHeight: "50vh" }}>
      <Cart>length</Cart>
      <RowStyle2 />
      <br />
      <RowStyle3 />
      <br />
      <RowStyle1 />
      <br />
    </Container>
  );
}

export default MyShop;
