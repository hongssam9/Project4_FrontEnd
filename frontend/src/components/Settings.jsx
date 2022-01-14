import React from "react";
import { Link, Route } from "react-router-dom";
import { FcAbout } from "react-icons/fc";
import { VscAccount } from "react-icons/vsc";
import { Button, Container} from 'react-bootstrap';
import Account from "./Account"

const Settings = () => {
  return (
    <div className='navbar-div'>
      <Button variant='outline-*' href="/Account" component ={Account}>
        <VscAccount size={25} /> Account
      </Button>
      {/* Will take to account settings */}
     <Button variant='outline-*'>
        <FcAbout size={25} /> About
      </Button>
      {/* Will go to about page with info on the devs and copyright*/}
      <h2>Dark Mode</h2>
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
