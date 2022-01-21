import React from "react";
import { Link, Route } from "react-router-dom";
import { FcAbout } from "react-icons/fc";
import { VscAccount } from "react-icons/vsc";
import { Button, Container, Col } from "react-bootstrap";
import Account from "./Account";
import About from "./About";
import Messages from "./Messages";
import { FiMessageSquare } from "react-icons/fi";
import { BsInfoSquare } from "react-icons/bs";

const Settings = () => {
  // Might need to use <Col> to create a single veritcal stack of menu items

  return (
    <div className="container-fluid">
      <h1 className="py-2" >Settings</h1>
      <div class="d-flex flex-column">
        <Button
          variant="outline-*"
          href="/Account"
          className="text-start"
          component={Account}
        >
          <VscAccount size={25} /> Account Info
        </Button>
        <hr />

        <Button
          variant="outline-*"
          href="/About"
          className="text-start"
          component={About}
        >
          <BsInfoSquare size={22} /> About
        </Button>
        <hr />

        <Button
          variant="outline-*"
          href="/Messages"
          className="text-start"
          component={Messages}
        >
          <FiMessageSquare size={25} /> Messages
        </Button>
        <hr />
      </div>
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
