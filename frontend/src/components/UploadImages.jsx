import React, { Component } from "react";
import axios from "axios";
import { Navbar, Container, Nav } from "react-bootstrap";
import "./UploadImages.css"
class UploadImages extends Component {
  componentDidMount() {
    let data;
    axios
      .get("http://shtsxh.herokuapp.com/")
      .then((res) => {
        data = res.data;
        this.setState({
          details: data,
        });
      })
      .catch((err) => {});
  }

  state = {
    image: null,
    description: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleImageChange = (e) => {
    this.setState({
      image: e.target.files[0],
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    let form_data = new FormData();
    form_data.append("image", this.state.image);
    form_data.append("description", this.state.description);
    let url = "http://shtsxh.herokuapp.com/";
    axios
      .post(url, form_data, {
        headers: {
          "content-type": "multipart/form-data", // what is this?
        },
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div>
        <Navbar
          bg="dark"
          variant="dark"
          expand="lg"
          sticky="top"
          className="mb-5"
          id="navbar"
        >
          <Container fluid>
            <Navbar.Brand className="navbar-logo" href="/">
              SoCap
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/Settings">Settings</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <h1 className="my-5">Upload Photo</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="my-4">
            <input
              type="file"
              id="image"
              accept="image/png, image/jpeg"
              onChange={this.handleImageChange}
              required
              className="upload-image-btn"
            />
          </div>

          <div class="form-floating my-3">
            <textarea
              class="form-control"
              type="text"
              placeholder="Description"
              id="content"
              value={this.state.content}
              onChange={this.handleChange}
              required
            ></textarea>
            <label for="floatingTextarea2">Description</label>
          </div>
          {/* Submit button should push to the DB */}
          <input type="submit" class="btn btn-info" />
        </form>
      </div>
    );
  }
}

export default UploadImages;
