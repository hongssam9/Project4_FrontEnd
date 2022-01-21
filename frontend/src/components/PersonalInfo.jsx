import React from "react";
import { Container, Button, Navbar, Nav } from "react-bootstrap";
import { RiHome3Fill } from "react-icons/ri";
import { AiOutlinePlus } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";

const PersonalInfo = () => {
  return (
    <div>
      <Navbar
        bg="dark"
        variant="dark"
        expand="lg"
        sticky="top"
        className="mb-5"
      >
        <Container fluid>
          <Navbar.Brand className="navbar-logo" href="/">
            snapp.r social
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/Settings">Settings</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="container-fluid">
        <img
          class="rounded-circle border border-info border-3 mb-2"
          src="https://randomuser.me/api/portraits/men/34.jpg"
          alt="profile pic"
        />
        <h1 className="py-3">John Smith</h1>
        <h4 className="outline-primary text-start">
          Username:<em> johntheguy_03</em>
        </h4>
        <hr />
        <h4 className="text-start">Email: jontron@hotmail.net</h4>
        <hr />
        <h4 className="text-start">Phone: 972-559-5000</h4>
        <hr />
        <h4 className="text-start">Gender: Male</h4>
        <hr />
        <h4 className="text-start">Birthday: April 20, 1889</h4>
        <br />
        {/* This button should allow all fields to editable */}
        <Button className="my-2" variant="info">
          Edit Info
        </Button>
      </div>
      <Container fluid className="my-5 py-3">
        <Navbar bg="dark" variant="dark" fixed="bottom">
          <Container>
            <Nav className="m-auto">
              <Nav.Link className="mx-5 nav-item" href="/">
                <RiHome3Fill size={25} />
              </Nav.Link>

              <Button
                className="mx-4 nav-item"
                variant="info"
                href="/UploadImages"
              >
                <AiOutlinePlus size={27} />
              </Button>
              <Nav.Link className="mx-5 nav-item" href="/Userprof">
                <BsFillPersonFill size={27} />
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </Container>
    </div>
  );
};

export default PersonalInfo;
