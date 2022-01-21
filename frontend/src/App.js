import "./App.css";
import React from "react";
import { Route } from "react-router-dom";
import { Container, Navbar, Nav, Button } from "react-bootstrap";
import Login from "./components/Login.jsx";
import ImageFeed from "./components/Imagefeed";
import Splash from "./components/Splash.jsx";
import Settings from "./components/Settings.jsx";
import Signup from "./components/Signup.jsx";
import Userprof from "./components/Userprof.jsx";
import Like from "./components/Like.jsx";
import Comment from "./components/Comment.jsx";
import Account from "./components/Account.jsx";
import Messages from "./components/Messages";
import UploadImages from "./components/UploadImages.jsx";
import PersonalInfo from "./components/PersonalInfo.jsx";
import { RiHome3Fill } from "react-icons/ri";
import { AiOutlinePlus } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import axios from "axios";
import About from "./components/About";
import ActivityHistory from "./components/ActivityHistory";
import ForgotPass from "./components/ForgotPass";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        {/* <Navbar
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
        </Navbar> */}

{/* back arrow */}
{/* <Button variant="outline-*" href=""><AiOutlineArrowLeft size={25} /></Button> */}

        <Container>
          <Route exact path="/" component={ImageFeed} />
          <Route exact path="/Login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/Splash" component={Splash} />
          <Route exact path="/UploadImages" component={UploadImages} />
          <Route exact path="/Settings" component={Settings} />
          <Route exact path="/Account" component={Account} />
          <Route exact path="/Userprof" component={Userprof} />
          <Route exact path="/Like" component={Like} />
          <Route exact path="/Comment" component={Comment} />
          <Route exact path="/Messages" component={Messages} />
          <Route exact path="/PersonalInfo" component={PersonalInfo} />
          <Route exact path="/About" component={About} />
          <Route exact path="/ActivityHistory" component={ActivityHistory} />
          <Route exact path="/forgotpass" component={ForgotPass} />
        </Container>

        {/* <Container fluid className="my-5 py-3">
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
        </Container> */}
      </div>
    );
  }
}

export default App;

/* 

1/20/20

UseState fetch stuff for the api stuff from backend

change 1000 to 1k 1,000,000 to 1m
[  ]NOT WORKING ATM, WILL CIRCLE BACK TO IT - Tad



extended
have comments upload and save onto each picture

 */
