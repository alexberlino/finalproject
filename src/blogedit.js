import React, { Component } from "react";
import ReactDOM from "react";
import axios from "./axios";
import { Link } from "react-router-dom";

class EditArticle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false,
      success: false,
      imageurl: "",
      title: "",
      status: null,
      article: null,
      author: null,
      id: null
    };
    this.submit = this.submit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.upload = this.upload.bind(this);
  }

  upload() {
    console.log("id", this.state.id);
    axios.get(`/getarticle/${this.state.id}`).then(res => {
      console.log("RES", res);
      this.setState({
        article: res.data.rows[0].article,
        imageurl: res.data.rows[0].imageurl,
        title: res.data.rows[0].title,
        status: res.data.rows[0].status,
        author: res.data.rows[0].author,
        id: res.data.rows[0].id
      });
    });
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  // resetPage() {
  //   if (status == true) {
  //     window.location.reload();
  //   }
  // }

  submit() {
    axios
      .post(`/en/editarticle/${this.state.id}`, {
        title: this.state.title,
        author: this.state.author,
        article: this.state.article,
        status: this.state.status,
        imageurl: this.state.imageurl,
        id: this.state.id
      })
      .then(({ data }) => {
        if (data.success) {
          this.setState({
            success: true
          });
        } else {
          this.setState({
            error: true
          });
        }
      });
  }

  render() {
    return (
      <div className="main">
        <p className="contactmeHead">EDIT BLOG ARTICLE</p>

        <p>
          <Link className="infoMain" to={"/en/postarticle"}>
            or go to Create new Blog Post
          </Link>{" "}
        </p>
        <fieldset>
          {this.state.error && <div className="error">"Error in input"</div>}
          {this.state.success && window.location.reload()}
          <div className="inlineWriteBlog">
            <div className="inlineWriteBlog">
              <div className="blockWriteBlog">
                <textarea
                  onChange={this.handleChange}
                  name="id"
                  placeholder="id"
                  className="blogedit"
                />
                <button
                  onClick={this.upload}
                  onChange={this.handleChange}
                  className="buttonEdit2"
                >
                  upload
                </button>
              </div>
            </div>
            <div className="inlineWriteBlog">
              <div className="blockWriteBlog">
                <textarea
                  onChange={this.handleChange}
                  name="title"
                  placeholder="title"
                  className="blogedit"
                  value={this.state.title}
                />
              </div>
            </div>

            <div className="inlineWriteBlog">
              <select onChange={this.handleChange} name="author">
                <option name="None"> none </option>
                <option name="me"> Alex Bieth </option>
              </select>
            </div>
            <div className="inlineWriteBlog">
              <select onChange={this.handleChange} name="status">
                <option name="None"> none </option>
                <option name="inprogress"> in-progress </option>
                <option name="readypublish"> ready to publish </option>
                <option name="discovery"> discovery </option>
              </select>{" "}
            </div>
            <div className="inlineWriteBlog">
              <textarea
                onChange={this.handleChange}
                name="imageurl"
                placeholder="imageurl"
                className="blogedit"
                value={this.state.imageurl}
              />
            </div>
          </div>

          <textarea
            onChange={this.handleChange}
            name="article"
            className="blogArticleInput"
            value={this.state.article}
          />
          <button onClick={this.submit} className="buttonEdit">
            Submit
          </button>
        </fieldset>
      </div>
    );
  }
}

export default EditArticle;
