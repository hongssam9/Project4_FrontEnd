import React from "react";
import { Container, Navbar, Nav, Button } from "react-bootstrap";
import { RiHome3Fill } from "react-icons/ri";
import { AiOutlinePlus } from "react-icons/ai";
import "./Navbar.css";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import {BsFillPersonFill} from "react-icons/bs";
const Terms = () => {
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
     
      <h1>Terms of Use</h1>
      <p>
        Welcome to SoCap, operated by Lonely Food, LLC ("us", "we", the "Company"
        or "SoCap")
      </p>
      <h2>(1) Acceptance of Terms of Use Agreement</h2>
      <p>
        By creating a SoCap account or by using any SoCap service, whether through
        a mobile device, mobile application or computer (colletively, the
        "Service") you agree to be bound by (i) these Terms of Use, (ii) our
        Privacy Policy, Cookie Policy, Arbitration Procedures, Safety Tips, and
        Community Guidelines, each of which is incorporated by reference into
        this Agreement, and (iii) any terms disclosed to you if you purchase of
        have purchased additional features, products or services we offer on the
        Service (collectively, this "Agreement"). If you do not accept and agree
        to be bound by all of the terms of this Agreement, you should not use
        the Service.
      </p>
      <h2>(2) Eligibility</h2>
      <p>
        You must be at least 18 years of age to create an account on SoCap and
        use the Service. By creating an account and using the service, you
        represent and warrant that:{" "}
      </p>
      <ul>
        <li>You can form a binding contract with SoCap</li>
        <li>
          you are not a person who is barred from using the Service under the
          laws of the United States or any other applicable jurisdiction (for
          example, you do not appear on the U.S. Treasury Department's list of
          Specially Designated Nationals or face any similar prohibition)
        </li>
        <li>
          You will comply with this Agreement and all applicable local, state,
          national, and international laws, rules and regulations
        </li>
        <li>
          You have never been convicted of or pled no contest to a felony, a sex
          crime, or any crime involving violence, and that you are not required
          to register as a sex offender with any state, federal, or local sex
          offender registry
        </li>
      </ul>
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

export default Terms;
