import React, { useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import windowSize from "../../components/windowSize";
import axios from "axios";
import apiCalls from "../../components/apiCalls";
import { Redirect } from "react-router";

export default function usePost() {
  const margin = windowSize().width > 768 ? "7em" : 0;
  const [loader, setloader] = useState(false);
  const [err, seterr] = useState({
    name: null,
    price: null,
    cartegory: null,
    description: null,
    img: null,
    redirectVendor: false,
  });
  const [tempUrls, settempUrls] = useState({
    img1: null,
    img2: null,
    img3: null,
    img4: null,
    img5: null,
    img6: null,
  });
  const [files, setFiles] = useState({
    img1: null,
    img2: null,
    img3: null,
    img4: null,
    img5: null,
    img6: null,
  });
  const wasilishaUser = sessionStorage.getItem("wasilishaVendor")
    ? sessionStorage.getItem("wasilishaVendor")
    : null;
  const [inputs, setinputs] = useState({
    name: "",
    price: "",
    description: "",
    cartegory: "Phones",
    phone: wasilishaUser,
  });

  const [fl, setfl] = useState([]);

  //handle image change
  var handleChange = (e) => {
    if (files.img1 === null) {
      fl.push(e.target.files[0]);
      setFiles({
        ...files,
        img1: e.target.files[0],
      });
      settempUrls({
        ...tempUrls,
        img1: URL.createObjectURL(e.target.files[0]),
      });
    } else if (files.img2 === null) {
      fl.push(e.target.files[0]);
      setFiles({
        ...files,
        img2: e.target.files[0],
      });
      settempUrls({
        ...tempUrls,
        img2: URL.createObjectURL(e.target.files[0]),
      });
    } else if (files.img3 === null) {
      fl.push(e.target.files[0]);
      setFiles({
        ...files,
        img3: e.target.files[0],
      });
      settempUrls({
        ...tempUrls,
        img3: URL.createObjectURL(e.target.files[0]),
      });
    } else if (files.img4 === null) {
      fl.push(e.target.files[0]);
      setFiles({
        ...files,
        img4: e.target.files[0],
      });
      settempUrls({
        ...tempUrls,
        img4: URL.createObjectURL(e.target.files[0]),
      });
    } else if (files.img5 === null) {
      fl.push(e.target.files[0]);
      setFiles({
        ...files,
        img5: e.target.files[0],
      });
      settempUrls({
        ...tempUrls,
        img5: URL.createObjectURL(e.target.files[0]),
      });
    } else if (files.img6 === null) {
      fl.push(e.target.files[0]);
      setFiles({
        ...files,
        img6: e.target.files[0],
      });
      settempUrls({
        ...tempUrls,
        img6: URL.createObjectURL(e.target.files[0]),
      });
    }

    // end on iamge change function
  };

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

    if (files.img2 === null) {
      seterr({
        ...err,
        img: "Please add atleast 2 images",
      });
    }

    if (
      files.img1 !== null &&
      files.name !== "" &&
      files.cartegory !== "" &&
      files.price !== "" &&
      files.description !== ""
    ) {
      setloader(true);
      //adding data to form data
      let data = new FormData();
      fl.forEach((element) => {
        data.append("img" + fl.indexOf(element), element);
      });

      axios({
        method: "post",
        url: "http://goodmail.wasilisha.com/",
        // withCredentials: true,
        data: data,
        headers: {
          "content-type": "multipart/form-data",
        },
      }).then((res) => {
        inputs.images = res.data;
        // a call iside call
        apiCalls(inputs, "/postproduct")
          .then((response) => {
            //setloader(false);
            if (response.data.message === "success") {
              alert("Product posted successfully");
              setloader(false);
              seterr({
                ...err,
                redirectVendor: true,
              });
            }
          })
          .catch((err) => {
            console.log(err);
          });
        // a call iside call end
      });
    } else {
      alert("All fields marked with * have to be filled to continue");
    }
  };
  if (inputs.phone === null) {
    return <Redirect to="/vendor/login" />;
  }

  if (err.redirectVendor === true) {
    return <Redirect to="/vendor/home" />;
  }
  if (loader === true) {
    return (
      <img
        className="d-flex justify-content-center"
        style={{ margin: "auto", paddingTop: "20vh", maxWidth: "100vw" }}
        src={require("../../images/loader.gif")}
      />
    );
  } else {
    return (
      <Card style={{ marginRight: margin, marginLeft: margin }}>
        <Card.Title>Create add</Card.Title>
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

            <Form.Group>
              <Form.Label>
                Images<span style={{ color: "red" }}>*</span>
              </Form.Label>
              <br />
              <label
                htmlFor="filePicker"
                style={{
                  background: "blue",
                  color: "white",
                  padding: "5px 10px",
                }}
              >
                {files.img1 === null
                  ? "Choose Images for your item"
                  : "Click me to add another Image!"}
              </label>
              <input
                style={{ visibility: "hidden" }}
                id="filePicker"
                type={"file"}
                name="files"
                multiple
                onChange={handleChange}
              />
              {files.img2 === null ? (
                <Form.Text style={{ color: "red" }}>{err.img}</Form.Text>
              ) : null}

              <div>
                <img
                  style={{
                    height: files.img1 !== null ? "100px" : "0px",
                    width: "auto",
                  }}
                  src={tempUrls.img1}
                />
                <img
                  style={{
                    height: files.img2 !== null ? "100px" : "0px",
                    width: "auto",
                  }}
                  src={tempUrls.img2}
                />
                <img
                  style={{
                    height: files.img3 !== null ? "100px" : "0px",
                    width: "auto",
                  }}
                  src={tempUrls.img3}
                />
                <img
                  style={{
                    height: files.img4 !== null ? "100px" : "0px",
                    width: "auto",
                  }}
                  src={tempUrls.img4}
                />
                <img
                  style={{
                    height: files.img5 !== null ? "100px" : "0px",
                    width: "auto",
                  }}
                  src={tempUrls.img5}
                />
                <img
                  style={{
                    height: files.img6 !== null ? "100px" : "0px",
                    width: "auto",
                  }}
                  src={tempUrls.img6}
                />
              </div>
            </Form.Group>
            <Button onClick={submit}> Upload Product</Button>
          </Form>
        </Card.Body>
      </Card>
    );
  }
}
