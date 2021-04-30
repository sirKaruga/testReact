import React, { useState, useEffect } from "react";
import { Card, Row, Col, Container, Button } from "react-bootstrap";
import { FaBeer } from "react-icons/fa";
import RowStyle4 from "../components/rowStyle4";
import Topnav from "../components/topnav";

const More = () => {
  function useWindowSize() {
    const [windowSize, setWindowSize] = useState({
      width: undefined,
      height: undefined,
    });
    useEffect(() => {
      function handleResize() {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }
      window.addEventListener("resize", handleResize);
      handleResize();
      return () => window.removeEventListener("resize", handleResize);
    }, []);
    return windowSize;
  }

  ///////
  const Photo = () => {
    return (
      <button
        type="button"
        className="link-button"
        onClick={() => console.log("wes see")}
        style={{
          borderBottom: "1px solid grey",
          borderRight: "1px solid grey",
        }}
      >
        <Col sm="2" xsm="2" md="2" lg="2">
          <img
            style={{ height: "50px", width: "auto", maxWidth: "50px" }}
            src={require("../images/dress.jpg")}
            alt="current"
          />
        </Col>
      </button>
    );
  };

  const margin = useWindowSize().width > 768 ? "7em" : 0;

  return (
    <div style={{ marginRight: margin, marginLeft: margin }}>
      <Topnav />
      <br />
      <Row>
        <Col md="7" sm="7" xsm="12">
          <div
            style={{
              marginRight: 0,
            }}
          >
            <div>
              <Card.Img
                style={{
                  // maxWidth: "50vw",
                  // width: "100%",
                  height: "auto",
                  maxHeight: "70vh",
                }}
                src={require("../images/shoe.webp")}
                alt="current"
              />
            </div>
          </div>
          <div>
            <Row>
              <Photo />
              <Photo />
            </Row>
          </div>
        </Col>

        <Col md="5" sm="5" xsm="12" style={{ borderLeft: "1px solid grey" }}>
          <div>
            <div style={{ borderBottomColor: "1px solid grey" }}>
              <span style={{ backgroundColor: "#8b0000", color: "white" }}>
                Classic Item
              </span>
              <div style={{ width: "100% " }}>
                <span
                  style={{
                    fontSize: 20,
                    float: "left",
                    fontWeight: "400",
                    width: "100% ",
                  }}
                >
                  A description of something goes he..
                </span>
              </div>
              <div>
                <br />
                <span>
                  <a style={{ fontSize: 12, color: "#073f67" }} href="./more">
                    Want to sell yours here?
                  </a>{" "}
                  |{" "}
                  <a style={{ fontSize: 12, color: "#073f67" }} href="./more">
                    More like this
                  </a>
                </span>
              </div>
              <span>
                <FaBeer style={{ color: "orange" }} />{" "}
                <span style={{ fontSize: 12, color: "blue" }}>
                  Seller score is high
                </span>
              </span>
            </div>
            <hr />
            <div>
              <span style={{ fontWeight: "bold", fontSize: 25 }}>
                {" "}
                Ksh. 15,099
              </span>
              <span>
                <br />
                <a style={{ fontSize: 12, color: "#073f67" }} href="./more">
                  Want to Contact Support?
                </a>
              </span>
            </div>

            <div style={{ width: "100%", float: "left" }}>
              <Button
                style={{
                  width: "100%",
                  backgroundColor: "orange",
                }}
                onClick={() => console.log("add cart")}
              >
                {" "}
                Add to Cart
              </Button>
            </div>
          </div>
        </Col>
      </Row>
      <hr />
      <Row>
        <Col>
          <div>
            <span style={{ fontSize: 20, float: "left", fontWeight: "400" }}>
              Product Desctiption
            </span>
          </div>
          <br />
          <div>
            <br />
            <span>
              Being a fact that many lottery winners win large sums of money and
              become broke later, it could be a factor to consider my actions if
              I happened to emerge such a winner. However, I’d prefer to collect
              the ransom now instead of another time in the future, as money
              collected now would have a higher value compared to an identical
              sum collected at a later time. The ultimate amount of cash I’d
              collect now would be of higher value in comparison to an identical
              amount in the future due to the Time Value for Money factors that
              show an increase in money value over time (Ford, 2020).
            </span>
          </div>
          <hr />
          <div>
            <span style={{ fontSize: 20, float: "left", fontWeight: "bold" }}>
              People also Viewed..
            </span>
          </div>
          <br />
          <div>
            <br />
            <RowStyle4 />
          </div>
          <br />
        </Col>
      </Row>
    </div>
  );
};

export default More;
