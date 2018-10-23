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
        <div className="footerQuarter">
          <div>
            <a href={"/de" + this.props.page}>
              <img
                onClick={() => this.props.languageChange("de")}
                height="20px"
                className="footerflags"
                width="25px"
                title="auf Deutsch"
                src="/GERMANFLAG.png"
              />
            </a>
            <a href={"/en" + this.props.page}>
              <img
                onClick={() => this.props.languageChange("en")}
                height="20px"
                title="change language to English"
                className="footerflags"
                width="25px"
                src="/UKUSFLAG.jpeg"
              />
            </a>
          </div>
        </div>
        <div className="footerlink footerQuarter">
          All Right Reserved 2018 Alex Bieth{" "}
        </div>
        <div className="footerLinks footerQuarter">
          <Link className="footerlink " to={"/en/login"}>
            login
          </Link>
          <a className="footerlink" href={"/en/admin"}>
            admin
          </a>
          <Link className="footerlink" to={"/en/impressum"}>
            impressum
          </Link>
          <Link className="footerlink" to={"/sitemap"}>
            sitemap
          </Link>
        </div>
        <div className="footerQuarter">
          <a href="https://www.linkedin.com/in/alex-bieth-berlin/?locale=de_DE">
            <img src="/Linkedin-logo.png" height="30px" width="30px" />
          </a>
        </div>
      </div>
    );
  }
}

export default Footer;
