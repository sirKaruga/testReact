import React from "react";
import { Container } from "react-bootstrap";
import RowStyle1 from "../components/rowStyle1";
import RowStyle2 from "../components/rowStyle2";
import RowStyle3 from "../components/rowStyle3";
import { Cart } from "react-bootstrap-icons";
import Topnav from "../components/topnav";
import TopCarouselRow from "../components/topCarouselRow ";

export default function Home() {
  return (
    <div
      style={{
        minHeight: "50vh",
        overflow: "hidden",
        marginLeft: "1em",
        marginRight: "1em",
      }}
    >
      <Topnav />
      <Cart>length</Cart>
      <TopCarouselRow />
      <RowStyle2 />
      <br />
      <RowStyle3 />
      <br />
      <RowStyle1 />
      <br />
    </div>
  );
}
