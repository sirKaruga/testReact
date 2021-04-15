import React from "react";
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  InputGroup,
} from "react-bootstrap";
import { FaSignInAlt, FaCartPlus } from "react-icons/fa";
import { useSelector } from "react-redux";

const useTopnav = () => {
  const cartSize = useSelector((state) => state.cart.length);

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
      }}
    >
      {/* <Navbar.Brand href="/home"> */}
      <img
        style={{
          height: "auto",
          width: "20%",
          float: "left",
          paddingRight: "20px",
        }}
        src={require("../images/sa.png")}
        alt="img"
      />
      {/* </Navbar.Brand> */}
      <Form inline style={{ paddingTop: "1.5em", float: "right" }}>
        <InputGroup className="mb-3">
          <FormControl
            style={{ maxWidth: "30vw" }}
            placeholder="Search Products, Brands.."
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
          <InputGroup.Append>
            <Button style={{ color: "black" }} variant="outline-secondary">
              Search
            </Button>
          </InputGroup.Append>
        </InputGroup>
      </Form>

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
        <Nav.Link eventKey={2} href="#memes">
          <i style={{ fontSize: "1.3em" }}>
            <FaSignInAlt /> <span style={{ fontSize: "0.75em" }}>Sign In</span>
          </i>
        </Nav.Link>
      </Nav>
    </Navbar>
  );
};
export default useTopnav;
