import React from 'react';
import { Button, Form, Col, Row } from 'react-bootstrap'
import { FcGoogle } from 'react-icons/fc';
import { BsApple } from 'react-icons/bs';

const Signup = () => {
    return (
        <div>
        {/* <img
          src="https://clipart.info/images/minicovers/1516920570Instagram-logo-version-2.png"
          alt="logo"
          className="p-5"
          fluid
        ></img> */}
        <h2>welcome to</h2>
        <h1>snapp.r social</h1>
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
              <Button variant="outline-primary" type="submit" className = "mb-3">
                Sign Up!
              </Button>
              <h3>Or</h3>
            </Col>
            
            <Row className = "mb-5 mt-3">
              <Col>
              
                <Button variant="outline-danger" type="submit" className='p-1'>
                  Sign Up with <FcGoogle size={17}/>
                </Button>
              </Col>
              <Col>
                <Button variant="outline-secondary" type="submit" className='p-1'>
                  Sign Up with <BsApple size={17}/>
                </Button>
              </Col>
            </Row>
          </Col>
        </Form>
      </div>
    );
};

export default Signup;