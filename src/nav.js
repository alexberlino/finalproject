import React, { Component } from "react";
import ReactDOM from "react";
import App from "./App";
import { BrowserRouter, Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import i18n from "./i18n";
import { translate, Trans } from "react-i18next";
import Backdrop from "./Backdrop";

// require("react-bootstrap/lib/NavbarHeader";

class Navigation extends Component {
  constructor(props) {
    super(props);
  }

  //location.pathname.slice(4)

  render() {
    const { t, i18n } = this.props;

    return (
      <header className="toolbar">
        <nav className="toolbar_navigation">
          <div>
            <a name="back to Homepage" href={"/" + this.props.lang}>
              <img
                alt="logo"
                className="toolbar_logo"
                src="/logonew.png"
                onClick={() => this.props.pageChange("/")}
              />
            </a>
          </div>

          <div className="languageBtn">
            <a href={"/de" + this.props.page}>
              <img
                className="languageBtnDE"
                alt="German"
                onClick={() => this.props.languageChange("de")}
                height="26px"
                width="32px"
                src="/GERMANFLAG.png"
              />
            </a>
            <a href={"/en" + this.props.page}>
              <img
                className="languageBtnEN"
                alt="English"
                onClick={() => this.props.languageChange("en")}
                height="26px"
                width="32px"
                src="/UKUSFLAG.jpeg"
              />
            </a>
          </div>

          <div className="toolbar_navigation_items navEntries" />
          <div className="toolbar_toggle_button">
            <img
              src="/hamburger.svg"
              className="toggleMan"
              alt="hamburger menu"
              height="80px"
              width="80px"
              onClick={this.props.drawerClickHandler}
            />
          </div>
        </nav>
      </header>
    );
  }
}

export default translate("translations")(Navigation);
