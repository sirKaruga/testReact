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
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="/home">Wasilisha</Navbar.Brand>
        <Form inline style={{ paddingTop: "1em", float: "right" }}>
          <InputGroup className="mb-3">
            <FormControl
              style={{ maxWidth: "30vw" }}
              placeholder="Search Products, Brands.."
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
            <InputGroup.Append>
              <Button style={{ color: "white" }} variant="outline-secondary">
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
                  background: "darkblue",
                  color: "white",
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
              <FaSignInAlt />{" "}
              <span style={{ fontSize: "0.75em" }}>Sign In</span>
            </i>
          </Nav.Link>
        </Nav>
      </Navbar>
      <hr />
    </>
  );
};
export default useTopnav;
