import React, { useState } from "react";
import { Card, Button, Form, InputGroup, FormControl } from "react-bootstrap";
import { FaUser } from "react-icons/fa";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";

const useVendorLogin = () => {
  const [inputs, setInputs] = useState({
    user: "",
    password: "",
  });
  const [err, seterr] = useState(false);

  const onChange = (e) => {
    e.preventDefault();
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    axios({
      method: "post",
      withCredentials: true,
      data: inputs,
      url: "http://localhost:9000/vendorlogin",
    }).then((res) => {
      if (res.data.message === "success") {
        sessionStorage.setItem("wasilishaVendor", inputs.user.toString());
        seterr(true);
      } else {
        alert(
          "Phone and/or password you entered does not match any of our records"
        );
      }
    });
  };

  if (err === true) {
    return <Redirect to="/vendor/home" />;
  }
  return (
    <div className="d-flex justify-content-center" style={{ float: "center" }}>
      <Card style={{ width: "28rem", backgroundColor: "beige" }}>
        <Card.Body>
          <Card.Title className="d-flex justify-content-center">
            <div style={{ display: "block" }}>
              <Card.Img
                style={{ width: 400, maxHeight: 200 }}
                src={require("../../images/vendor.jpg")}
                alt="avarter"
              />
              <div className="d-flex justify-content-center">
                {" "}
                Vendor Log In
              </div>
            </div>
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
            <Link to="/vendor/vendorSignup">Sign Up</Link>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default useVendorLogin;
