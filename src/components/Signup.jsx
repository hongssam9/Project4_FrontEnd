import React, { useState, useEffect } from "react";
import { Button, Form, Col, Row } from "react-bootstrap";
import { FcGoogle } from "react-icons/fc";
import { BsApple } from "react-icons/bs";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import logo from "./Image/P4_Logo.png";
import "./Signup.css";

const Signup = ({setErrors}) => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
    confirmpwd: "",
    email: "",
  });
  const handleChange = (ev) =>
    setCredentials({ ...credentials, [ev.target.name]: ev.target.value });

  const options = {
    headers: { "Content-Type": "application/json" },
    method: "POST",
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    fetch(process.env.REACT_APP_API_URL + "api/signup/", {
      ...options,
      body: JSON.stringify(credentials),
    })
      .then((res) => {
        const json = res.json();
        if (res.ok) {
          setErrors({})
          return json
        }
        else {
          return json.then((err) => {
            const errors = { errors: err, status: res.status }
            setErrors(errors)
            return errors
          });
        }
      })
      .then((json) => console.log(json));
    console.log(credentials);
  };

  return (
    <div>
      <img className="mt-5" src={logo} alt="logo" id="logo" fluid />
      <Form className="p-5" action="" onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control
            onChange={handleChange}
            type="username"
            name="username"
            value={credentials.username}
            placeholder="Username"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail" required>
          <Form.Label>Email</Form.Label>
          <Form.Control
            onChange={handleChange}
            type="email"
            name="email"
            value={credentials.email}
            placeholder="Enter email"
          />
        </Form.Group>

        <Form.Group className="mb-4" controlId="formBasicPassword" required>
          <Form.Label>Password</Form.Label>
          <Form.Control
            onChange={handleChange}
            type="password"
            name="password"
            value={credentials.password}
            placeholder="Password"
          />
        </Form.Group>

        <Form.Group
          className="mb-4"
          controlId="formBasicPasswordConfirm" /* What's this for???? */
          required
        >
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            onChange={handleChange}
            type="password"
            name="confirmpwd"
            value={credentials.confirmpwd}
            placeholder="Password"
          />
        </Form.Group>

        <Col>
          <Col>
            <Button variant="outline-primary" type="submit" className="mb-3">
              Sign Up!
            </Button>
            <h3>Or</h3>
          </Col>

          <Row className="mb-5 mt-3">
            <Col>
              <Button variant="outline-danger" type="submit" className="p-1">
                Sign Up with <FcGoogle size={17} />
              </Button>
            </Col>
            <Col>
              <Button variant="outline-secondary" type="submit" className="p-1">
                Sign Up with <BsApple size={17} />
              </Button>
            </Col>
          </Row>
          <Col>
            <a className="nav-link text-success" href="./Login">
              <MdOutlineArrowBackIosNew size={30} />
            </a>
          </Col>
        </Col>
      </Form>
    </div>
  );
};

export default Signup;
