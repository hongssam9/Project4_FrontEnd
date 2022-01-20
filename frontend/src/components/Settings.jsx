import React from "react";
import { Link, Route } from "react-router-dom";
import { FcAbout } from "react-icons/fc";
import { VscAccount } from "react-icons/vsc";
import { Button, Container, Col} from 'react-bootstrap';
import Account from "./Account"
import About from "./About"
import Messages from "./Messages"
const Settings = () => {



// Might need to use <Col> to create a single veritcal stack of menu items

  return (
    <div className='navbar-div'>
      
      <Button variant='outline-*' href="/Account" component ={Account}>
        <VscAccount size={25} /> Account Info
      </Button>
      {/* Will take to account settings */}
     <Button variant='outline-*' href="/About" component ={About}>
        <FcAbout size={25} /> About
      </Button>
      <Button variant='outline-*' href="/About" component ={About}>
        <FcAbout size={25} /> Messages
      </Button>      {/* Will go to about page with info on the devs and copyright*/}
      <h2>Dark Mode (Coming Soon!)</h2>
      <label class="switch">
        <input type="checkbox" />
        <span className="slider round"></span>
      </label>
      
    </div>
  );
};

export default Settings;

/*

Account
About

Extended MVP
Search
Messages
Dark/Light Mode */
