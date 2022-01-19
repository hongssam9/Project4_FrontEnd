import React from "react";
import Like from "./Like";
import Comment from "./Comment";
import { Button, Form, Row, Col } from "react-bootstrap";
import { BiCommentAdd } from "react-icons/bi";
import { BsFillSuitHeartFill } from "react-icons/bs";

const Feed = () => {
  return (
    <div>
      <div className="btn-group my-2" role="group" aria-label="Basic example">
        <Row>
          <Col>
            <Like />
          </Col>

          <Col>
            <p>
              {/* {buttonLikes} */} <br />
              likes
            </p>
          </Col>

          <Col>
            <p>
             {/* {comments}  */} <br />
              comments
            </p>
          </Col>
          <Col>
            <div>
              <Button variant="outline-*" type="button" value="Input" href="/Comment" component ={Comment} >
                <BiCommentAdd size={25} className="mx-3" /> 
              </Button> 
            </div>
          </Col> 
        </Row>
      </div>
    </div>
  );
};
export default Feed;
