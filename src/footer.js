import React, { Component } from "react";
import ReactDOM from "react";
import App from "./app";
import { BrowserRouter, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Impressum from "./impressum";
import i18n from "./i18n";
import { translate, Trans } from "react-i18next";
import LinksToPages from "./LinksToPages";

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div className="footer">
          <div className="footerLinks footerQuarter">
            <Link className="footerlink " to={"/en/login"}>
              login
            </Link>
            <a className="footerlink" href={"/en/admin"}>
              admin
            </a>
            <Link
              className="footerlink"
              to={"/" + this.props.lng + "/impressum"}
            >
              impressum
            </Link>
            <a className="footerlink" href={"/sitemap.xml"}>
              sitemap
            </a>

            <div className="footerlink">&copy; Alex Bieth 2018 </div>
          </div>

          <div className="footerLinks">
            <LinksToPages />
          </div>

          <div className="footerLinks footerQuarter">
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
            </a>{" "}
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
