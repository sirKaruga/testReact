import React, { useEffect, useState } from "react";
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  InputGroup,
} from "react-bootstrap";
import { FaSignInAlt, FaCartPlus, FaSearch } from "react-icons/fa";
import { useSelector } from "react-redux";
import apiCalls from "../apiCalls";
import windowSize from "../windowSize";

const useMobileTopnav = () => {
  const [search, setsearch] = useState(false);
  const [cName, setcName] = useState("");
  const cartSize = useSelector((state) => state.cart.length);
  var customer;
  customer = !sessionStorage.getItem("wasilishaCustomer")
    ? null
    : sessionStorage.getItem("wasilishaCustomer");
  useEffect(() => {
    customer !== null
      ? apiCalls({ phone: customer }, "/find_customer").then((res) => {
          setcName(res.data.items[0].name.split(" ")[0]);
        })
      : setcName("");
  }, []);

  return (
    <Navbar
      style={{
        backgroundColor: "white",
        padding: 0,
        borderBottom: "5px solid blue",
        marginBottom: "1px",
        position: "sticky",
        top: 0,
        zIndex: 1,
        width: windowSize().width,
      }}
    >
      {/* <Navbar.Brand href="/home"> */}
      <img
        style={{
          height: "auto",
          width: "35%",
          float: "left",
          paddingRight: "20px",
        }}
        src={require("../../images/sa.png")}
        alt="img"
      />
      {search === false ? (
        <Button
          style={{ color: "black", borderColor: "white" }}
          variant="outline-secondary"
          onClick={() => setsearch(!search)}
        >
          <FaSearch />
        </Button>
      ) : (
        <Form inline style={{ paddingTop: "1.5em", float: "right" }}>
          <InputGroup className="mb-3">
            <FormControl
              style={{
                maxWidth: "40vw",
                borderTopColor: "white",
                borderLeftColor: "white",
              }}
              placeholder="Search Products..."
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
            <InputGroup.Append>
              <Button style={{ color: "black" }} variant="outline-secondary">
                <FaSearch />
              </Button>
            </InputGroup.Append>
          </InputGroup>
        </Form>
      )}
      <Nav className="mr-auto"></Nav>
      <Nav>
        <Nav.Link href="#deets">
          <i style={{ fontSize: "1.3em" }}>
            <FaCartPlus style={{ color: "red" }} />

            <sup
              style={{
                fontSize: "0.9em",
                color: "blue",
                borderRadius: "60%",
                minWidth: "1em",
              }}
            >
              <b>{cartSize}</b>
            </sup>
          </i>
        </Nav.Link>
        {search === false ? (
          <>
            {cName === "" ? (
              <Nav.Link eventKey={2} href="/login">
                <i style={{ fontSize: "1.3em" }}>
                  <FaSignInAlt />{" "}
                  <span style={{ fontSize: "0.75em" }}>Sign In</span>
                </i>
              </Nav.Link>
            ) : (
              <i style={{ fontSize: "1.3em" }}>
                <span style={{ fontSize: "0.75em", paddingTop: "1.5em" }}>
                  {cName}
                </span>
              </i>
            )}
          </>
        ) : null}
      </Nav>
    </Navbar>
  );
};
export default useMobileTopnav;
