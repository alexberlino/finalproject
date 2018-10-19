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
            <a href={"/" + this.props.lang}>
              <img
                className="toolbar_logo"
                src="/logo.png"
                width="150px"
                heigth="60px"
                onClick={() => this.props.pageChange("/")}
              />
            </a>
          </div>

          <div className="toolbar_navigation_items navEntries">
            <ul>
              <li>
                <a href={"/" + this.props.lang + "/about"}>
                  <span onClick={() => this.props.pageChange("/about")}>
                    {t("about")}
                  </span>
                </a>
              </li>

              <li>
                <div className="dropdown">
                  <span className="dropbtn">{t("services")}</span>

                  <div className="dropdown-content">
                    <a href={"/" + this.props.lang + "/onpage"}>
                      <span onClick={() => this.props.pageChange("/onpage")}>
                        ON-PAGE
                      </span>
                    </a>

                    <a href={"/" + this.props.lang + "/offpage"}>
                      <span onClick={() => this.props.pageChange("/offpage")}>
                        OFFPAGE
                      </span>
                    </a>
                    <a href={"/" + this.props.lang + "/technical"}>
                      <span onClick={() => this.props.pageChange("/technical")}>
                        {t("technical")}
                      </span>
                    </a>
                    <a href={"/" + this.props.lang + "/audit"}>
                      <span onClick={() => this.props.pageChange("/audit")}>
                        AUDIT
                      </span>
                    </a>
                  </div>
                </div>
              </li>
              <li>
                <a href={"/" + this.props.lang + "/blog"}>
                  <span onClick={() => this.props.pageChange("/blog")}>
                    MY BLOG
                  </span>
                </a>
              </li>
              <li>
                <a href={"/" + this.props.lang + "/contact"}>
                  <span onClick={() => this.props.pageChange("/contact")}>
                    {t("contact")}
                  </span>
                </a>
              </li>
              <li>
                <a href={"/" + this.props.lang + "/seonews"}>
                  <span onClick={() => this.props.pageChange("/seonews")}>
                    SEO NEWS
                  </span>
                </a>
              </li>

              <li>
                <a href={"/" + this.props.lang + "/resources"}>
                  <span onClick={() => this.props.pageChange("/resources")}>
                    RESOURCES
                  </span>
                </a>
              </li>
            </ul>
          </div>
          <li className="languageBtn">
            <Link to={"/de" + this.props.page}>
              <img
                className="languageBtnDE"
                onClick={() => this.props.languageChange("de")}
                height="30px"
                width="45px"
                src="/GERMANFLAG.png"
              />
            </Link>
            <Link to={"/en" + this.props.page}>
              <img
                className="languageBtnEN"
                onClick={() => this.props.languageChange("en")}
                height="30px"
                width="45px"
                src="/UKUSFLAG.jpeg"
              />
            </Link>
          </li>
          <div className="toolbar_toggle_button">
            <img
              src="/hamburger.svg"
              className="toggleMan"
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
