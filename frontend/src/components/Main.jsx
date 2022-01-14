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
      <br/>
      <div className="btn-group" role="group" aria-label="Basic example">
        <div className="mx-5">
          {/* Like button */}
          <Button variant="outline-*" type="button" value="Input" onClick = {() => console.log("like")}>
            <BsFillSuitHeartFill size={25} />
          </Button>
        </div>
        <div>
          {/* Add Image button */}
          <Button variant="outline-*" type="button" value="Input" onClick = {() => console.log("post")}>
            <AiOutlinePlus size={25} />
          </Button>
        </div>
        <div className="mx-5">
          {/* Commetn Button */}
          <Button variant="outline-*" type="button" value="Input"  onClick = {() => console.log("comment")}>
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
