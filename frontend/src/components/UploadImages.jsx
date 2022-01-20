import React, { Component } from "react";
import axios from "axios";

class UploadImages extends Component {
  state = {
    image: null,
    description: [],
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

  render() {
    return (
      <div>
          
        <form onSubmit={this.handleSubmit}>
          <p>
            <input
              type="text"
              placeholder="Caption"
              id="content"
              value={this.state.content}
              onChange={this.handleChange}
              required
            />
          </p>
          <p>
            <input
              type="file"
              id="image"
              accept="image/png, image/jpeg"
              onChange={this.handleImageChange}
              required
            />
          </p>
          {/* Submit button should push to the DB */}
          <input type="submit" class="btn btn-info"/>
        </form>
      </div>
    );
  }
}

export default UploadImages;
