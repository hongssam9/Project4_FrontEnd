import { React, useState } from "react";
import { Button, Form } from "react-bootstrap";

const Comment = () => {
  const [comment, setComment] = useState(null);

  return (
    <div>
      <p>Hello world</p>
      <Form>
        <Form.Label>Comments</Form.Label>
        <Form.Control type="text" placeholder="Enter comment here" />
        <Button variant="primary" type="submit">
          Comment
        </Button>
      </Form>
    </div>
  );
};

export default Comment;
