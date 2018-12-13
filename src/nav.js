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
            <Link
              className="languageBtnDE"
              onClick={() => this.props.languageChange("de")}
              to={"/de" + this.props.page}
            >
              DE
            </Link>
            <Link
              className="languageBtnEN"
              to={"/en" + this.props.page}
              onClick={() => this.props.languageChange("en")}
            >
              EN
            </Link>
          </div>

          <div className="toolbar_navigation_items navEntries" />
          <div className="toolbar_toggle_button">
            <img
              src="/hamburger.svg"
              className="toggleMan"
              alt="hamburger menu"
              height="40px"
              width="40px"
              onClick={this.props.drawerClickHandler}
            />
          </div>
        </nav>
      </header>
    );
  }
}

export default translate("translations")(Navigation);
