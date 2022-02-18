import { React, useState } from "react";
import { BsFillSuitHeartFill } from "react-icons/bs";
import { BiCommentAdd } from "react-icons/bi";
import { Button, Form, Row, Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Comment from "./Comment";

const Like = () => {
  const [buttonLikes, setButtonLikes] = useState(999);

  const lookup = [
    { value: 1, symbol: "" },
    { value: 1e3, symbol: "k" },
    { value: 1e6, symbol: "m" },
  ];

  // COME BACK TO THIS LATER AND FORMAT THE 1.1K NUMBERS TO MAKE IT HUMAN READABLE
  // formatter made before the clickHandler to make sure it's known to the clickHandler.
  // function kFormatter(buttonLikes) {
  //   return Math.abs(buttonLikes) > 999
  //     ? buttonLikes * (Math.abs(buttonLikes) / 1000).toFixed(1) + "k"
  //     : buttonLikes * Math.abs(buttonLikes);
  // }


  // trying to format numbers, still not working for some reason - Tad
  var HRNumbers = require("human-readable-numbers");

  const handleClickLikeButton = () => {
    var likesString = setButtonLikes((prevValue) => prevValue + 1);
    String(likesString).replace(/(.)(?=(\d{3})+$)/g,'$1,') 
  };

  return (
    <div>
      <Container>
        <Row>
          <Col>
            <Button
              variant="outline-*"
              type="button"
              value="Input"
              onClick={() => handleClickLikeButton()}
            >
              <BsFillSuitHeartFill size={25} className="mx-3" />
            </Button>
          </Col>
          <Col>
            <p>{buttonLikes}</p>
          </Col>
        </Row>
      </Container>
      {/* <Link
        to={{
          pathname: "/Feed",
          state: { buttonLikes },
        }}
      ></Link>  */}
    </div>
  );
};

export default Like;
