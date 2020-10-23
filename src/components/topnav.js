import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const Topnav = ()=>{
  return(
    <div>
    <Navbar bg="light">
      <Navbar.Brand href="#">MyHome</Navbar.Brand>
      <Nav className="mr-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/register">Register</Nav.Link>
      <Nav.Link href="/about">About</Nav.Link>
      <Nav.Link href="/more">More</Nav.Link>
      </Nav>
    </Navbar>
      <hr/>
    </div>
  );
}
 export default Topnav;
