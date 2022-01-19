import React from "react";
import { Navbar, Container, Nav, NavDropdown, Carousel } from "react-bootstrap";
import imageHolder from "../images/img_holder.png";
import imageHolder2 from "../images/img_holder2.png";
import imageHolder3 from "../images/img_holder3.png";
import Feed from "./Feed";
// import * as imageSrc from '../images';

const ImageFeed = () => {
  /* 
    1) read images from database. (in our case, the backend)
    2) Grab username of user, attach to picture name
    3) map the images
    4) if multiple photos, attach carousel, else return single photo
    5) attach the comment and like buttons
  */
  // function importAll(r) {
  //   return r.keys().map(r);
  // }

  // const images = importAll(require.context("./", false, /\.(png|jpe?g|svg)$/));

  return (
    <div>
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

      <Feed/>
    </div>
  );
};

export default ImageFeed;

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
