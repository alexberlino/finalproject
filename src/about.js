import React, { Component } from "react";
import ReactDOM from "react";
import App from "./App";
import { BrowserRouter, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";
import { translate, Trans } from "react-i18next";
import About2 from "./about2";
import i18n from "./i18n";

class About extends Component {
  constructor() {
    super();
    this.state = {
      clicked: false,
      categorie: null,
      hover: false
    };

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  handleClick() {
    this.setState({ categorie: "text-blur-out" });

    setTimeout(
      function() {
        this.setState({
          clicked: true,
          categorie: null
        });
      }.bind(this),
      500
    );
  }

  render() {
    const { t, i18n } = this.props;

    return (
      <div className="main">
        <div className={this.state.categorie} />

        <div>
          <Helmet>
            <meta charSet="utf-8" />
            <title>{t("aboutme")}</title>
          </Helmet>
        </div>
        <div className="aboutpage">
          <div className="aboutgeneric" />
          <div
            onClick={this.handleClick}
            className="blockAbout orange roll-in-left "
          >
            {t("about1")}
          </div>
          <div onClick={this.handleClick} className="blockAbout green">
            {t("about2")}
          </div>
          <div
            onClick={this.handleClick}
            className="blockAbout orange roll-in-left"
          >
            {t("about3")}
          </div>
          <div
            onClick={this.handleClick}
            className="blockAbout orange roll-in-left"
          >
            {t("about4")}
          </div>
          <div onClick={this.handleClick} className="blockAbout green">
            {t("about5")}
          </div>
          <div
            onClick={this.handleClick}
            className="blockAbout orange roll-in-left"
          >
            {t("about6")}
          </div>
          <div onClick={this.handleClick} className="blockAbout green">
            {t("about7")}
          </div>
          <div className="blockAbout2 bounce-in-top">
            <a href="https://www.linkedin.com/in/alex-bieth-berlin/?locale=de_DE">
              LinkedIn Profile
            </a>
          </div>
        </div>
      </div>
    );
  }
}
export default translate("translations")(About);

// const getStateFromRedux = state => {
//   return {
//     messages: state.messages
//   };
// };

// export default connect(getStateFromRedux)(About);
