import React, { Component } from "react";
import ReactDOM from "react";
import App from "./app";
import { BrowserRouter, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";
import Impressum from "./impressum";

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        Build using react - All right reserved - 2018
        <Link className="navEntry" to={"/en/postarticle"}>
          articles
        </Link>
        <Impressum />
      </div>
    );
  }
}

export default Footer;
