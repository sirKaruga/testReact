import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import apiCalls from "../components/apiCalls";
import Item from "../components/item";
import TopNav from "../components/topnav";

export default function useProducts() {
  const [state, setstate] = useState([]);
  let category = useParams();
  useEffect(() => {
    apiCalls(category, "/getproduct_cat").then((resp) => {
      setstate(resp.data.items);
    }); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <TopNav />
      <Row>
        {state.map((item) => (
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
