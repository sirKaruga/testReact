import React, { useState, useEffect } from "react";
import { Card, Col, Row, Button } from "react-bootstrap";
import { Link, Redirect } from "react-router-dom";
import windowSize from "../../components/windowSize";
import BottomNav from "../../components/bottomNav";
import { FlagFill, Cash, Bag } from "react-bootstrap-icons";
import apiCalls from "../../components/apiCalls";

export default function Vendor() {
  const [content, setcontent] = useState({
    redirect: false,
    items: [],
  });
  useEffect(() => {
    apiCalls(
      { user: sessionStorage.getItem("wasilishaVendor") },
      "/briefContent"
    ).then((res) => {
      if (res.data.items) {
        setcontent({
          ...content,
          items: res.data.items,
        });
      }
    });
  }, []);

  const margin = windowSize().width > 768 ? "7em" : 0;
  if (!sessionStorage.getItem("wasilishaVendor")) {
    return <Redirect to="/vendor/login" />;
  }
  if (content.redirect === true) {
    return <Redirect to="/vendor/login" />;
  }
  return (
    <div
      style={{
        marginRight: margin,
        marginLeft: margin,
        overflow: "hidden",
      }}
    >
      {margin === 0 ? null : (
        <Card style={{ height: "5rem", backgroundColor: "beige" }}></Card>
      )}
      <Card style={{ backgroundColor: "red" }}>
        <span>
          <img
            style={{
              height: "auto",
              width: margin === 0 ? "50%" : "30%",
              float: "left",
              paddingRight: "20px",
            }}
            src={require("../../images/sa.png")}
            alt="img"
          />
          <span style={{ float: "right" }}>
            <Button
              onClick={() => {
                sessionStorage.removeItem("wasilishaVendor");
                setcontent({
                  ...content,
                  redirect: true,
                });
              }}
            >
              Log Out
            </Button>
          </span>
        </span>
      </Card>
      <Row
        style={{
          marginLeft: 0,
          marginRight: 0,
          paddingLeft: 0,
          paddingRight: 0,
        }}
      >
        <Col
          style={{
            marginLeft: 0,
            marginRight: 0,
            paddingLeft: 0,
            paddingRight: 0,
            display: "flex",
          }}
          sm="3"
        >
          <Row
            style={{
              display: "flex",
              marginLeft: 0,
              marginRight: 0,
              width: "100%",
            }}
          >
            <Col
              style={{
                marginLeft: 0,
                marginRight: 0,
                paddingLeft: 0,
                paddingRight: 0,
              }}
              vsm="6"
            >
              <Card
                style={{
                  maxWidth: "50vw",
                  marginLeft: 0,
                  marginRight: 0,
                  minHeight: "150px",
                }}
              >
                <div style={{ paddingTop: "10px" }}>
                  <div style={{ paddingBottom: "10px" }}>
                    <Link style={{ color: "black" }} to="/vendor/post">
                      <i>
                        <FlagFill />{" "}
                      </i>
                      Post add
                    </Link>
                  </div>
                  <Link style={{ color: "black" }} to="/vendor/allpost">
                    <i>
                      <FlagFill />{" "}
                    </i>
                    Manage Adds
                  </Link>
                </div>
              </Card>
            </Col>
            <Col
              style={{
                marginLeft: 0,
                marginRight: 0,
                paddingLeft: "4px",
                paddingRight: 0,
              }}
              vsm="6"
            >
              <Card
                style={{
                  maxWidth: "50vw",
                  marginLeft: 0,
                  marginRight: 0,
                  minHeight: "150px",
                }}
              >
                <div style={{ paddingTop: "10px" }}>
                  <div style={{ paddingBottom: "10px" }}>
                    <Link style={{ color: "black" }} to="/vendor/policy">
                      <i>
                        <FlagFill />{" "}
                      </i>
                      Vending terms
                    </Link>
                  </div>

                  <Link style={{ color: "black" }} to="vendor/policy">
                    <i>
                      <FlagFill />{" "}
                    </i>
                    How it works
                  </Link>
                </div>
              </Card>
            </Col>
          </Row>
        </Col>
        <Col
          style={{
            marginLeft: 0,
            marginRight: 0,
            paddingLeft: "4px",
            paddingRight: 0,
          }}
          sm="9"
        >
          <Card
            style={{
              marginLeft: 0,
              marginRight: 0,
              paddingLeft: 0,
              paddingRight: 0,
            }}
            sm="9"
          >
            <Card.Title>Welcome Dennis</Card.Title>
            <Card.Body
              style={{
                marginLeft: 0,
                marginRight: 0,
                paddingLeft: 0,
                paddingRight: 0,
              }}
            >
              <Card.Text>
                <b>My Online Products({content.items.length})</b>
              </Card.Text>

              <Card
                style={{
                  marginLeft: 0,
                  marginRight: 0,
                  paddingLeft: 0,
                  paddingRight: 0,
                }}
              >
                <table>
                  <tbody>
                    <tr style={{ borderBottom: "1px solid grey" }}>
                      <th>
                        {" "}
                        <Bag /> Item
                      </th>

                      <th>
                        <FlagFill /> Name
                      </th>
                      <th>
                        <Cash /> Price
                      </th>
                    </tr>
                    {content.items.map((item) => (
                      <tr key={item.id}>
                        <td>
                          <img
                            style={{ width: "60px", height: "auto" }}
                            src={item.images[0]}
                            alt="so"
                          />
                        </td>
                        <td>{item.name}</td>
                        <td>{item.price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <hr />
                <Card.Text className="d-flex justify-content-end">
                  <Link to="/vendor/allpost">View All</Link>
                </Card.Text>
              </Card>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <BottomNav />
    </div>
  );
}
