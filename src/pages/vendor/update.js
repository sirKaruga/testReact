import React, { useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import windowSize from "../../components/windowSize";
import axios from "axios";
import { useHistory } from "react-router-dom";

export default function usePost(props) {
  const history = useHistory();
  var items = props.location.state.data;
  const margin = windowSize().width > 768 ? "7em" : 0;
  const [err, seterr] = useState({
    name: null,
    price: null,
    cartegory: null,
    description: null,
  });

  const [inputs, setinputs] = useState({
    name: items.name,
    price: items.price,
    cartegory: items.cartegory,
    description: items.description,
    _id: items._id,
  });

  //handle image change

  const onChange = (e) => {
    setinputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  const onEndEdit = (e) => {
    if (e.target.value === null || e.target.value === "") {
      seterr({
        ...err,
        [e.target.name]: "please fill this field",
      });
    } else {
      seterr({
        ...err,
        [e.target.name]: null,
      });
    }
  };

  const submit = (e) => {
    e.preventDefault();

    if (
      inputs.name !== "" &&
      inputs.cartegory !== "" &&
      inputs.price !== "" &&
      inputs.description !== ""
    ) {
      //adding data to form data

      axios({
        method: "post",
        url: "http://localhost:9000/updateproduct",
        withCredentials: true,
        data: inputs,
      })
        .then((response) => {
          if (response.data === "success") {
            alert("update was successful");
            history.push(`/vendor/allpost`);
          }
        })
        .catch((err) => {
          console.log(err);
        });
      // a call iside call end
    } else {
      alert("All fields marked with * Must not be empty");
    }
  };
  return (
    <Card style={{ marginRight: margin, marginLeft: margin }}>
      <h3>Update Add</h3>
      <Card.Body>
        <Form>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>
              Product Name <span style={{ color: "red" }}>*</span>
            </Form.Label>
            <Form.Control
              name="name"
              value={inputs.name}
              onChange={onChange}
              onBlur={onEndEdit}
              type="text"
              placeholder="enter product name"
            />
            <Form.Text style={{ color: "red" }}>{err.name}</Form.Text>
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>
              Price in ksh.<span style={{ color: "red" }}>*</span>
            </Form.Label>
            <Form.Control
              name="price"
              value={inputs.price}
              onChange={onChange}
              onBlur={onEndEdit}
              type="text"
              placeholder="e.g. 3000"
            />
            <Form.Text style={{ color: "red" }}>{err.price}</Form.Text>
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>
              Category<span style={{ color: "red" }}>*</span>
            </Form.Label>
            <Form.Control
              onChange={onChange}
              value={inputs.cartegory}
              name="cartegory"
              as="select"
            >
              <option>Phones</option>
              <option>Computers</option>
              <option>Tv's</option>
              <option>Accessories</option>
              <option>Furniture</option>
              <option>Others</option>
            </Form.Control>
          </Form.Group>

          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>
              Description<span style={{ color: "red" }}>*</span>
            </Form.Label>
            <Form.Control
              placeholder="Details of your item"
              as="textarea"
              rows={3}
              name="description"
              value={inputs.description}
              onChange={onChange}
              onBlur={onEndEdit}
            />
            <Form.Text style={{ color: "red" }}>{err.description}</Form.Text>
          </Form.Group>

          <Button onClick={submit}> Update Product</Button>
        </Form>
      </Card.Body>
    </Card>
  );
}
