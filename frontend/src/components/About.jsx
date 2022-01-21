import React from "react";
import { Container, Button } from "react-bootstrap";
import { BsGithub, BsLinkedin, BsInstagram , BsGlobe} from "react-icons/bs";

const About = () => {
  return (
    <div>
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
    </div>
  );
};

export default About;


