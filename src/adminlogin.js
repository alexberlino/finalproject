import React, { Component } from "react";
import ReactDOM from "react";
import App from "./App";
import { BrowserRouter, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import axios from "./axios";

import { Helmet } from "react-helmet";

class LoginAdmin extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.submit = this.submit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this[e.target.name] = e.target.value;
  }
  submit() {
    axios
      .post("/en/login", {
        email: this.email,
        pass: this.pass
      })
      .then(({ data }) => {
        console.log("loggedin");

        if (data.success) {
          location.replace("/en/admin");
        } else {
          this.setState({
            error: true
          });
        }
      });
  }
  render() {
    return (
      <div className="mainBox">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Log-in</title>
        </Helmet>
        <div className="pagetitle">Admin Log in</div>
        {this.state.error && (
          <div className="error">Error, please check and try again</div>
        )}
        <input
          onChange={this.handleChange}
          name="email"
          className="input"
          placeholder="Email"
        />
        <input
          onChange={this.handleChange}
          name="pass"
          type="password"
          className="input"
          placeholder="Password"
        />
        <button onClick={this.submit} className="button">
          Log in
        </button>
      </div> //Main
    );
  }
}

export default LoginAdmin;
