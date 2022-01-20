import "./App.css";
import React from 'react';
import { Route} from "react-router-dom";
import { Container, Navbar, Nav, Button } from "react-bootstrap";
import Login from "./components/Login.jsx";
import ImageFeed from './components/Imagefeed'
import Splash from "./components/Splash.jsx";
import Settings from "./components/Settings.jsx";
import Signup from "./components/Signup.jsx";
import Userprof from "./components/Userprof.jsx";
import Like from "./components/Like.jsx";
import Comment from "./components/Comment.jsx";
import Account from "./components/Account.jsx";
import UploadImages from "./components/UploadImages.jsx";
import { RiHome3Fill } from "react-icons/ri";
import { AiOutlinePlus } from "react-icons/ai";
import { BsFillPersonFill } from 'react-icons/bs'
import axios from 'axios';

class App extends React.Component {
render() {
  return(
    <div className = "App">
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

      <Container>
        <Route exact path="/" component={ImageFeed} />
        <Route exact path="/Login" component={Login} />
        <Route exact path="/Splash" component={Splash} />
        <Route exact path="/Settings" component={Settings} />
        <Route exact path="/Account" component={Account} />
        <Route exact path="/Signup" component={Signup} />
        <Route exact path="/Userprof" component={Userprof} /> 
        <Route exact path="/Userprof" component={Userprof} />
        <Route exact path ="/Like" component={Like} />
        <Route exact path ="/Comment" component={Comment} />

      </Container>
      
      <Container fluid>
        <Navbar bg="dark" variant="dark" fixed = "bottom">
          <Container>
            <Nav className="me-auto">
              <Nav.Link className = "mx-5" href="/"><RiHome3Fill size={25} /></Nav.Link>
           
              <Button className = "mx-4" variant = "info" href="/UploadImages"> 
                <AiOutlinePlus size={27}/> 
              </Button>
              <Nav.Link className = "mx-5" href="/Userprof"><BsFillPersonFill size={27}/></Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </Container> 
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