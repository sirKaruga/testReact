import React, { useState, Component } from "react";
import "../../App.css";
import { Redirect } from "react-router-dom";
import { Card, Row, Col, Form, Button } from "react-bootstrap";
import Avartar from "../../images/avt.jpg";
import { logins } from "../../store/actions/";
import { connect } from "react-redux";

function login(props) {
  const [inputValues, setInputValues] = useState({ email: "", pass: "" });
  const onClickHandler = () => {
    props.myDispatch(inputValues);
  };
  const onChangeHandler = (e) => {
    setInputValues({ ...inputValues, [e.target.name]: e.target.value });
  };
  return (
    <div className="App">
      <Row>
        <Col md="4" sm="none"></Col>
        <Col sm="12" md="4">
          <Card>
            <Card.Title>
              <Card>
                <h1>Log in Here</h1>
              </Card>
            </Card.Title>
            <Card.Img
              style={{
                maxHeight: "10em",
                maxWidth: "10em",
                borderRadius: "40%",
                marginLeft: "8em",
              }}
              src={Avartar}
              alt="Login Avartar"
              variant="top"
            />
            <Card.Body>
              <Card>
                <Form>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                      name="email"
                      value={inputValues.email}
                      type="email"
                      onChnge={onChangeHandler}
                      placeholder="Enter email"
                    />
                  </Form.Group>

                  <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      name="pass"
                      value={inputValues.pass}
                      type="password"
                      onChnge={onChangeHandler}
                      placeholder="Password"
                    />
                  </Form.Group>

                  <Button
                    onClick={onClickHandler}
                    variant="primary"
                    type="submit"
                  >
                    LogIn
                  </Button>
                </Form>
              </Card>
            </Card.Body>
          </Card>
        </Col>
        <Col md="4" sm="none"></Col>
      </Row>
    </div>
  );
}

function mapStateToProps(props) {
  return {
    loggedIn: props.loginData.loggedIn,
    email: props.loginData.email,
    pass: props.loginData.pass,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    myDispatch: (payload) => {
      dispatch(logins(payload));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(login);
