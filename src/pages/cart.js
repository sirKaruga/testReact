import React, { useEffect, useState } from "react";
import {
  Cart,
  Trash,
  Cash,
  Hash,
  ArrowLeft,
  ArrowRight,
  ArrowDownRightSquare,
} from "react-bootstrap-icons";
import windowSize from "../components/windowSize";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "react-bootstrap";
import Topnav from "../components/topnav";
import apiCall from "../components/apiCalls";
import { removeFromCart } from "../store/actions/";

function useCart() {
  const margin = windowSize().width > 998 ? "7em" : null;
  const [items, setitems] = useState({
    fetched: [],
    call: false,
  });
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart);

  useEffect(() => {
    apiCall({ products: products }, "/getproduct_cart_products").then((res) => {
      res.data.fullCart.forEach((element) => {
        element.qty = 1;
      });
      setitems({
        ...items,
        fetched: res.data.fullCart,
      });
    });
  }, [products]); // eslint-disable-line react-hooks/exhaustive-deps

  const stateInit = () => {
    setitems({
      ...items,
      init: true,
    });
  };

  const removeItem = (item) => {
    dispatch(removeFromCart(item._id));
    var itm = items.fetched.indexOf(item);
    items.fetched.splice(itm, 1);
    stateInit();
  };

  const submitOrder = () => {
    console.log(items.fetched);
  };

  const [totalsArray, settotalsArray] = useState({
    total: [],
    fig: 0,
    initialized: false,
  });
  items.fetched.forEach((element) => {
    var price = parseInt(element.price.replace(/[^\d.-]/g, ""), 10);
    element.itmTotal = price * element.qty;
    totalsArray.total.push(element.itmTotal);
    console.log(element);
  });

  // settotalsArray({
  //   ...totalsArray,
  //   fig: totalsArray.total.reduce((a, b) => a + b, 0),
  // });

  console.log(totalsArray.total.reduce((a, b) => a + b, 0));
  return (
    <div
      style={{
        marginLeft: margin,
        marginRight: margin,
      }}
    >
      <Topnav />
      <table>
        <tbody>
          <tr>
            <th>
              <Cart /> Item
            </th>
            <th>
              <Hash /> Quantity
            </th>
            <th>
              <Cash /> Price
            </th>
            <th>
              <Trash /> Delete
            </th>
          </tr>
          {items.fetched.map((item) => (
            <tr>
              <td>
                <img
                  style={{ height: "50px", width: "auto" }}
                  src={item.images[0]}
                />
              </td>
              <td>
                <Button
                  style={{
                    backgroundColor: "white",
                    border: "1px solid white",
                    padding: 0,
                  }}
                  onClick={() => {
                    if (item.qty > 1) {
                      item.qty = item.qty - 1;
                      stateInit();
                    }
                  }}
                >
                  <ArrowLeft color="black" />
                </Button>{" "}
                <b>{item.qty}</b>{" "}
                <Button
                  style={{
                    backgroundColor: "white",
                    border: "1px solid white",
                    padding: 0,
                  }}
                  onClick={() => {
                    item.qty = item.qty + 1;
                    stateInit();
                  }}
                >
                  <ArrowRight color="black" />
                </Button>
              </td>
              <td>{item.price}</td>

              <td>
                <Button
                  style={{
                    backgroundColor: "white",
                    border: "1px solid white",
                  }}
                  onClick={() => removeItem(item)}
                >
                  <Trash color="black" />
                </Button>
              </td>
            </tr>
          ))}
          {products.length > 0 ? (
            <tr>
              <td>
                <i>Shipping fees</i>
              </td>
              <td></td>
              <td>
                <i>ksh. 200</i>
              </td>
              <td></td>
            </tr>
          ) : null}
          {products.length > 0 ? (
            <tr>
              <td>
                <b>Total</b>
              </td>
              <td></td>
              <td style={{ fontSize: "normal", borderLeft: "1px solid white" }}>
                <b>ksh. {"600"}</b>
              </td>
              <td></td>
            </tr>
          ) : (
            <div
              style={{ fontSize: 18, color: "red" }}
              className="d-flex justify-content-center"
            >
              <b>
                <i>Your Cart is Empty</i>
              </b>
            </div>
          )}
        </tbody>
      </table>
      <br />
      {products.length > 0 ? (
        <span style={{ float: "right" }}>
          <Button onClick={() => submitOrder()}>Place Order</Button>
        </span>
      ) : null}
    </div>
  );
}

export default useCart;
