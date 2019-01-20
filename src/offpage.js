import React, { Component } from "react";
import ReactDOM from "react";
import App from "./App";
import { BrowserRouter, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { translate, Trans } from "react-i18next";
import i18n from "./i18n";
import { Helmet } from "react-helmet";
import BacklinkAnalysis from "./Offpage/BacklinkAnalysis";
import BrandBuilding from "./Offpage/BrandBuilding";
import Toxic from "./Offpage/Toxic";
import ContactMain from "./ContactMain";

class Offpage extends Component {
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
            Off-page SEO Audit | SEO Expert Freelancer || SEO Berlino
          </title>
          <meta
            name="description"
            content="Offpage SEO Jobs: backlink competitor analysis, backlink profile, bradnbuilding opportunities, toxic link cleaning, best practice"
          />
          <link rel="canonical" href="https://www.seoberlino.com/en/offpage" />{" "}
        </Helmet>
        <div className="services">
          <div className="breadcrumb">
            <a href={"/" + this.props.lng}> SEO FREELANCER </a>

            <a href={"/" + this.props.lng + "/resources"}> AUDIT </a>

            <a href={"/" + this.props.lng + "/offpage"}> OFFPAGE </a>
          </div>
          <img
            src="/auditmainpic/offpage.jpg"
            title="links, a photo by Fré Sonneveld"
            alt="Offpage SEO"
            height="450px"
            className="imageAudit"
          />

          <div className="infoTitle">
            <h1 className="h1services">Offpage SEO Audit</h1>
          </div>
          <div>
            <div className="sideLinks black slide-in-left">
              <a className="block" href="/en/offpage/backlinkanalysis">
                {t("offpageHP1")}, {t("offpageHP2")}
              </a>
              <a className="block" href="/en/offpage/brandbuilding">
                {t("offpageHP3")}, {t("offpageHP4")}
              </a>{" "}
              <a className="block" href="/en/offpage/toxic">
                {t("offpageHP5")}
              </a>
            </div>
            <div className="marginright">
              <h2>What is Offpage SEO?</h2>
              <p>{t("offpageMP")}</p>
              <h2>Why is Off-Page SEO important?</h2>
              <p>
                <p>{t("offpageMP2")}</p>
              </p>
              <h2>What is linkbuilding?</h2>
              <p>
                <p>{t("offpageMP3")}</p>
              </p>
              <h2>Social Media </h2>
              <p>
                <p>{t("offpageMP4")}</p>
              </p>
              <h2>Social Bookmarking</h2>{" "}
              <p>
                <p>{t("offpageMP5")}</p>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default translate("translations")(Offpage);
