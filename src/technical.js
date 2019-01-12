import React, { Component } from "react";
import ReactDOM from "react";
import App from "./App";
import { BrowserRouter, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { translate, Trans } from "react-i18next";
import i18n from "./i18n";
import { Helmet } from "react-helmet";
import LinksToPages from "./LinksToPages";
import Crawlability from "./technical/crawlability";
import DynamicRendering from "./technical/dynamicrendering";
import Indexation from "./technical/indexation";
import Internationalisation from "./technical/internationalisation";
import MobileFriendly from "./technical/mobilefriendly";
import PageSpeed from "./technical/pagespeed";
import Security from "./technical/security";
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
    console.log(this.props);

    return (
      <div className="main">
        <Helmet>
          <meta charSet="utf-8" />
          <title>
            Technical SEO Audit | SEO Expert Freelancer || SEO Berlino
          </title>
          <meta
            name="description"
            content="Technical SEO Freelancer in Berlin: indexation, crawlability, internationalisation, pagespeed, etc "
          />
          <link
            rel="canonical"
            href="https://www.seoberlino.com/en/technical"
          />
        </Helmet>
        <div className="services">
          <img
            src="/auditmainpic/technical.jpg"
            title="technical, a photo by Markus Spiske"
            alt="Technical SEO"
            height="450px"
            className="imageAudit"
          />
          <div className="breadcrumb">
            <a href={"/" + this.props.lng}> SEO FREELANCER </a>

            <a href={"/" + this.props.lng + "/resources"}> AUDIT </a>

            <a href={"/" + this.props.lng + "/technical"}> TECHNICAL </a>
          </div>

          <div className="infoTitle">
            <h1 className="h1services">Technical SEO </h1>
          </div>
          <div>
            <div className="marginright">
              <div className="black slide-in-left sideLinks">
                <a className="block" href="/en/technical/indexation">
                  {t("technicalHP1")}
                </a>
                <a className="block" href="/en/technical/crawlability">
                  {t("technicalHP2")}
                </a>
                <a className="block" href="/en/technical/internationalisation">
                  {t("technicalHP3")}
                </a>{" "}
                <a className="block" href="/en/technical/pagespeed">
                  {t("technicalHP4")}
                </a>
                <a className="block" href="/en/technical/mobilefriendly">
                  {t("technicalHP5")}
                </a>
                <a className="block" href="/en/technical/dynamicrendering">
                  {t("technicalHP6")}
                </a>
                <a className="block" href="/en/technical/security">
                  {t("technicalHP7")}
                </a>
              </div>
              <p className="italic">{t("technicalintro")}</p>
              <br />
              <h2>Technical SEO Checklist </h2>
              <p>{t("technicalintro2")}</p>
              <p>{t("technicalintro3")}</p>
              <p>{t("technicalintro4")}</p>
              <p>{t("technicalintro5")}</p>
              <p>{t("technicalintro6")}</p>
              <p>{t("technicalintro7")}</p>
              <p>{t("technicalintro8")}</p>
              <p>{t("technicalintro9")}</p>
            </div>{" "}
          </div>
        </div>
        <div>
          <LinksToPages />
        </div>{" "}
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
