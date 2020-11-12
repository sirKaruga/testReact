import React from "react";
import { Container } from "react-bootstrap";
import RowStyle1 from "../components/rowStyle1";
import RowStyle2 from "../components/rowStyle2";
import RowStyle3 from "../components/rowStyle3";
import Topnav from "../components/topnav";
import TopCarouselRow from "../components/topCarouselRow ";
import BottomNav from "../components/bottomNav";

export default function Home() {
  return (
    <div
      style={{
        minHeight: "50vh",
        overflow: "hidden",
        marginLeft: "5em",
        marginRight: "5em",
      }}
    >
      <Topnav />
      <TopCarouselRow />
      <RowStyle2 />
      <br />
      <RowStyle3 />
      <br />
      <RowStyle1 />
      <br />
      <BottomNav />
    </div>
  );
}
