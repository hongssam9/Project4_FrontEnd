import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Userprof = () => {
  return (
    <div>
      <Container fluid>
        <img
          class="rounded-circle border border-info border-3"
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
    </div>
  );
};

export default Userprof;
