import React, { Component } from "react";
import ReactDOM from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { translate, Trans } from "react-i18next";
import i18n from "../i18n";
import { Helmet } from "react-helmet";

class LandingPageOptimization extends Component {
  render() {
    const { t, i18n } = this.props;

    return (
      <div className="main">
        <Helmet>
          <meta charSet="utf-8" />
          <title>{t("onpageHP2")} | SEO Berlino</title>
          <meta
            name="description"
            content="Landing Page Optimization is not just about UX and graphics.
                There are many SEO factors to look into: keywords targeting, content, linking, images and technical issues."
          />
          <link
            rel="canonical"
            href={"/" + this.props.lng + "/onpage/landingpages"}
          />{" "}
        </Helmet>
        <img
          src="/auditmainpic/landing.jpg"
          title="landing, a photo by chuttersnap"
          alt="landing page optimization"
          className="imageAudit"
        />
        <div className="services">
          <div className="breadcrumb">
            <img className="iconsmore2" src="/arrow.png" />

            <a href={"/" + this.props.lng}> {t("services")} </a>
            <img className="iconsmore2" src="/arrow.png" />

            <a href={"/" + this.props.lng + "/resources"}> AUDIT </a>
            <img className="iconsmore2" src="/arrow.png" />

            <a href={"/" + this.props.lng + "/onpage"}> ONPAGE </a>
          </div>
          <h1 className="h1services">{t("onpageHP2")}</h1>
          <div className="serviceText">{t("landingMP1")}</div>
          <h2> {t("landingMPT2")}</h2>
          <div className="serviceText">{t("landingMP2")}</div>
          <h2> {t("landingMPT3")}</h2>
          <div className="serviceText">{t("landingMP3")} </div>
          <h2>{t("landingMPT4")}</h2>
          <div className="serviceText">{t("landingMP4")} </div>
          <h2>{t("hey5")}</h2>
          <div className="serviceText">{t("landingMP5")} </div>

          <div className="black slide-in-left sideLinks">
            <a
              className="block"
              href={"/" + this.props.lng + "/onpage/keywordresearch"}
            >
              {t("onpageHP1")}
            </a>
            <a className="block bold">{t("onpageHP2")}</a>
            <a
              className="block"
              href={"/" + this.props.lng + "/onpage/internallinking"}
            >
              {t("onpageHP3")} {t("onpageHP5")}
            </a>{" "}
            <a className="block" href={"/" + this.props.lng + "/onpage/metas"}>
              {t("onpageHP4")}
            </a>
            <a
              className="block"
              href={"/" + this.props.lng + "/onpage/content"}
            >
              {t("onpageHP6")}
            </a>
            <a className="block" href={"/" + this.props.lng + "/onpage/images"}>
              {t("onpageHP7")}
            </a>
            <a
              className="block"
              href={"/" + this.props.lng + "/onpage/structureddata"}
            >
              {t("onpageHP8")}
            </a>{" "}
            <a
              className="block"
              href={"/" + this.props.lng + "/onpage/duplicatecontent"}
            >
              {t("onpageHP9")}
            </a>
            <a
              className="block"
              href={"/" + this.props.lng + "/onpage/voicesearch"}
            >
              {t("onpageHP10")}
            </a>
          </div>
        </div>{" "}
      </div>
    );
  }
}

export default translate("translations")(LandingPageOptimization);
