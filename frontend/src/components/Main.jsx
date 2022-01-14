import React from "react";
import { Navbar, Container, Nav, NavDropdown, Carousel } from "react-bootstrap";
import imageHolder from "../images/img_holder.png";
import imageHolder2 from "../images/img_holder2.png";
import imageHolder3 from "../images/img_holder3.png";
import { Button } from "react-bootstrap";
import { BsFillSuitHeartFill } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";
import { BiCommentAdd } from "react-icons/bi";

const Main = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg" sticky="top" className = "mb-5">
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
      {/* ================================================================================================= */}

      <Carousel variant="light">
        <Carousel.Item>
          <img className="d-block w-100" src={imageHolder} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={imageHolder2}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={imageHolder3} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
{/* 
      <div
        id="carouselExampleIndicators"
        className="carousel slide mb-4"
        data-bs-ride="carousel"
      >
       <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
            variant = "dark"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>  
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={imageHolder} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={imageHolder2} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={imageHolder3} className="d-block w-100" alt="..." />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
        
      </div>
       */}

      {/* ================================================================================================= */}
      <div className="btn-group" role="group" aria-label="Basic example">
        <div className="mx-5">
          {/* Like button */}
          <Button variant="outline-*" type="button" value="Input" disabled>
            <BsFillSuitHeartFill size={25} />
          </Button>
        </div>
        <div>
          {/* Add Image button */}
          <Button variant="outline-*" type="button" value="Input" disabled>
            <AiOutlinePlus size={25} />
          </Button>
        </div>
        <div className="mx-5">
          {/* Commetn Button */}
          <Button variant="outline-*" type="button" value="Input" disabled>
            <BiCommentAdd size={25} />
          </Button>
        </div>
      </div>
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
// [X]Comment
// [X]Main - Like
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

// <div className="p-3 mb-3">
//   <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
//     <div className="carousel-inner">
//       <div className="carousel-item active">
//         {/* This will need to be routed to another component to receive new photos */}
//         <img
//           src={imageHolder}
//           className="img-thumbnail border border-2"
//           alt="..."
//         ></img>
//       </div>
//       <div className="carousel-item">
//         <img src="..." className="d-block w-100" alt="..." />
//       </div>
//       <div className="carousel-item">
//         <img src="..." className="d-block w-100" alt="..." />
//       </div>
//     </div>
//   </div>
// </div>
