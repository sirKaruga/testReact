import React, { useState } from "react";
import { Card, Form, Col, Button } from "react-bootstrap";
import { Link, Redirect } from "react-router-dom";
import apiCalls from "../../components/apiCalls";

export default function useVendorLogin() {
  const [state, setstate] = useState({
    name: "",
    phone: "",
    location: "",
    email: "",
    password: "",
    password2: "",
  });

  const [err, setErr] = useState({
    name: "",
    phone: "",
    location: "",
    email: "",
    password: "",
    password2: "",
    redirect: false,
  });

  const onChange = (e) => {
    e.preventDefault();
    setstate({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (state.phone === "") {
      setErr({
        ...err,
        phone: "this field is required",
      });
    }
    if (
      state.name !== "" &&
      state.phone !== "" &&
      state.location !== "" &&
      state.password !== "" &&
      state.password2 !== ""
    ) {
      apiCalls(state, "/vendorregister").then((res) => {
        if (res.data.message === "success") {
          sessionStorage.setItem("wasilishaVendor", state.phone.toString());
          setErr({
            ...err,
            redirect: true,
          });
        } else {
          alert(
            "Phone you entered is already registered in the system. Use it to log in instead"
          );
        }
      });
    } else {
      alert("all fields with errors have to e filled before you continue");
    }
  };

  const onEndEditing = (e) => {
    if (e.target.value === "") {
      setErr({
        ...err,
        [e.target.name]: "this field is required",
      });
    } else {
      setErr({
        ...err,
        [e.target.name]: "",
      });
    }
    if (e.target.name === "password2") {
      if (e.target.value !== state.password) {
        setErr({
          ...err,
          password2: "password does not match with the first one",
        });
      } else {
        setErr({
          ...err,
          password2: "",
        });
      }
    }
  };

  if (err.redirect === true) {
    return <Redirect to="/vendor/home" />;
  }
  return (
    <div className="d-flex justify-content-center" style={{ float: "center" }}>
      <Card style={{ width: "40rem", backgroundColor: "beige" }}>
        <Card.Title>Vendor Registration</Card.Title>
        <Card.Body>
          <Form>
            <Form.Row>
              <Col xs={7}>
                <Form.Control
                  onChange={onChange}
                  value={state.name}
                  onBlur={onEndEditing}
                  name="name"
                  placeholder="Name"
                />
                {err.name === "" ? null : (
                  <Form.Text style={{ color: "red" }}>{err.name}</Form.Text>
                )}
              </Col>
              <Col>
                <Form.Control
                  onChange={onChange}
                  onBlur={onEndEditing}
                  value={state.phone}
                  name="phone"
                  placeholder="Phone Number"
                />
                {err.phone === "" ? null : (
                  <Form.Text style={{ color: "red" }}>{err.phone}</Form.Text>
                )}
              </Col>
            </Form.Row>
            <br />

            <Form.Row>
              <Form.Label column lg={2}>
                Location
              </Form.Label>
              <Col>
                <Form.Control
                  type="text"
                  value={state.location}
                  onBlur={onEndEditing}
                  onChange={onChange}
                  name="location"
                  placeholder="e.g. Nairobi, Westlands"
                />
                {err.location === "" ? null : (
                  <Form.Text style={{ color: "red" }}>{err.location}</Form.Text>
                )}
              </Col>
            </Form.Row>
            <br />

            <Form.Row>
              <Form.Label column lg={2}>
                E-mail (Optional)
              </Form.Label>
              <Col>
                <Form.Control
                  onChange={onChange}
                  value={state.email}
                  name="email"
                  type="text"
                  placeholder="e.g. ab12@gmail.com"
                />
              </Col>
            </Form.Row>

            <Form.Row>
              <Form.Label column lg={2}>
                Set Password
              </Form.Label>
              <Col>
                <Form.Control
                  onChange={onChange}
                  onBlur={onEndEditing}
                  name="password"
                  value={state.password}
                  type="password"
                  placeholder="password"
                />
                {err.password === "" ? null : (
                  <Form.Text style={{ color: "red" }}>{err.password}</Form.Text>
                )}
              </Col>
            </Form.Row>

            <Form.Row>
              <Form.Label column lg={2}>
                Repeat Password
              </Form.Label>
              <Col>
                <Form.Control
                  onChange={onChange}
                  onBlur={onEndEditing}
                  value={state.password2}
                  name="password2"
                  type="password"
                  placeholder="password"
                />
                {err.password2 === "" ? null : (
                  <Form.Text style={{ color: "red" }}>
                    {err.password2}
                  </Form.Text>
                )}
              </Col>
            </Form.Row>
            <br />
            <Button onClick={onSubmit}>Submit Info</Button>
            <Card.Text style={{ float: "right" }}>
              <Link to="/vendor/login">LogIn</Link>
            </Card.Text>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}
