import React from "react";
import { Container } from "react-bootstrap";
import RowStyle1 from "../components/rowStyle1";
import RowStyle2 from "../components/rowStyle2";
import RowStyle3 from "../components/rowStyle3";
import { Cart } from "react-bootstrap-icons";

import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { fetchedToStore } from "../store/actions/";

function MyShop() {
  const mdata = useSelector((state) => state.fetchedData);
  console.log(mdata.length);

  return (
    <Container style={{ minHeight: "50vh" }}>
      <Cart>length</Cart>
      <RowStyle2 />
      <br />
      <RowStyle1 />
      <br />
      <RowStyle3 />
      <br />
    </Container>
  );
}

export default MyShop;
