import React, { useState, useEffect } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import { BsGoogle, BsApple } from "react-icons/bs";
import { FcGoogle } from 'react-icons/fc'
import logo from './Image/P4_Logo.png'
import "./Login.css"
function Login() {
  return (
    <div>
     
      <h1 className = "my-5">SoCap</h1>
      <img
        src={logo}
        alt="logo"
        id="logo"
        
        fluid
      ></img>

      <Form className="p-5">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-4" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Col>
          <Col>
            <Button variant="outline-primary" type="submit" className = "mb-3">
              Login
            </Button>
          </Col>
          <hr className = "m-1"></hr>
          <Row className = "mb-5 mt-3">
            <Col>
            
              <Button variant="outline-danger" type="submit">
                Login with <FcGoogle size={17}/>
              </Button>
            </Col>
            <Col>
              <Button variant="outline-secondary" type="submit">
                Login with <BsApple size={17}/>
              </Button>
            </Col>
          </Row>
        </Col>
        <Col className = "mb-3">
          <Button variant='outline-*' className="text-muted" href="/ForgotPass">Forgot password?</Button>
        </Col>
        <Button className="text-muted" variant='outline-*' href="/signup">Sign up</Button>
      </Form>
    </div>
  );
}

export default Login;
