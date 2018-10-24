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
            <a name="change language to German" href={"/de" + this.props.page}>
              <img
                onClick={() => this.props.languageChange("de")}
                height="20px"
                className="footerflags"
                width="25px"
                alt="german"
                title="auf Deutsch"
                src="/GERMANFLAG.png"
              />
            </a>
            <a name="change language to English" href={"/en" + this.props.page}>
              <img
                onClick={() => this.props.languageChange("en")}
                height="20px"
                title="change language to English"
                className="footerflags"
                width="25px"
                src="/UKUSFLAG.jpeg"
                alt="english"
              />
            </a>
          </div>
        </div>
        <div className="footerLinks footerQuarter">
          <div className="footerlink">All Right Reserved 2018 Alex Bieth </div>
          <Link
            to={"/" + this.props.lang + "/aboutthiswebsite"}
            className="footerlink"
          >
            about this website
          </Link>
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
          <a
            name="my LinkedIn profile"
            href="https://www.linkedin.com/in/alex-bieth-berlin/?locale=de_DE"
          >
            <img
              alt="linkedin logo"
              src="/Linkedin-logo.png"
              height="30px"
              width="30px"
            />
          </a>
        </div>
      </div>
    );
  }
}

export default Footer;
