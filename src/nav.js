import React, { Component } from "react";
import ReactDOM from "react";
import App from "./App";
import { BrowserRouter, Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import i18n from "./i18n";
import { translate, Trans } from "react-i18next";
import DrawerToggleButton from "./DrawerToggleButton";
import Backdrop from "./Backdrop";

// require("react-bootstrap/lib/NavbarHeader";

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lang: this.props.i18n.language,
      page: location.pathname
    };
    this.changeLanguage = this.changeLanguage.bind(this);
    this.changePageState = this.changePageState.bind(this);
    console.log("PROPS", props);
    console.log("THISPROPS", this.props);
  }

  //location.pathname.slice(4)

  changeLanguage(lng) {
    console.log(lng);
    i18n.changeLanguage(lng);
    console.log(this.state.lang);

    this.setState({
      lang: lng
    });
    console.log(this.state.lang);
    // this.props.history.push("/" + lng);
  }

  changePageState(url) {
    this.setState({
      page: url
    });
  }

  render() {
    const { t, i18n } = this.props;
    console.log("STATE", this.state);

    return (
      <header className="toolbar">
        <nav className="toolbar_navigation">
          <div className="toolbar_toggle_button">
            <DrawerToggleButton click={this.props.drawerClickHandler} />
          </div>
          <div>
            <Link to={"/" + this.state.lang}>
              <img
                className="toolbar_logo"
                src="/logo.png"
                width="155px"
                heigth="125px"
                onClick={() => this.changePageState("/")}
              />
            </Link>
          </div>

          <div className="toolbar_navigation_items navEntries">
            <ul>
              <li>
                <Link to={"/" + this.state.lang + "/about"}>
                  <span onClick={() => this.changePageState("/about")}>
                    {t("about")}
                  </span>
                </Link>
              </li>

              <li>
                <Link to={"/" + this.state.lang + "/contact"}>
                  <span onClick={() => this.changePageState("/contact")}>
                    {t("contact")}
                  </span>
                </Link>
              </li>

              <li>
                <Link to={"/" + this.state.lang + "/blog"}>
                  <span onClick={() => this.changePageState("/blog")}>
                    BLOG
                  </span>
                </Link>
              </li>

              <li>
                <div className="dropdown">
                  <span className="dropbtn">{t("services")}</span>

                  <div className="dropdown-content">
                    <Link to={"/" + this.state.lang + "/onpage"}>
                      <span onClick={() => this.changePageState("/onpage")}>
                        ON-PAGE
                      </span>
                    </Link>

                    <Link to={"/" + this.state.lang + "/offpage"}>
                      <span onClick={() => this.changePageState("/offpage")}>
                        OFFPAGE
                      </span>
                    </Link>
                    <Link to={"/" + this.state.lang + "/technical"}>
                      <span onClick={() => this.changePageState("/technical")}>
                        {t("technical")}
                      </span>
                    </Link>
                    <Link to={"/" + this.state.lang + "/audit"}>
                      <span onClick={() => this.changePageState("/audit")}>
                        AUDIT
                      </span>
                    </Link>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <li className="languageBtn">
            <Link to={"/de" + this.state.page}>
              <img
                className="languageBtnDE"
                onClick={() => this.changeLanguage("de")}
                height="20px"
                width="25px"
                src="/GERMANFLAG.png"
              />
            </Link>
            <Link to={"/en" + this.state.page}>
              <img
                className="languageBtnEN"
                onClick={() => this.changeLanguage("en")}
                height="20px"
                width="25px"
                src="/UKUSFLAG.jpeg"
              />
            </Link>
          </li>
        </nav>
      </header>
    );
  }
}

export default translate("translations")(Navigation);
