import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import Image from 'react-bootstrap/Image'
import { BsGoogle, BsApple } from 'react-icons/bs'


function Login(props) {
  return (
    <div>
       <img src = "https://clipart.info/images/minicovers/1516920570Instagram-logo-version-2.png" alt="logo" className="p-3" fluid>
        </img> 

      <Form className = "p-5">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Form.Text className="text-muted">
            Forgot password?
          </Form.Text>

        <Button variant="outline-primary" type="submit">
          Login
        </Button>

        <Form.Text className="text-muted">
            Sign up
          </Form.Text>

          <Button variant="outline-danger" type="submit">
          Login with <BsGoogle />
        </Button>

        <Button variant="outline-*" type="submit">
          Login with <BsApple />
        </Button>
      </Form>
      
    </div>
  );
}

export default Login;
