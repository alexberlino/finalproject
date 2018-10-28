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
                src="/logonew2.png"
                onClick={() => this.props.pageChange("/")}
              />
            </a>
          </div>

          <div className="languageBtn">
            <a
              className="languageBtnDE"
              onClick={() => this.props.languageChange("de")}
              href={"/de" + this.props.page}
            >
              DE
            </a>
            <a
              className="languageBtnEN"
              href={"/en" + this.props.page}
              onClick={() => this.props.languageChange("en")}
            >
              EN
            </a>
          </div>

          <div className="toolbar_navigation_items navEntries" />
          <div className="toolbar_toggle_button">
            <img
              src="/hamburger.svg"
              className="toggleMan"
              alt="hamburger menu"
              height="60px"
              width="60px"
              onClick={this.props.drawerClickHandler}
            />
          </div>
        </nav>
      </header>
    );
  }
}

export default translate("translations")(Navigation);
