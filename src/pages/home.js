import React from 'react';
import { Card, Row, Col, Container } from 'react-bootstrap';

export default function Home(){
  return(
    <Container style={{minHeight:"70vh"}}>
        <Row>
          <Col>
            <h1>Welcome Home</h1>
          </Col>
        </Row>
        <br/>
        <Row>
          <Col sm="12" md="6">
            <Card>
            <h3>App Contents</h3>
            <ul>five routes</ul>
            <ul>global state</ul>
            <ul>Simple styling</ul>
            <ul>a few more things</ul>
            </Card>
          </Col>
          <Col sm="12" md="6">
            <h3>Navigation</h3>
            <ul>Home</ul>
            <ul>about</ul>
            <ul>Register</ul>
            <ul>More</ul>
          </Col>
        </Row>
        <br/>
        <Row>
        <Col><p>Thank you for your time</p></Col>
        </Row>
        </Container>

  );
}
