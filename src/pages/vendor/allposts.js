import React, { useState, useEffect } from "react";
import { Card, Col, Row, Button } from "react-bootstrap";
import { Redirect, useHistory } from "react-router-dom";
import windowSize from "../../components/windowSize";
import BottomNav from "../../components/bottomNav";
import { FlagFill, Trash, Cash, Bag } from "react-bootstrap-icons";
import apiCalls from "../../components/apiCalls";

export default function useAllPosts() {
  const history = useHistory();
  const [items, setitems] = useState({
    products: [],
  });
  useEffect(() => {
    apiCalls(
      { user: sessionStorage.getItem("wasilishaVendor") },
      "/briefContent"
    ).then((res) => {
      if (res.data.items) {
        setitems({
          ...items,
          products: res.data.items,
        });
      }
    });
  }, []);
  const margin = windowSize().width > 768 ? "7em" : 0;
  if (!sessionStorage.getItem("wasilishaVendor")) {
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
            paddingLeft: "4px",
            paddingRight: 0,
          }}
          sm="12"
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
            <Card.Title>Hi Dennis</Card.Title>
            <Card.Body
              style={{
                marginLeft: 0,
                marginRight: 0,
                paddingLeft: 0,
                paddingRight: 0,
              }}
            >
              <Card.Text>
                <b>My Online Products({items.products.length})</b>
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
                  <thead>
                    <tr style={{ borderBottom: "1px solid grey" }}>
                      <th>
                        {" "}
                        <Bag /> Item
                      </th>
                      <th>
                        <Cash /> price
                      </th>
                      <th>
                        <FlagFill /> update
                      </th>
                      <th>
                        <Trash /> Delete
                      </th>
                    </tr>
                    {items.products.map((product) => (
                      <tr key={product._id}>
                        <td>
                          <img
                            style={{ width: "60px", height: "auto" }}
                            src={product.images[0]}
                            alt="so"
                          />
                        </td>
                        <td>
                          {product.price}
                          {" ksh"}
                        </td>
                        <td>
                          {" "}
                          <Button
                            id="update"
                            style={{
                              backgroundColor: "white",
                              border: "1px solid white",
                            }}
                            onClick={() =>
                              history.push(`/vendor/update/${product._id}`, {
                                data: product,
                              })
                            }
                          >
                            <span style={{ color: "blue" }}>Update</span>
                          </Button>
                        </td>

                        <td>
                          <label
                            htmlFor="delete"
                            style={{
                              color: "white",
                              padding: "5px 10px",
                            }}
                          ></label>
                          <Button
                            id="delete"
                            onClick={() => console.log(product._id)}
                          >
                            <Trash />
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </thead>
                </table>
                <hr />
                <Card.Text
                  style={{ color: "grey" }}
                  className="d-flex justify-content-end"
                >
                  <i>@Wasilisha Africa</i>
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
