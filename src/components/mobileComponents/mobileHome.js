import React from "react";
import { Card } from "react-bootstrap";
import RowStyle2 from "../rowStyle2";
import RowStyle3 from "../rowStyle3";
import BottomNav from "../bottomNav";
import Topnav from "../topnav";

export default function mobileHome() {
  return (
    <div>
      <Topnav />
      <div className="item-container">
        <Card className="item">
          <img src={require("../../images/comp.jpg")} />
        </Card>
        <Card className="item">
          <img src={require("../../images/comp.jpg")} />
        </Card>
        <Card className="item">
          <img src={require("../../images/comp.jpg")} />
        </Card>
        <Card className="item">
          <img src={require("../../images/comp.jpg")} />
        </Card>
        <Card className="item">
          <img src={require("../../images/comp.jpg")} />
        </Card>
      </div>
      <RowStyle2 />
      <RowStyle3 />
      <BottomNav />
    </div>
  );
}
