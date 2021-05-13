import React, { useEffect, useState } from "react";
import {
  Cart,
  Trash,
  Cash,
  Hash,
  ArrowLeft,
  ArrowRight,
} from "react-bootstrap-icons";
import windowSize from "../components/windowSize";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "react-bootstrap";
import Topnav from "../components/topnav";
import apiCall from "../components/apiCalls";
import { removeFromCart } from "../store/actions/";
import { Redirect } from "react-router";

function useCart() {
  const [tologin, settologin] = useState(false);
  const margin = windowSize().width > 998 ? "7em" : null;
  const [items, setitems] = useState({
    fetched: [],
    call: false,
  });
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart);
  const all = useSelector((state) => state);

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
    localStorage.removeItem("persist:root");
  };

  const [ToHome, setToHome] = useState(false);
  const submitOrder = () => {
    const vendor = sessionStorage.getItem("wasilishaCustomer");
    if (vendor === null) {
      settologin(true);
    } else {
      apiCall(
        { items: items.fetched, CustomerContact: vendor },
        "/place_order"
      ).then((res) => {
        localStorage.removeItem("persist:root");
        if (res.data.message) {
          alert(
            "Orders Placed Successfully. We will contact you soon for Confirmation"
          );
          setToHome(true);
        }
      });
    }
  };

  items.fetched.forEach((element) => {
    var price = parseInt(element.price.replace(/[^\d.-]/g, ""), 10);
    element.itmTotal = price * element.qty;
  });

  // a for amount
  var a = 0;
  for (let i = 0; i < items.fetched.length; i++) {
    a = a + items.fetched[i].itmTotal;
  }

  if (tologin === true) {
    return <Redirect to="/login" />;
  }

  if (ToHome === true) {
    return <Redirect to="/" />;
  }

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
            <tr key={item._id}>
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
              <td>.</td>
            </tr>
          ) : null}
          {products.length > 0 ? (
            <tr>
              <td>
                <span style={{ fontSize: 20 }}>
                  {" "}
                  <b>Total</b>
                </span>
              </td>
              <td></td>
              <td style={{ fontSize: "normal", borderLeft: "1px solid white" }}>
                <span style={{ fontSize: 20 }}>
                  <b>ksh. {a}</b>
                </span>
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
        <div>
          <span style={{ fontSize: 18 }}>
            <b>
              <i>Shipping Fees</i>
            </b>
          </span>
          <span
            className="d-flex justify-content-center"
            style={{ fontSize: 18, float: "center" }}
          >
            <b>200</b>
          </span>
        </div>
      ) : null}
      <br />
      {products.length > 0 ? (
        <div style={{ backgroundColor: "beige" }}>
          <span style={{ fontSize: 24 }}>
            <b>
              <i>Grand Total</i>
            </b>
          </span>
          <span
            className="d-flex justify-content-center"
            style={{ fontSize: 24, float: "center" }}
          >
            <b> Ksh. {a + 200}</b>
          </span>
        </div>
      ) : null}
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
