import React from "react";
import { Navbar } from "react-bootstrap";

export default function dashboardNavbar() {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">Admin's Dashboard</Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text>Awsome View. My topNav</Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
  );
}
