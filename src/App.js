import "./App.css";
import React, { useState, useEffect } from "react";
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
import About from "./components/About";
import ActivityHistory from "./components/ActivityHistory";
import ForgotPass from "./components/ForgotPass";
import Terms from "./components/Terms";

function App() {
  const [errors, setErrors] = useState({});
  const [images, setImages] = useState([]);
  const [token, setToken] = useState(null)
  
  return (
    <div className="App">
      {"errors" in errors ? Object.values(errors.errors).map((error) => <p>{error}</p>) : null}
      <Container>
        <Route path="/" component={ImageFeed} images = {images} />
        <Route exact path="/Login" component={Login} setErrors={setErrors} setToken={setToken}/>
        <Route exact path="/signup" component={Signup} setErrors={setErrors} />
        <Route exact path="/Splash" component={Splash} />
        <Route exact path="/UploadImages" component={UploadImages} setImages={setImages} token = {token}/>
        <Route exact path="/Settings" component={Settings} />
        <Route exact path="/Account" component={Account} />
        <Route exact path="/Userprof" component={Userprof} />
        <Route exact path="/Like" component={Like} />
        <Route exact path="/Comment" component={Comment} />
        <Route exact path="/Messages" component={Messages} />
        <Route exact path="/PersonalInfo" component={PersonalInfo} />
        <Route exact path="/About" component={About} />
        <Route exact path="/ActivityHistory" component={ActivityHistory} />
        <Route exact path="/ForgotPass" component={ForgotPass} />
        <Route exact path="/Terms" component={Terms} />
      </Container>
    </div>
  );
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
