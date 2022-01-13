import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import Image from 'react-bootstrap/Image'


function Home(props) {
  return (
    <div>
       <img src = "https://clipart.info/images/minicovers/1516920570Instagram-logo-version-2.png" alt="logo" className="p-3" fluid>
        </img> 

      <Form className = "p-5">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Button variant="outline-primary" type="submit">
          Login
        </Button>
      </Form>
    </div>
  );
}

export default Home;
