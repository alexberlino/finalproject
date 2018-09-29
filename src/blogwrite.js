import React, { Component } from "react";
import ReactDOM from "react";
import axios from "./axios";
import { Link } from "react-router-dom";

class WriteArticles extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false,
      success: false
    };
    this.submit = this.submit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this[e.target.name] = e.target.value;
  }

  // resetPage() {
  //   if (status == true) {
  //     window.location.reload();
  //   }
  // }

  submit() {
    axios
      .post("/en/postarticle", {
        title: this.title,
        author: this.author,
        article: this.article,
        status: this.status,
        imageurl: this.imageurl
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
        <p className="contactmeHead">CREATE BLOG ARTICLE</p>
        <Link className="infoMain" to={"/en/editarticle"}>
          or go to Edit a Blog Post
        </Link>
        <fieldset>
          {this.state.error && <div className="error">"Error in input"</div>}
          {this.state.success && window.location.reload()}
          <div className="inlineWriteBlog">
            <div className="inlineWriteBlog">
              <div className="blockWriteBlog">
                <input
                  onChange={this.handleChange}
                  name="title"
                  placeholder="title"
                  className="blogedit"
                />
              </div>
            </div>

            <div className="inlineWriteBlog">
              <select onChange={this.handleChange} name="author">
                <option name="None"> none </option>
                <option name="me"> Alex Bieth</option>
              </select>
            </div>
            <div className="inlineWriteBlog">
              <select onChange={this.handleChange} name="status">
                <option name="None"> none </option>
                <option name="inprogress"> in-progress </option>
                <option name="readypublish"> ready to publish </option>
                <option name="discovery"> to do </option>
              </select>{" "}
            </div>
            <div className="inlineWriteBlog">
              <input
                onChange={this.handleChange}
                name="imageurl"
                placeholder="imageurl"
                className="blogedit"
              />
            </div>
          </div>

          <textarea
            onChange={this.handleChange}
            name="article"
            className="blogArticleInput"
          />
          <button onClick={this.submit} className="buttonEdit">
            Submit
          </button>
        </fieldset>
      </div>
    );
  }
}

export default WriteArticles;
