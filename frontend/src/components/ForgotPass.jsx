import React from 'react';
import { Container } from 'react-bootstrap';
import { MdOutlineArrowBackIosNew } from "react-icons/md";

function ForgotPass(props) {
    return (
        <div className="position-absolute top-50 start-50 translate-middle"> 
                <div className = 'my-5'>
                    <a className = "nav-link text-danger" href="./Login" >
                    <MdOutlineArrowBackIosNew size={30} />
                    </a>
                </div>
                <div>
                <h1>Try to remember it!</h1>
            </div>
        </div>
    );
}

export default ForgotPass;