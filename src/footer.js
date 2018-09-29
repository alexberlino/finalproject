import React, { Component } from "react";
import ReactDOM from "react";
import App from "./app";
import { BrowserRouter, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";
import Impressum from "./impressum";
import i18n from "./i18n";
import { translate, Trans } from "react-i18next";

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // lang: this.props.i18n.language,
      // page: location.pathname
    };
  }
  render() {
    return (
      <div className="footer">
        Built with react - 2018
        <Link className="navEntry" to={"/en/login"}>
          login
        </Link>
        <a className="navEntry" href={"/en/admin"}>
          admin
        </a>
        <Link to={"/en/impressum"} className="navEntry">
          impressum
        </Link>
      </div>
    );
  }
}

export default Footer;
