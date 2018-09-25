import React, { Component } from "react";
import ReactDOM from "react";
import App from "./App";
import { BrowserRouter, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import i18n from "./i18n";
import { translate, Trans } from "react-i18next";

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lang: this.props.i18n.language,
      page: location.pathname
    };
    this.changeLanguage = this.changeLanguage.bind(this);
    this.changePageState = this.changePageState.bind(this);
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
    console.log("THISPROPS", this.props);
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
      <div className="mainWindow">
        <div className="navEntries">
          <img className="logo" src="/13.png" width="75px" heigth="75px" />
          <Link className="navEntry" to={"/" + this.state.lang}>
            <button onClick={() => this.changePageState("/")}>HOME</button>
          </Link>
          <div className="dropdown">
            <a href="#">
              <button className="dropbtn">{t("services")}</button>
            </a>
            <div className="dropdown-content">
              <Link to={"/" + this.state.lang + "/onpage"}>
                {" "}
                <button onClick={() => this.changePageState("/onpage")}>
                  ON-PAGE
                </button>
              </Link>

              <Link to={"/" + this.state.lang + "/offpage"}>
                {" "}
                <button onClick={() => this.changePageState("/offpage")}>
                  OFFPAGE
                </button>
              </Link>
              <Link to={"/" + this.state.lang + "/technical"}>
                <button onClick={() => this.changePageState("/technical")}>
                  {t("technical")}
                </button>
              </Link>
              <Link to={"/" + this.state.lang + "/audit"}>
                {" "}
                <button onClick={() => this.changePageState("/audit")}>
                  AUDIT
                </button>
              </Link>
            </div>
          </div>

          <Link className="navEntry" to={"/" + this.state.lang + "/about"}>
            <button onClick={() => this.changePageState("/about")}>
              {t("about")}
            </button>
          </Link>

          <Link className="navEntry" to={"/" + this.state.lang + "/blog"}>
            <button onClick={() => this.changePageState("/blog")}>BLOG</button>
          </Link>
          <Link className="navEntry" to={"/" + this.state.lang + "/contact"}>
            <button onClick={() => this.changePageState("/contact")}>
              {t("contact")}
            </button>
          </Link>
          <div className="languageBtn">
            <Link to={"/de" + this.state.page}>
              <button
                className="languageBtnDE"
                onClick={() => this.changeLanguage("de")}
              >
                <img height="27px" width="33px" src="/GERMANFLAG.png" />
              </button>
            </Link>
            <Link to={"/en" + this.state.page}>
              <button
                className="languageBtnEN"
                onClick={() => this.changeLanguage("en")}
              >
                <img height="27px" width="33px" src="/UKUSFLAG.jpeg" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default translate("translations")(Navigation);
