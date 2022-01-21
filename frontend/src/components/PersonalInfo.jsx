import React from "react";
import { Container, Button } from "react-bootstrap";

const PersonalInfo = () => {
  return (
    <div>
    <div className="container-fluid">
        <img
          class="rounded-circle border border-info border-3 mb-2"
          src="https://randomuser.me/api/portraits/men/34.jpg"
          alt="profile pic"
        />
        <h1 className="py-3">Steve Jobes</h1>
        <h4 className="outline-primary text-start">Username:<em>  johntheguy_03</em></h4>
        <hr />
        <h4 className="text-start" >Email: jontron@hotmail.net</h4>
        <hr />
        <h4 className="text-start">Phone: 972-559-5000</h4>
        <hr />
        <h4 className="text-start">Gender: Male</h4>
        <hr />
        <h4 className="text-start">Birthday: April 20, 1889</h4>
        <br />
        {/* This button should allow all fields to editable */}
        <Button className="my-2" variant="info">Edit Info</Button>
      </div>
    </div>
  );
};

export default PersonalInfo;
