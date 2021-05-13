import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import RowStyle2 from "../rowStyle2";
import RowStyle3 from "../rowStyle3";
import RowStyle1 from "../rowStyle1";
import BottomNav from "../bottomNav";
import Topnav from "../topnav";
import Item from "../item";
import apiCalls from "../apiCalls";

export default function useMobileHome() {
  const [items, setitems] = useState({
    fetched: [],
  });
  useEffect(() => {
    apiCalls({ cartegory: "Computers" }, "/getproduct_cat").then((res) => {
      setitems({
        ...items,
        fetched: res.data.items.slice(0, 6),
      });
    });
  }, []);

  return (
    <>
      <Topnav />
      <div
        style={{
          marginRight: 0,
          marginLeft: 0,
          paddingRight: 0,
          paddingLeft: 0,
          overflow: "hidden",
        }}
      >
        <div className="item-container">
          {items.fetched.map((item) => (
            <Card key={item._id} className="item">
              <Item
                id={item._id}
                itemName={item.name}
                price={item.price}
                itemPicture={item.images[0]}
              />
            </Card>
          ))}
        </div>
        <RowStyle2 style={{ overflow: "hidden" }} />
        <RowStyle3 style={{ overflow: "hidden" }} />
        <RowStyle1 style={{ overflow: "hidden" }} />
        <BottomNav style={{ overflow: "hidden" }} />
      </div>
    </>
  );
}
