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
    <div>
      <div className="d-none d-lg-inline">
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
      </div>

      <div className="d-lg-none d-sm-inline d-md-inline d-xsm-inline">
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-info">Search</Button>
          </Form>
          <Nav className="mr-auto"></Nav>

          <Nav.Link style={{ color: "white" }} href="#home">
            Home
          </Nav.Link>
        </Navbar>
      </div>
    </div>
  );
};
export default Topnav;
