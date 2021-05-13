import React, { useState, useEffect } from "react";
import TopNav from "../components/topnav";
import Item from "../components/item";
import { Row, Col } from "react-bootstrap";
import apiCalls from "../components/apiCalls";

export default function useSearchResults(params) {
  const historyValue = params.location.searchResults
    ? params.location.searchResults
    : "";
  const [data, setdata] = useState({
    products: [],
  });
  console.log(params.location.pathname);

  useEffect(() => {
    apiCalls({ searchV: historyValue }, "/search_item").then((res) => {
      if (res.data.items) {
        setdata({
          ...data,
          products: res.data.items,
        });
      }
    });
  }, []);

  if (data.products.length < 1) {
    return (
      <div>
        <TopNav />
        <span className="d-flex justify-content-center">
          No Items Match your Search. Try different key words
        </span>
      </div>
    );
  } else {
    return (
      <div>
        <TopNav />
        <Row>
          {data.products.map((item) => (
            <Col vsm="6" key={item._id}>
              <Item
                id={item._id}
                itemName={item.name}
                price={item.price}
                itemPicture={item.images[0]}
              />
            </Col>
          ))}
        </Row>
      </div>
    );
  }
}
