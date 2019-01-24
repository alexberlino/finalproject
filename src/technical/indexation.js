import React, { Component } from "react";
import ReactDOM from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { translate, Trans } from "react-i18next";
import i18n from "../i18n";
import { Helmet } from "react-helmet";

class Indexation extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    const { t, i18n } = this.props;

    return (
      <div className="main">
        <Helmet>
          <meta charSet="utf-8" />
          <title>{t("technicalHP1")} | SEO Berlino</title>
          <meta
            name="description"
            content="Technical SEO: indexation and why its important in SEO "
          />
          <link
            rel="canonical"
            href={"/" + this.props.lng + "/technical/indexation"}
          />
        </Helmet>
        <img
          src="/auditmainpic/indexation.jpg"
          title="indexation, a photo by Scott Rodgerson"
          alt={t("technicalHP1")}
          className="imageAudit"
        />
        <div className="services">
          <div className="breadcrumb">
            <img className="iconsmore2" src="/arrow.png" />

            <a href={"/" + this.props.lng}> {t("services")} </a>
            <img className="iconsmore2" src="/arrow.png" />

            <a href={"/" + this.props.lng + "/resources"}> AUDIT </a>
            <img className="iconsmore2" src="/arrow.png" />

            <a href={"/" + this.props.lng + "/technical"}> {t("technical")} </a>
          </div>
          <h1 className="h1services">{t("technicalHP1")}</h1>{" "}
          <h2> {t("indexationMPT1")}</h2>
          <div className="serviceText">
            <p> {t("indexationMP1")}</p>
            <img
              src="/icons/indexation.png"
              alt="indexation"
              title="indexation"
              className="imageservices"
              width="100px"
              height="100px"
            />
          </div>
          <h2> {t("indexationyMPT2")}</h2>
          <div className="serviceText"> {t("indexationMP2")}</div>
          <div className="serviceText"> {t("indexationMP22")}</div>
          <h2> {t("indexationMPT3")}</h2>
          <div className="serviceText"> {t("indexationMP3")}</div>
          <h2> Check for metas {t("")}</h2>
          <div className="serviceText"> {t("indexationMP4")}</div>
          <div className="black slide-in-left sideLinks">
            <a className="block bold">{t("technicalHP1")}</a>
            <a
              className="block"
              href={"/" + this.props.lng + "/technical/crawlability"}
            >
              {t("technicalHP2")}
            </a>
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

export default translate("translations")(Indexation);
