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
      <div className="main">
        <div className="mainlogin">
          <Helmet>
            <meta charSet="utf-8" />
            <title>Log-in | SEO Berlino </title>
            <meta type="description" content="" />
            <meta name="robots" content="noindex, nofollow" />
            <link rel="canonical" />
          </Helmet>
          <div className="services3">
            <div className="pagetitle">Admin Log in</div>
            {this.state.error && (
              <div className="error marginright">
                Error, please check and try again
              </div>
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
            <button onClick={this.submit} className="servicesHP">
              Log in
            </button>
          </div>{" "}
        </div>
        <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />{" "}
        <br /> <br /> <br /> <br />
      </div>
    );
  }
}

export default LoginAdmin;
