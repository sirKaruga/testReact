import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
//import { BrowserRouter, Route, Navlink } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';

const Topnav = ()=>{
  return(
    <Container>
    <Navbar bg="light">
      <Navbar.Brand href="#">MyHome</Navbar.Brand>
      <Nav className="mr-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/register">Register</Nav.Link>
      <Nav.Link href="/about">About</Nav.Link>
      <Nav.Link href="/more">More</Nav.Link>
      </Nav>
    </Navbar>
    </Container>
  );
}
 export default Topnav;
