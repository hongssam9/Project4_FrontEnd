import React from "react";
import { Button, Navbar, Nav, Container } from "react-bootstrap";
import PersonalInfo from "./PersonalInfo";
import ActivityHistory from "./ActivityHistory";
import { VscAccount } from "react-icons/vsc";
import { RiHistoryFill, RiHome3Fill } from "react-icons/ri";
import { AiOutlinePlus } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";

function Account() {
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
        <h1 className="py-2">Account Settings</h1>
        <div class="d-flex flex-column">
          <Button
            variant="outline-*"
            href="/PersonalInfo"
            className="text-start"
            component={PersonalInfo}
          >
            <VscAccount size={25} /> Personal Information
          </Button>
          <hr />

          <Button
            variant="outline-*"
            href="/ActivityHistory"
            className="text-start"
            component={ActivityHistory}
          >
            <RiHistoryFill size={27} /> Activity History
          </Button>
          <hr />
        </div>
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
}

export default Account;

/* 

 Account

            [Stretch Goals] Acvitity History (Pics liked, commented, posted)
            
            personal info - username, pass, email , phone , gender, birthday
            
*/
