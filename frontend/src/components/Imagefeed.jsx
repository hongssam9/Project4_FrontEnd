import { React, useState, useEffect } from "react";
import "./Navbar.css"

import {
  Button,
  Navbar,
  Row,
  Col,
  Carousel,
  Container,
  Nav,
} from "react-bootstrap";
import { BiCommentAdd } from "react-icons/bi";
import Like from "./Like";
import axios from "axios";
import { RiHome3Fill } from "react-icons/ri";
import { AiOutlinePlus } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";

// import * as imageSrc from '../images';
const ImageFeed = () => {
  const url = "http://shtsxh.herokuapp.com/";
  const [Image, setImage] = useState([]);

  /* const [Image, setImage] = useState([])
  axios.get('http://shtsxh.herokuapp.com/')
  .then(res =>  */

  useEffect(() => {
    urlFetch();
  }, []);

  const urlFetch = () => {
    fetch(url)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw res;
      })
      .then((json) => {
        setImage(json);
      })
      .catch((err) => console.log("something went wrong...", err));
  };
  console.log(Image);
  /* 
    1) read images from database. (in our case, the backend)
    2) Grab username of user, attach to picture name
    3) map the images
    4) if multiple photos, attach carousel, else return single photo
    5) attach the comment and like buttons
  */

  let comment = 0;

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

      {/* ==================Images================== */}
      <Carousel variant="light">
        {Object.keys(Image).length
          ? Image.map((img) => (
              <Carousel.Item key={img.id}>
                <img
                  className="d-block w-100"
                  src={img.image}
                  alt="First post"
                />
              </Carousel.Item>
            ))
          : "no images"}
      </Carousel>

      {/* Place single images here */}
      {/* <Container className="image-holder my-5">
        <img
          src="https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=500&h=500&fit=crop"
          class="gallery-image"
          alt="trees"
        />
        
        <img
          src="https://images.assettype.com/freepressjournal/2021-08/918e9890-5b62-4ba8-98ad-49194d520c63/Untitled_design__26_.png?rect=0%2C0%2C3900%2C2048&w=1200&auto=format%2Ccompress&ogImage=true"
          class="gallery-image"
          alt="spiderman"
        />
        <img
          src="https://images.unsplash.com/photo-1502630859934-b3b41d18206c?w=500&h=500&fit=crop"
          class="gallery-image"
          alt=""
        />
      </Container> */}

      <div className="btn-group my-2" role="group" aria-label="Basic example">
        {/* ==================Images/================== */}
        {/* ==================Buttons================== */}
        <Row>
          <Col>
            <Like />
          </Col>

          <Col>
            <div>
              <Button
                variant="outline-*"
                type="button"
                value="Input"
                href="/Comment"
                component={Comment}
              >
                <BiCommentAdd size={25} className="mx-3" />
              </Button>
            </div>
            {comment}
          </Col>
        </Row>
      </div>

      {/* ==================Buttons/================== */}

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
