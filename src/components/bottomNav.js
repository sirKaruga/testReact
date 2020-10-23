import React from 'react';
import { Row, Col } from 'react-bootstrap';
import  './nav.css';
import { NavLink } from 'react-router-dom';


const bottomNav = ()=>{
  return(
<>

  <div className="bottomNav">
    <Row>
      <Col md="3" sm="6">
        <h5 className="links">Contacts</h5>
        <ul><a className="links" href="google.com">e-mail: tonnydennis443@gmail.com</a></ul>
        <ul><a href="google.com">Contact: +254733 345 6780</a></ul>
      </Col>
      <Col md="3" sm="6">
        <h5 className="links">Pages</h5>
        <ul><NavLink activeStyle={{color:"red"}} className="links" to="/">Home</NavLink><br/>
        <NavLink activeStyle={{color:"red"}} className="links" to="/more">More</NavLink><br/>
        <NavLink activeStyle={{color:"red"}} className="links" to="/register">Register</NavLink><br/>
        <NavLink activeStyle={{color:"red"}} className="links" to="/about">About</NavLink></ul>
      </Col>

      <Col md="3" sm="6">
        <h5 className="links">About</h5>
        <ul><a href="google.com">Its nice being here</a></ul>
      </Col>

    </Row>


  </div>

</>
  );
}

export default bottomNav;
