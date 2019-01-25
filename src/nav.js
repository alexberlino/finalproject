import React, { Component } from "react";
import ReactDOM from "react";
import App from "./App";
import { BrowserRouter, Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import i18n from "./i18n";
import axios from "./axios";
import { translate, Trans } from "react-i18next";
import Backdrop from "./Backdrop";

// require("react-bootstrap/lib/NavbarHeader";

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedEN: "",
      selectedDE: "",
      articles: [],
      show: ""
    };
  }

  static getDerivedStateFromProps(props, state) {
    return null;
  }

  clickHandlerClose() {
    this.setState({
      show: false
    });
    axios.get("/setcookiesession").then(res => {
      if (res.data.success) {
      }
    });
  }

  componentDidMount() {
    if (this.props.lang == "en") {
      this.state.selectedEN = "langselected";
    } else if (this.props.lang == "de") {
      this.state.selectedDE = "langselected";
    }
    axios.get("/checknotice").then(({ data }) => {
      if (!data.success) {
        this.setState({
          show: true
        });
      }
    });
  }

  //location.pathname.slice(4)

  render() {
    const { t, i18n } = this.props;

    return (
      <header className="toolbar">
        <nav className="toolbar_navigation">
          <a
            name="back to Homepage"
            href={"/" + this.props.lang}
            onClick={() => this.props.pageChange("/")}
          >
            <img alt="logo" className="toolbar_logo" src="/logo.jpg" />
          </a>

          <div className="toolbar_navigation_items navEntries">
            <ul>
              <li>
                <a href={"/" + this.props.lang + "/services"}>
                  <span onClick={() => this.props.pageChange("/services")}>
                    {t("servicesU")}
                  </span>
                </a>
              </li>

              <li>
                <a href={"/" + this.props.lang + "/resources"}>
                  <span onClick={() => this.props.pageChange("/resources")}>
                    SEO AUDIT
                  </span>
                </a>
              </li>

              <li>
                <a href={"/" + this.props.lang + "/blog"}>
                  <span onClick={() => this.props.pageChange("/blog")}>
                    BLOG
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
            </ul>
          </div>
          {this.state.show ? (
            <div className="cookienotice">
              <br /> <br /> <br /> <br /> <br /> <br />
              <div className="block">{t("cookie1")} </div>
              <div className="block">{t("cookie2")} </div>
              <div className="block"> {t("cookie3")} </div>
              <div className="block">
                <button
                  onClick={() => this.clickHandlerClose()}
                  className="buttonHP2"
                >
                  {t("cookie4")}
                </button>
                <Link to={"/" + this.props.lang + "/cookies"} className="black">
                  <button className="buttonHP2">{t("cookie5")} </button>{" "}
                </Link>
              </div>
            </div>
          ) : null}

          <div className="languageBtn">
            <Link
              className={"languageBtnEN " + this.state.selectedDE}
              onClick={() =>
                this.props.languageChange("de") ||
                this.setState({
                  selectedDE: "langselected",
                  selectedEN: ""
                })
              }
              to={"/de" + this.props.page}
            >
              DE
            </Link>
            <Link
              className={"languageBtnEN " + this.state.selectedEN}
              to={"/en" + this.props.page}
              onClick={() =>
                this.props.languageChange("en") ||
                this.setState({
                  selectedDE: "",
                  selectedEN: "langselected"
                })
              }
            >
              EN
            </Link>
          </div>

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
