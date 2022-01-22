import React from "react";
import { Button, Form, Col, Row } from "react-bootstrap";
import { FcGoogle } from "react-icons/fc";
import { BsApple } from "react-icons/bs";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import logo from './Image/P4_Logo.png'
import "./Signup.css"

const Signup = () => {
  return (
    <div>
    
      <div className="my-5">
        <h2>Welcome to</h2>
        <h1>SoCap</h1>
      </div>
      <img
          src= {logo}
          alt="logo"
          id = "logo"
      
          fluid
        />
      <Form className="p-5">
        <Form.Group className="mb-3" controlId="formBasicEmail" required>
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-4" controlId="formBasicPassword" required>
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
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
