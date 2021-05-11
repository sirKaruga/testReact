import React from "react";
import RowStyle1 from "../components/rowStyle1";
import RowStyle2 from "../components/rowStyle2";
import RowStyle3 from "../components/rowStyle3";
import Topnav from "../components/topnav";
import TopCarouselRow from "../components/topCarouselRow ";
import BottomNav from "../components/bottomNav";
import windowSize from "./windowSize";

export default function body() {
  return (
    <div style={{ width: windowSize().width < 998 ? "900px" : "auto" }}>
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
