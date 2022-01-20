import React from 'react';
import { Button, Col} from 'react-bootstrap';
import PersonalInfo from "./PersonalInfo"
function Account() {
    return (
        <div>
           <Button variant='outline-*' href="/PersonalInfo" component ={PersonalInfo}>
         Account Info
      </Button>
      {/* Will take to account settings */}
     {/* <Button variant='outline-*' href="/About" component ={About}>
         About
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