import "./App.css";
import { Route, Link } from "react-router-dom";
import { Button, Container, Navbar, Nav } from "react-bootstrap";
import Login from "./components/Login.jsx";
import Main from "./components/Main.jsx";
import Splash from "./components/Splash.jsx";
import Settings from "./components/Settings.jsx";
import Signup from "./components/Signup.jsx";
import Userprof from "./components/Userprof.jsx";
import Imagefeed from "./components/Imagefeed.jsx";
import Account from "./components/Account.jsx";
import { RiHome3Fill } from "react-icons/ri";
import { AiOutlinePlus } from "react-icons/ai";

function App() {
  return (
    <div className="App">
      <Navbar
        bg="dark"
        variant="dark"
        expand="lg"
        sticky="top"
        className="mb-5"
      >
        <Container fluid>
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

      <Container>
        <Route exact path="/" component={Main} />
        <Route exact path="/Login" component={Login} />
        <Route exact path="/Splash" component={Splash} />
        <Route exact path="/Settings" component={Settings} />
        <Route exact path="/Account" component={Account} />
        <Route exact path="/Signup" component={Signup} />
        <Route exact path="/Userprof" component={Userprof} />
        <Route exact path="/Imagefeed" component={Imagefeed} />
        <Route exact path="/Userprof" component={Userprof} />
      </Container>
      
      <Container fluid>
        <Navbar bg="dark" variant="dark" fixed = "bottom">
          <Container>
            <Nav className="me-auto">
              <Nav.Link className = "mx-5" href="/"><RiHome3Fill /></Nav.Link>
                {/* Add Image button */}
              <Nav.Link className = "mx-4" href="#features"> <AiOutlinePlus /></Nav.Link>
              <Nav.Link className = "mx-5" href="/Userprof">personal</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </Container>
    </div>
  );
}
export default App;
