import React, { useState } from "react";
import "../../App.css";
import { Card, Row, Col, Form, Button } from "react-bootstrap";
import Avartar from "../../images/avt.jpg";
import { logins } from "../../store/actions/";
import { useSelector, useDispatch } from "react-redux";

function useInput(initialValue) {
  const [value, setValue] = useState(initialValue);

  const reset = (initialValue) => {
    setValue(initialValue);
  };

  const bind = {
    value,
    onChange: (e) => {
      setValue(e.target.value);
    },
  };

  return [value, bind, reset];
}

function useLogin() {
  const [email, bindEmail, resetEmail] = useInput("");
  const [pass, bindPass, resetPass] = useInput("");

  const dispatch = useDispatch();
  const myData = useSelector((state) => state);
  console.log(myData);

  const onClickHandler = (e) => {
    e.preventDefault();
    dispatch(logins({ email: email, pass: pass }));
    resetPass();
    resetEmail();
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
                      type="email"
                      {...bindEmail}
                      placeholder="Enter email"
                    />
                  </Form.Group>

                  <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      name="pass"
                      type="password"
                      {...bindPass}
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

export default useLogin;
