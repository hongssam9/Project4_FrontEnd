import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
const Main = () => {
  return (
    <div>
      <Navbar bg="dark" variant='dark' expand="lg" sticky="top">
        <Container fluid>
          {/* move the logo to center later using CSS */}
          <Navbar.Brand className="navbar-logo" href="#home">
            React-Bootstrap
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Main;

// [ ] Nav bar w/ hamburger menu | w/logo
// [ ] Stretch the narbar to the edges of the viewport. (possibly with the container/container fluid)

/*  COMPONENTS */
// [ ]Menu
// [ ]Settings
// [ ]Upload Image
// [ ]Comment
// [ ]Main - Like
// [ ]Home - Login

/* Extended */
// [ ]User Profile
// [ ]Direct Message Function
// [ ]Social user auth
// [ ]Light/Dark
// [ ]Loading screen
// [ ]Make Logo
// [ ]Make app name
// [ ]Make Company name
// [ ]Copyright SocialGatcha