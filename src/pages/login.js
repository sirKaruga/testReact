import React, { useState } from "react";
import { Card, Button, Form, InputGroup, FormControl } from "react-bootstrap";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
  const [inputs, setInputs] = useState({
    user: "",
    password: "",
  });

  const onChange = (e) => {
    e.preventDefault();
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
  };
  return (
    <div className="d-flex justify-content-center" style={{ float: "center" }}>
      <Card style={{ width: "28rem" }}>
        <Card.Body>
          <Card.Title>
            <img
              style={{ height: 50 }}
              src={require("../images/avt.jpg")}
              alt="avarter"
            />
            Log In
          </Card.Title>

          <Form>
            <Form.Label>Phone Number</Form.Label>
            {/*  */}
            <InputGroup className="mb-2">
              <InputGroup.Prepend>
                <InputGroup.Text>
                  <FaUser />
                </InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                onChange={onChange}
                name={"user"}
                placeholder="Phone Number"
                value={inputs.user}
              />
            </InputGroup>
            {/*  */}

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                onChange={onChange}
                name={"password"}
                type="password"
                placeholder="Password"
              />
            </Form.Group>
          </Form>

          <Button onClick={onSubmit} variant="primary">
            LogIn
          </Button>
          <Card.Text style={{ float: "right" }}>
            <Link to="/customerLogin">Sign Up</Link>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Login;
