import './App.css';
import {Route, Link} from "react-router-dom";
import { Button, Container, Navbar, Nav } from 'react-bootstrap';
import Login from "./components/Login.jsx";
import Main from "./components/Main.jsx";
import Splash from "./components/Splash.jsx";
import Settings from "./components/Settings.jsx";
import Signup from "./components/Signup.jsx";
import Userprof from "./components/Splash.jsx";
import Imagefeed from "./components/Imagefeed.jsx";



function App() {
  return (
    <div className="App">
        <Navbar bg="dark" variant="dark" expand="lg" sticky="top" className = "mb-5">
        <Container fluid>
          {/* move the logo to center later using CSS */}
          <Navbar.Brand className="navbar-logo" href="/">
            snapp.r
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
      <Container >
        <Route exact path = "/" component = {Main} />
        <Route exact path = "/Login" component = {Login} /> 
        <Route exact path = "/Splash" component = {Splash} />
        <Route exact path ="/Settings" component = {Settings} />
      </Container>
    </div>
  );
}
export default App;

