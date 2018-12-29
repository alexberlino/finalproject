import React, { Component } from "react";
import ReactDOM from "react";
import App from "./app";
import { BrowserRouter, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Impressum from "./impressum";
import i18n from "./i18n";
import { translate, Trans } from "react-i18next";

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="footer">
        <div className="footerQuarter">
          <div>
            <a
              onClick={() => this.props.languageChange("de")}
              className="footerflags"
              title="auf Deutsch"
              name="change language to German"
              href={"/de" + this.props.page}
            >
              DE{" "}
            </a>
            <a
              name="change language to English"
              onClick={() => this.props.languageChange("en")}
              title="change language to English"
              className="footerflags"
              width="25px"
              href={"/en" + this.props.page}
            >
              EN
            </a>

            <a
              onClick={() => this.props.languageChange("fr")}
              className="footerflags"
              title="en français"
              name="en français"
              href={"/fr" + this.props.page}
            >
              FR
            </a>
          </div>
        </div>
        <div className="footerLinks footerQuarter">
          <div className="footerlink">&copy; Alex Bieth 2018 </div>
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
          <a className="footerlink" href={"/sitemap.xml"}>
            sitemap
          </a>
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
