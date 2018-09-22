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
      <div className="mainWindow">
        <div className="navEntries">
          <img className="logo" src="./13.png" width="75px" heigth="75px" />
          <Link className="navEntry" to="/">
            HOME
          </Link>
          <div className="dropdown">
            <a>
              <button className="dropbtn">SERVICES</button>
            </a>
            <div className="dropdown-content">
              <Link to="/blog">ON-PAGE </Link>
              <Link to="/blog">OFF-PAGE </Link>
              <Link to="/blog">TECHNICAL</Link>
              <Link to="/blog">AUDIT</Link>
            </div>
          </div>

          <Link className="navEntry" to="/about">
            ABOUT
          </Link>

          <Link className="navEntry" to="/blog">
            BLOG
          </Link>
          <Link className="navEntry" to="/contact">
            CONTACT
          </Link>
        </div>
      </div>
    );
  }
}
