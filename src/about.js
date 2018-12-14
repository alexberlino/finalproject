import React, { Component } from "react";
import ReactDOM from "react";
import App from "./App";
import { BrowserRouter, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";
import { translate, Trans } from "react-i18next";
import i18n from "./i18n";

class About extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const { t, i18n } = this.props;

    return (
      <div className="main">
        <Helmet>
          <meta charSet="utf-8" />
          <title>{t("aboutme")}</title>
          <meta
            name="description"
            content="About me, SEO Berlino: SEO expert since 2010"
          />
          <link
            rel="canonical"
            href={"https://www.seoberlino.com/" + this.props.lng + "/about"}
          />{" "}
        </Helmet>
        <div className="breadcrumb">
          <a href={"/" + this.props.lng}>> HOME ></a>

          <a href={"/" + this.props.lng + "/about"}> ABOUT ></a>
        </div>

        <div className="blockAbout  yellow slide-in-left ">{t("about1")}</div>
        <div className="blockAbout yellow2 bounce-in-top">{t("about2")}</div>
        <div className="blockAbout  blue slide-in-left">{t("about3")}</div>
        <div className="blockAbout  blue2 slide-in-left">{t("about4")}</div>
        <div className="blockAbout yellow fade-in">{t("about5")}</div>
        <div className="blockAbout  blue slide-in-left">{t("about6")}</div>
        <div className="blockAbout yellow2">{t("about7")}</div>
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
