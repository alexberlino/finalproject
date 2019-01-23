import React, { Component } from "react";
import ReactDOM from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { translate, Trans } from "react-i18next";
import i18n from "../i18n";
import { Helmet } from "react-helmet";

class Crawlability extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    const { t, i18n } = this.props;

    return (
      <div className="main">
        <Helmet>
          <meta charSet="utf-8" />
          <title>SEO {t("technicalHP2")} | SEO Berlino</title>
          <meta
            name="description"
            content={"Technical SEO:" + t("technicalHP2")}
          />
          <link
            rel="canonical"
            href={"/" + this.props.lng + "/technical/crawlability"}
          />
        </Helmet>
        <img
          src="/auditmainpic/crawl.jpg"
          title="crawl, a photo by Mathew Schwartz"
          alt={t("technicalHP2")}
          className="imageAudit"
        />
        <div className="services">
          <div className="breadcrumb">
            <img className="iconsmore2" src="/arrow.png" />

            <a href={"/" + this.props.lng}> {t("services")} </a>
            <img className="iconsmore2" src="/arrow.png" />

            <a href={"/" + this.props.lng + "/resources"}> AUDIT </a>
            <img className="iconsmore2" src="/arrow.png" />

            <a href={"/" + this.props.lng + "/technical"}> TECHNICAL </a>
          </div>
          <h1 className="h1services">{t("technicalHP2")}</h1>{" "}
          <div className="serviceText">{t("crawlabilityMPintro")}</div>
          <h2> Sitemap(s)</h2>
          <div className="serviceText">{t("crawlabilityMP1")}</div>
          <h2> Robots</h2>
          <div className="serviceText">{t("crawlabilityMP2")}</div>
          <h2> metas</h2>
          <div className="serviceText">{t("crawlabilityMP3")}</div>
          <h2> Search Console</h2>
          <div className="serviceText">{t("crawlabilityMP4")}</div>
          <h2> Indexation Google Crawl Credit {t("")}</h2>
          <div className="serviceText"> {t("crawlabilityMP5")}</div>
          <div className="black slide-in-left sideLinks">
            <a
              className="block"
              href={"/" + this.props.lng + "/technical/indexation"}
            >
              {t("technicalHP1")}
            </a>
            <a className="block bold">{t("technicalHP2")}</a>
            <a
              className="block"
              href={"/" + this.props.lng + "/technical/internationalisation"}
            >
              {t("technicalHP3")}
            </a>{" "}
            <a
              className="block"
              href={"/" + this.props.lng + "/technical/pagespeed"}
            >
              {t("technicalHP4")}
            </a>
            <a
              className="block"
              href={"/" + this.props.lng + "/technical/mobilefriendly"}
            >
              {t("technicalHP5")}
            </a>
            <a
              className="block"
              href={"/" + this.props.lng + "/technical/dynamicrendering"}
            >
              {t("technicalHP6")}
            </a>
            <a
              className="block"
              href={"/" + this.props.lng + "/technical/security"}
            >
              {t("technicalHP7")}
            </a>
          </div>
        </div>{" "}
      </div>
    );
  }
}

export default translate("translations")(Crawlability);
