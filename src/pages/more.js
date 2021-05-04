import React, { useState, useEffect } from "react";
import { Card, Row, Col, Button } from "react-bootstrap";
import { FaBeer } from "react-icons/fa";
import { useParams } from "react-router-dom";
import RowStyle4 from "../components/rowStyle4";
import Topnav from "../components/topnav";
import windowSize from "../components/windowSize";
import apiCalls from "../components/apiCalls";
import { addToCart } from "../store/actions/index";
import { useDispatch } from "react-redux";

const useMore = () => {
  const [state, setstate] = useState([]);
  const [imgs, setimgs] = useState({
    img1: "",
    img2: "",
    img3: "",
    img4: "",
    img5: "",
    img6: "",
  });
  const [current, setcurrent] = useState("");
  let product = useParams();

  useEffect(() => {
    apiCalls(product, "/getproduct_by_id").then((resp) => {
      setstate(resp.data.items);
      setcurrent(resp.data.items[0].images[0]);
      setimgs({
        img1: resp.data.items[0].images[0],
        img2: resp.data.items[0].images[1],
        img3: resp.data.items[0].images[2],
        img4: resp.data.items[0].images[3],
        img5: resp.data.items[0].images[4],
        img6: resp.data.items[0].images[5],
      });
    });
  }, []);
  console.log(state);
  ///////
  const Photo = () => {
    return (
      <div>
        {state[0].images.map((im) => (
          <button
            key={im}
            type="button"
            className="link-button"
            onClick={() => setcurrent(im)}
            style={{
              borderBottom: "1px solid grey",
              borderRight: "1px solid grey",
            }}
          >
            <Col sm="2" xsm="2" md="2" lg="2">
              <img
                style={{ height: "50px", width: "auto", maxWidth: "50px" }}
                src={im}
                alt="current"
              />
            </Col>
          </button>
        ))}
      </div>
    );
  };

  const margin = windowSize().width > 768 ? "7em" : 0;

  // add item to buy list
  const useAddToCart = (id) => {
    const dispatch = useDispatch();
    dispatch(addToCart(id));
  };

  return (
    <div style={{ marginRight: margin, marginLeft: margin }}>
      <Topnav />
      <br />
      {state.map((prod) => (
        <div key={prod._id}>
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
                    src={current}
                    alt="current"
                  />
                </div>
              </div>
              <div>
                <Row>
                  <Photo />
                </Row>
              </div>
            </Col>

            <Col
              md="5"
              sm="5"
              xsm="12"
              style={{ borderLeft: "1px solid grey" }}
            >
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
                      {prod.name}
                    </span>
                  </div>
                  <div>
                    <br />
                    <span>
                      <a
                        style={{ fontSize: 12, color: "#073f67" }}
                        href="./more"
                      >
                        Want to sell yours here?
                      </a>{" "}
                      |{" "}
                      <a
                        style={{ fontSize: 12, color: "#073f67" }}
                        href="./more"
                      >
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
                    Ksh. {prod.price}
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
                    onClick={useAddToCart}
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
                <span
                  style={{ fontSize: 20, float: "left", fontWeight: "400" }}
                >
                  Product Desctiption
                </span>
              </div>
              <br />
              <div>
                <br />
                <span>{prod.description}</span>
              </div>
              <hr />
              <div>
                <span
                  style={{ fontSize: 20, float: "left", fontWeight: "bold" }}
                >
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
      ))}
    </div>
  );
};

export default useMore;
