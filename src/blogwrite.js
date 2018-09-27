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
        <fieldset>
          {this.state.error && <div className="error">"Error in input"</div>}
          {this.state.success && window.location.reload()}
          <div className="inlineWriteBlog">
            <div className="inlineWriteBlog">
              <div className="blockWriteBlog">
                <label>title</label>
                <input onChange={this.handleChange} name="title" />
              </div>
            </div>

            <div className="inlineWriteBlog">
              <label>author</label>
              <select onChange={this.handleChange} name="author">
                <option name="None"> none </option>
                <option name="jsmith"> John Smith </option>
              </select>
            </div>
            <div className="inlineWriteBlog">
              <label>status</label>
              <select onChange={this.handleChange} name="status">
                <option name="None"> none </option>
                <option name="inprogress"> in-progress </option>
                <option name="readypublish"> ready to publish </option>
                <option name="discovery"> discovery </option>
              </select>{" "}
            </div>
            <div className="inlineWriteBlog">
              <label>imageurl</label>
              <input onChange={this.handleChange} name="imageurl" />
            </div>
          </div>

          <label>article</label>
          <textarea
            onChange={this.handleChange}
            name="article"
            className="blogArticleInput"
          />
          <button onClick={this.submit} className="button">
            Submit
          </button>
        </fieldset>
      </div>
    );
  }
}

export default WriteArticles;
