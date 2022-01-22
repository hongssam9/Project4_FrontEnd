import React from "react";
import { Container, Row, Col, Navbar, Nav, Button } from "react-bootstrap";
import { RiHome3Fill } from "react-icons/ri";
import { AiOutlinePlus } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import "./Navbar.css"

const Userprof = () => {
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
      <Container fluid>
        <img
          className="rounded-circle border border-info border-3"
          src="https://randomuser.me/api/portraits/men/34.jpg"
          alt="profile pic"
        />
        <h1 className="py-2">John Smith</h1>
        <p>basic name basic guy what can i say</p>
        <div className="profile-stats">
          <ul>
            <li>
              <span class="profile-stat-count">12</span> <strong>posts</strong>
            </li>
            <li>
              <span class="profile-stat-count">69</span> <strong>followers</strong>
            </li>
            <li>
              <span class="profile-stat-count">420</span> <strong>following</strong>
            </li>
          </ul>
        </div>

        <Container>
          {/* Row 1 of grid */}
          <Row>
            <Col>
              <img
                src="https://images.unsplash.com/photo-1511765224389-37f0e77cf0eb?w=500&h=500&fit=crop"
                class="gallery-image"
                alt=""
              />
            </Col>
            <Col>
              <img
                src="https://images.unsplash.com/photo-1497445462247-4330a224fdb1?w=500&h=500&fit=crop"
                class="gallery-image"
                alt=""
              />
            </Col>
            <Col>
              <img
                src="https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=500&h=500&fit=crop"
                class="gallery-image"
                alt=""
              />
            </Col>
          </Row>
          {/* Row 2 of grid */}
          <Row>
            <Col>
              <img
                src="https://images.unsplash.com/photo-1502630859934-b3b41d18206c?w=500&h=500&fit=crop"
                class="gallery-image"
                alt=""
              />
            </Col>
            <Col>
              <img
                src="https://images.unsplash.com/photo-1498471731312-b6d2b8280c61?w=500&h=500&fit=crop"
                class="gallery-image"
                alt=""
              />
            </Col>
            <Col>
              <img
                src="https://images.unsplash.com/photo-1515023115689-589c33041d3c?w=500&h=500&fit=crop"
                class="gallery-image"
                alt=""
              />
            </Col>
          </Row>
          {/* Row 3 of grid */}
          <Row>
            <Col>
              <img
                src="https://images.unsplash.com/photo-1504214208698-ea1916a2195a?w=500&h=500&fit=crop"
                class="gallery-image"
                alt=""
              />
            </Col>
            <Col>
              <img
                src="https://images.unsplash.com/photo-1515814472071-4d632dbc5d4a?w=500&h=500&fit=crop"
                class="gallery-image"
                alt=""
              />
            </Col>
            <Col>
              <img
                src="https://images.unsplash.com/photo-1511407397940-d57f68e81203?w=500&h=500&fit=crop"
                class="gallery-image"
                alt=""
              />
            </Col>
          </Row>
          {/* Row 4 of grid */}
          <Row>
            <Col>
              <img
                src="https://images.unsplash.com/photo-1518481612222-68bbe828ecd1?w=500&h=500&fit=crop"
                class="gallery-image"
                alt=""
              />
            </Col>
            <Col>
              <img
                src="https://images.unsplash.com/photo-1505058707965-09a4469a87e4?w=500&h=500&fit=crop"
                class="gallery-image"
                alt=""
              />
            </Col>
            <Col>
              <img
                src="https://images.unsplash.com/photo-1423012373122-fff0a5d28cc9?w=500&h=500&fit=crop"
                class="gallery-image"
                alt=""
              />
            </Col>
          </Row>

          
        </Container>
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

export default Userprof;
