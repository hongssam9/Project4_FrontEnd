import React from "react";
import { Container } from "react-bootstrap";

const Userprof = () => {
  return (
    <div>
      <Container fluid>
        <img
          class="rounded-circle border border-info border-3"
          src="https://randomuser.me/api/portraits/men/11.jpg"
          alt="profile pic"
        />
        <h1 className='py-2'>John Smith</h1>
      
        <p>Followers</p>
        <p>Following</p>
        <p>Post count</p>
        <p>Image grid</p> 
      </Container>
    </div>
  );
};

export default Userprof;
