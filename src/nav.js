import React, { Component } from "react";
import ReactDOM from "react";
import App from "./App";
import { BrowserRouter, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

export default class Navigation extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="mainbox">
        <div className="navEntries">
          <img className="logo" src="./13.png" width="75px" heigth="75px" />
          <Link className="navEntry" to="/">
            HOME
          </Link>
          <Link className="navEntry" to="/blog">
            BLOG
          </Link>
          <Link className="navEntry" to="/services">
            SERVICES
          </Link>
          <Link className="navEntry" to="/contact">
            CONTACT
          </Link>
          <Link className="navEntry" to="/about">
            ABOUT
          </Link>
        </div>
      </div>
    );
  }
}
