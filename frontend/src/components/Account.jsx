import React from "react";
import { Button, Col } from "react-bootstrap";
import PersonalInfo from "./PersonalInfo";
import ActivityHistory from "./ActivityHistory";
import { VscAccount } from "react-icons/vsc";
import { RiHistoryFill } from 'react-icons/ri';
function Account() {
  return (
    <div>
      <div className="container-fluid">
        <h1 className="py-2" >Account Settings</h1>
        <div class="d-flex flex-column">
          <Button
            variant="outline-*"
            href="/PersonalInfo"
            className="text-start"
            component={PersonalInfo}
          >
            <VscAccount size={25} /> Personal Information
          </Button>
          <hr />

          <Button
            variant="outline-*"
            href="/ActivityHistory"
            className="text-start"
            component={ActivityHistory}
          >
            <RiHistoryFill size={27} /> Activity History
          </Button>
          <hr />

         
         
        </div>
      </div>

      {/* <Button variant='outline-*' href="/PersonalInfo" component ={PersonalInfo}>
           <VscAccount size={25} />   Personal Information 
      </Button> */}
      {/* Will take to account settings */}
      {/* <Button variant='outline-*' href="/About" component ={About}>
      /> About
      </Button>
      <Button variant='outline-*' href="/About" component ={About}>
        Messages
      </Button>   */}
    </div>
  );
}

export default Account;

/* 

 Account

            [Stretch Goals] Acvitity History (Pics liked, commented, posted)
            
            personal info - username, pass, email , phone , gender, birthday
            
*/
