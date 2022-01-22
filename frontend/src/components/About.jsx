import React, { Link } from "react-router-dom";
import { Container, Button, Navbar, Nav } from "react-bootstrap";
import {
  BsGithub,
  BsLinkedin,
  BsInstagram,
  BsGlobe,
  BsFillPersonFill,
} from "react-icons/bs";
import { RiHome3Fill } from "react-icons/ri";
import { AiOutlinePlus } from "react-icons/ai";
import "./Navbar.css";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import logo from "./Image/P4_Logo.png";
import Xuyen from "./Image/Xuyen.png";
import Tad from "./Image/Tad.png";
import Sam from "./Image/Sam.png";

import "./About.css";

const About = () => {
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
          <a className="nav-link text-secondary" href="./Settings">
            <MdOutlineArrowBackIosNew size={20} />
          </a>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/Settings">Settings</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container fluid>
        <img src={logo} alt="logo" id="logo" fluid />
        <h1 className="my-3">Hello!</h1>
        <h4>
          Do you have anything you're proud of and want to share with your
          friends? Welcome to SoCap, Software Caption, a simple yet interactive
          app that will allow you, the user, to show off your best work!
        </h4>
        <p>
          Whether you're an engineer, musician, cook, photgrapher, etc., post up
          your work to get feedback, suggestions, inquries, and compliments!
        </p>
        <nav>
          <Link to="/Terms">Terms of Use</Link>
        </nav>
        <h3 className="mt-5">SoCap Created by</h3>
        <hr />
        <h3>
          Tad Smith
          <img
            src={Tad}
            alt="Tad"
            id="profile"
            className="rounded-circle border border-muted border-3"
            fluid
          />
        </h3>
        <Button
          target="_blank"
          href="https://github.com/tadsmyth"
          variant="outline-*"
        >
          {" "}
          <BsGithub size={35} className="m-1" />
        </Button>
        <Button
          target="_blank"
          href="https://www.linkedin.com/in/thaddeus-smith/"
          variant="outline-*"
        >
          <BsLinkedin size={35} className="m-1" />
        </Button>
        <Button
          target="_blank"
          href="https://www.instagram.com/tadsmyth/"
          variant="outline-*"
        >
          <BsInstagram size={35} className="m-1" />
        </Button>
        <Button target="_blank" href="" variant="outline-*">
          <BsGlobe size={35} className="m-1" />
        </Button>
        <hr />
        <h3>Xuyen Hoang
        <img
            src={Xuyen}
            alt="Xuyen"
            id="profile"
            className="rounded-circle border border-muted border-3"
            fluid
          />
        </h3>
        <Button target="_blank" href="" variant="outline-*">
          {" "}
          <BsGithub size={35} className="m-1" />
        </Button>
        <Button target="_blank" href="" variant="outline-*">
          <BsLinkedin size={35} className="m-1" />
        </Button>
        <Button target="_blank" href="" variant="outline-*">
          <BsInstagram size={35} className="m-1" />
        </Button>
        <Button target="_blank" href="" variant="outline-*">
          <BsGlobe size={35} className="m-1" />
        </Button>
        <hr />
        <h3>Samuel Hong
        <img
            src={Sam}
            alt="Sam"
            id="profile"
            className="rounded-circle border border-muted border-3"
            fluid
          />
        </h3>
        <Button
          target="_blank"
          href="https://github.com/hongssam9"
          variant="outline-*"
        >
          {" "}
          <BsGithub size={35} className="m-1" />
        </Button>
        <Button
          target="_blank"
          href="https://www.linkedin.com/in/hongssam9/"
          variant="outline-*"
        >
          <BsLinkedin size={35} className="m-1" />
        </Button>
        <Button
          target="_blank"
          href="https://www.instagram.com/hong_ssam9/"
          variant="outline-*"
        >
          <BsInstagram size={35} className="m-1" />
        </Button>
        <Button
          target="_blank"
          href="https://www.thehongssam.com/"
          variant="outline-*"
        >
          <BsGlobe size={35} className="m-1" />
        </Button>
        <hr />
      </Container>
      <footer>
        <p>app design / logo &copy; 2021 Lonely Food, LLC</p>
      </footer>
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

export default About;
