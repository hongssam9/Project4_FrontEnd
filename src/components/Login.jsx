import React, { useState, useEffect } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import { BsGoogle, BsApple } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import logo from "./Image/P4_Logo.png";
import "./Login.css";
import { apiLogin } from "../api/api.js";

function Login({ setErrors, setToken}) {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const handleChange = (ev) =>
    setCredentials({ ...credentials, [ev.target.name]: ev.target.value });

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    const response = await apiLogin("api/token/", credentials);
    console.log("submit response:",response);
  };

  return (
    <div>
      <div className="my-5">
        <h2>Welcome to</h2>
        <h1>SoCap</h1>
      </div>
      <img src={logo} alt="logo" id="logo" fluid></img>

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

        <Form.Group className="mb-4" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            onChange={handleChange}
            type="password"
            name="password"
            value={credentials.password}
            placeholder="Password"
          />
        </Form.Group>

        <Col>
          <Col>
            <Button variant="outline-primary" type="submit" className="mb-3">
              Login
            </Button>
          </Col>
          <hr className="m-1"></hr>
          <Row className="mb-5 mt-3">
            <Col>
              <Button variant="outline-danger" type="submit">
                Login with <FcGoogle size={17} />
              </Button>
            </Col>
            <Col>
              <Button variant="outline-secondary" type="submit">
                Login with <BsApple size={17} />
              </Button>
            </Col>
          </Row>
        </Col>
        <Col className="mb-3">
          <Button variant="outline-*" className="text-muted" href="/ForgotPass">
            Forgot password?
          </Button>
        </Col>
        <Button className="text-muted" variant="outline-*" href="/signup">
          Sign up
        </Button>
      </Form>
    </div>
  );
}

export default Login;
