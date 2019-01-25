import React, { Component } from "react";
import ReactDOM from "react";
import App from "./App";
import { BrowserRouter, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { translate, Trans } from "react-i18next";
import i18n from "./i18n";
import { Helmet } from "react-helmet";
import Analytics from "./research/analytics";
import BestPractices from "./research/bestpractices";
import LocalSEO from "./research/localseo";
import SEA from "./research/sea";
import ContactMain from "./ContactMain";

class Technical extends Component {
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
          <title>
            Research SEO & Analytics | SEO Expert Freelancer || SEO Berlino
          </title>
          <meta
            name="description"
            content="Research SEO Jobs: local SEO, Analytics, best practice, SEA"
          />
          <link
            rel="canonical"
            href={"https://www.seoberlino.com/" + this.props.lng + "/research"}
          />
        </Helmet>
        <img
          src="/auditmainpic/analysis.jpg"
          title="analysis, a photo by rawpixel"
          alt="SEO Analysis and Research"
          className="imageAudit"
        />

        <div className="services">
          <div className="breadcrumb">
            <img className="iconsmore2" src="/arrow.png" />

            <a href={"/" + this.props.lng}> {t("services")} </a>
            <img className="iconsmore2" src="/arrow.png" />

            <a href={"/" + this.props.lng + "/resources"}> SEO </a>
            <img className="iconsmore2" src="/arrow.png" />

            <a className="bold"> RESEARCH </a>
          </div>

          <div className="infoTitle">
            <h1 className="h1services">{t("researchMPh1")}</h1>
          </div>
          <div>
            <div className="marginright">
              <div className="black slide-in-left sideLinks">
                <a
                  className="block"
                  href={"/" + this.props.lng + "/research/localseo"}
                >
                  {t("analyticsHP1")}
                </a>
                <a
                  className="block"
                  href={"/" + this.props.lng + "/research/analytics"}
                >
                  {t("analyticsHP2")}
                </a>
                <a
                  className="block"
                  href={"/" + this.props.lng + "/research/bestpractices"}
                >
                  {t("analyticsHP3")}
                </a>
                <a
                  className="block"
                  href={"/" + this.props.lng + "/research/sea"}
                >
                  {t("analyticsHP6")}
                </a>
              </div>
              <p>{t("researchHP1")}</p>
              <p>{t("researchHP2")}</p>
              <p>{t("researchHP3")}</p>
            </div>{" "}
          </div>
        </div>
      </div>
    );
  }
}

export default translate("translations")(Technical);

// const getStateFromRedux = state => {
//   return {
//     messages: state.messages
//   };
// };
//
// export default connect(getStateFromRedux)(Homepage);
