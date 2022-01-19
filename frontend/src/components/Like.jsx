import { React, useState } from "react";
import { BsFillSuitHeartFill } from "react-icons/bs";
import { BiCommentAdd } from "react-icons/bi";
import { Button, Form, Row, Col } from "react-bootstrap";
import Comment from "./Comment";

const Like = () => {
  const [buttonLikes, setButtonLikes] = useState(69420);
  

  const lookup = [
    { value: 1, symbol: "" },
    { value: 1e3, symbol: "k" },
    { value: 1e6, symbol: "m" },
  ];

  // COME BACK TO THIS LATER AND FORMAT THE 1.1K NUMBERS TO MAKE IT HUMAN READABLE
  // formatter made before the clickHandler to make sure it's known to the clickHandler.
  function kFormatter(buttonLikes) {
    return Math.abs(buttonLikes) > 999
      ? buttonLikes * (Math.abs(buttonLikes) / 1000).toFixed(1) + "k"
      : buttonLikes * Math.abs(buttonLikes);
  }

  const handleClickLikeButton = () => {
    setButtonLikes((prevValue) => prevValue + 1);
    // call formatter here to run but not working???
    kFormatter(buttonLikes);
    // console.log(buttonLikes)
  };

  return (
    <div>
      <div className="">
        <Button
          variant="outline-*"
          type="button"
          value="Input"
          onClick={() => handleClickLikeButton()}
        >
          <BsFillSuitHeartFill size={25} className="mx-3" />
        </Button>
      </div>
    </div>
  );
};

export default Like;
