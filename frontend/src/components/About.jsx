import React from "react";
import { Container, Button, Navbar, Nav } from "react-bootstrap";
import { BsGithub, BsLinkedin, BsInstagram , BsGlobe, BsFillPersonFill} from "react-icons/bs";
import { RiHome3Fill } from "react-icons/ri";
import { AiOutlinePlus } from "react-icons/ai";

const About = () => {
  return (
    <div>
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
      <Container fluid>
        <h1>About</h1>
        <h3>snapp.r social created by</h3>
        <hr />
        <h3>Tad Smith</h3> 
        <Button target="_blank" href="https://github.com/tadsmyth" variant="outline-*"> <BsGithub size={35} className="m-1"/></Button>
        <Button target="_blank" href="https://www.linkedin.com/in/thaddeus-smith/" variant="outline-*"><BsLinkedin size={35} className="m-1"/></Button>
        <Button target="_blank" href="https://www.instagram.com/tadsmyth/" variant="outline-*"><BsInstagram size={35} className="m-1"/></Button>
        <Button target="_blank" href="" variant="outline-*"><BsGlobe size={35} className="m-1"/></Button>
        <hr />
        <h3>Samuel Hong</h3> 
        <Button target="_blank" href="https://github.com/hongssam9" variant="outline-*"> <BsGithub size={35} className="m-1"/></Button>
        <Button target="_blank" href="https://www.linkedin.com/in/hongssam9/" variant="outline-*"><BsLinkedin size={35} className="m-1"/></Button>
        <Button target="_blank" href="https://www.instagram.com/hong_ssam9/" variant="outline-*"><BsInstagram size={35} className="m-1"/></Button>
        <Button target="_blank" href="https://www.thehongssam.com/" variant="outline-*"><BsGlobe size={35} className="m-1"/></Button>
        <hr />
        <h3>Xuyen Hoang</h3> 
        <Button target="_blank" href="" variant="outline-*"> <BsGithub size={35} className="m-1"/></Button>
        <Button target="_blank" href="" variant="outline-*"><BsLinkedin size={35} className="m-1"/></Button>
        <Button target="_blank" href="" variant="outline-*"><BsInstagram size={35} className="m-1"/></Button>
        <Button target="_blank" href="" variant="outline-*"><BsGlobe size={35} className="m-1"/></Button>
        <hr />
      </Container>
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

export default About;


