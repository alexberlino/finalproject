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
          <label>title</label>
          <input onChange={this.handleChange} name="title" />
          <label>author</label>
          <select onChange={this.handleChange} name="author">
            <option name="None"> none </option>
            <option name="jsmith"> John Smith </option>
          </select>
          <label>article</label>
          <textarea
            onChange={this.handleChange}
            name="article"
            className="blogArticleInput"
          />
          <label>status</label>
          <select onChange={this.handleChange} name="status">
            <option name="None"> none </option>
            <option name="inprogress"> in-progress </option>
            <option name="readypublish"> ready to publish </option>
            <option name="discovery"> discovery </option>
          </select>
          <label>imageurl</label>
          <input onChange={this.handleChange} name="imageurl" />
          <button onClick={this.submit} className="button">
            Submit
          </button>
        </fieldset>
      </div>
    );
  }
}

export default WriteArticles;
