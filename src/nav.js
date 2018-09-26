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
      <div className="containerNav">
        <div className="navEntries">
          <img className="logo" src="/logo.png" width="75px" heigth="75px" />
          <Link className="navEntry" to={"/" + this.state.lang}>
            <p onClick={() => this.changePageState("/")}>HOME</p>
          </Link>

          <Link className="navEntry" to={"/" + this.state.lang + "/about"}>
            <p onClick={() => this.changePageState("/about")}>{t("about")}</p>
          </Link>

          <Link className="navEntry" to={"/" + this.state.lang + "/blog"}>
            <p onClick={() => this.changePageState("/blog")}>BLOG</p>
          </Link>
          <Link className="navEntry" to={"/" + this.state.lang + "/contact"}>
            <p onClick={() => this.changePageState("/contact")}>
              {t("contact")}
            </p>
          </Link>
          <div className="dropdown">
            <a href="#">
              <p className="dropbtn">SEO</p>
            </a>
            <div className="dropdown-content">
              <Link to={"/" + this.state.lang + "/onpage"}>
                {" "}
                <p onClick={() => this.changePageState("/onpage")}>ON-PAGE</p>
              </Link>

              <Link to={"/" + this.state.lang + "/offpage"}>
                {" "}
                <p onClick={() => this.changePageState("/offpage")}>OFFPAGE</p>
              </Link>
              <Link to={"/" + this.state.lang + "/technical"}>
                <p onClick={() => this.changePageState("/technical")}>
                  {t("technical")}
                </p>
              </Link>
              <Link to={"/" + this.state.lang + "/audit"}>
                {" "}
                <p onClick={() => this.changePageState("/audit")}>AUDIT</p>
              </Link>
            </div>
          </div>
          <div className="languageBtn">
            <Link to={"/de" + this.state.page}>
              <img
                className="languageBtnDE"
                onClick={() => this.changeLanguage("de")}
                height="27px"
                width="33px"
                src="/GERMANFLAG.png"
              />
            </Link>
            <Link to={"/en" + this.state.page}>
              <img
                className="languageBtnEN"
                onClick={() => this.changeLanguage("en")}
                height="27px"
                width="33px"
                src="/UKUSFLAG.jpeg"
              />
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default translate("translations")(Navigation);
