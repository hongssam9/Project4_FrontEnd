import React from "react";
import { Link, Route, useHistory } from "react-router-dom";
import { FcAbout } from "react-icons/fc";
import { VscAccount } from "react-icons/vsc";
import { Button, Container, Col, Navbar, Nav } from "react-bootstrap";
import Account from "./Account";
import About from "./About";
import Messages from "./Messages";
import { FiMessageSquare } from "react-icons/fi";
import { BsInfoSquare } from "react-icons/bs";
import Login from "./Login";
import { BiDoorOpen } from "react-icons/bi";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { RiHome3Fill } from "react-icons/ri";
import { AiOutlinePlus } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import "./Navbar.css"

const Settings = () => {
  // Might need to use <Col> to create a single veritcal stack of menu items

  return (
    <div>
      <Navbar
        bg="dark"
        variant="dark"
        expand="lg"
        sticky="top"
        className="mb-5"
        id="navbar"
      >
        <Container fluid>
          <Navbar.Brand className="navbar-logo" href="/">
            SoCap
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
        <h1 className="my-4">Settings</h1>
        <div class="d-flex flex-column">
          <Button
            variant="outline-*"
            href="/Account"
            className="text-start"
            component={Account}
          >
            <VscAccount size={25} /> Account Info
          </Button>
          <hr />

          <Button
            variant="outline-*"
            href="/About"
            className="text-start"
            component={About}
          >
            <BsInfoSquare size={22} /> About
          </Button>
          <hr />

          <Button
            variant="outline-*"
            href="/Messages"
            className="text-start"
            component={Messages}
          >
            <FiMessageSquare size={25} /> Messages
          </Button>
          <hr />
          <Button
            variant="outline-*"
            href="/Login"
            className="text-start"
            component={Login}
          >
            <BiDoorOpen size={25} /> Sign Out
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
    </div>
  );
};

export default Settings;

/*

Account
About

Extended MVP
Search
Messages
Dark/Light Mode */
