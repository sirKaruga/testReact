import React from "react";
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  InputGroup,
} from "react-bootstrap";

const Topnav = () => {
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

        <Nav className="mr-auto">
          <Nav.Link href="#features">Features</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href="#deets">More deets</Nav.Link>
          <Nav.Link eventKey={2} href="#memes">
            Dank memes
          </Nav.Link>
        </Nav>
      </Navbar>
      <hr />
    </>
  );
};
export default Topnav;
