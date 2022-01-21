import { React, useState, useEffect } from "react";
import { Button, Form, Row, Col, Carousel } from "react-bootstrap";
import imageHolder from "../images/img_holder.png";
import imageHolder2 from "../images/img_holder2.png";
import imageHolder3 from "../images/img_holder3.png";
import { BiCommentAdd } from "react-icons/bi";
import Like from "./Like";
import axios from 'axios'
// import * as imageSrc from '../images';
const ImageFeed = () => {


const url = 'http://shtsxh.herokuapp.com/'
const [Image, setImage] = useState([])

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
    console.log(Image) 
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
      {/* ==================Images================== */}
      <Carousel variant="light">
        
        {Object.keys(Image).length ? Image.map(img =>
       <Carousel.Item key={img.id}> 
        <img className="d-block w-100" src={img.photo} alt="First post" />
        </Carousel.Item>  
      ) : (
        "no images"
      )}
      
      </Carousel>
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
