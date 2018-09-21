import React, { Component } from "react";
import ReactDOM from "react";
import App from "./App";
import { BrowserRouter, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        Build using react - All right reserved - 2018
      </div>
    );
  }
}

export default Footer;
