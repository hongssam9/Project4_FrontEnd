import { React, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const Comment = () => {
  const [comment, setComment] = useState(null);

  return (
    <div>
      <h1 className="py-2">Comments</h1>
      <Form>
        
        <Form.Control type="text" placeholder="Enter comment here" />
        <Button variant="primary" type="submit" className="my-2">
          Comment
        </Button>
      </Form>
    </div>
  );
};

export default Comment;
