import React from "react";
import RowStyle1 from "../components/rowStyle1";
import RowStyle2 from "../components/rowStyle2";
import RowStyle3 from "../components/rowStyle3";
import Topnav from "../components/topnav";
import TopCarouselRow from "../components/topCarouselRow ";
import BottomNav from "../components/bottomNav";
import windowSize from "./windowSize";
import { Link } from "react-router-dom";

function Btn() {
  return (
    <div
      style={{ backgroundColor: "orange", borderBottom: "1px solid red" }}
      className="d-flex justify-content-end"
    >
      <Link to="/vendor/post">
        <b>
          <i>Sell Your product Here</i>
        </b>
      </Link>
    </div>
  );
}

export default function body() {
  return (
    <div style={{ width: windowSize().width < 998 ? "900px" : "auto" }}>
      <Btn />
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
