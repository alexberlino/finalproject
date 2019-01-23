import React, { Component } from "react";
import ReactDOM from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { translate, Trans } from "react-i18next";
import i18n from "../i18n";
import { Helmet } from "react-helmet";

class Content extends Component {
  componentDidMount() {}

  render() {
    const { t, i18n } = this.props;

    if (window.innerWidth < 1500) {
      window.scrollTo(0, 0);
    }

    return (
      <div className="main">
        <Helmet>
          <meta charSet="utf-8" />
          <title>{t("onpageHP6")}| SEO Berlino</title>
          <meta
            name="description"
            content="Content and Semantics for SEO. Content is king and of course that applies also for SEO.
            Content should however not be written for SEO but for the clients and add value.

            "
          />
          <link
            rel="canonical"
            href={"/" + this.props.lng + "/onpage/content"}
          />{" "}
        </Helmet>
        <img
          src="/auditmainpic/content.jpg"
          title="content, a photo by Romain Vignes"
          alt="content SEO"
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

          <h1 className="h1services"> {t("onpageHP6")}</h1>
          <h2> {t("contentMPT1")}</h2>
          <div className="serviceText">{t("contentMP1")}</div>

          <h2> {t("contentMPT2")}</h2>
          <div className="serviceText">t("contentMP2")}</div>
          <img src="/content.svg" className="serviceImage" />
          <h2> {t("contentMPT3")}</h2>
          <div className="serviceText">{t("contentMP3")}</div>
          <div className="black slide-in-left sideLinks">
            <a
              className="block"
              href={"/" + this.props.lng + "/onpage/keywordresearch"}
            >
              {t("onpageHP1")}
            </a>
            <a
              className="block"
              href={"/" + this.props.lng + "/onpage/landingpages"}
            >
              {t("onpageHP2")}
            </a>
            <a
              className="block"
              href={"/" + this.props.lng + "/onpage/internallinking"}
            >
              {t("onpageHP3")} {t("onpageHP5")}
            </a>{" "}
            <a className="block" href={"/" + this.props.lng + "/onpage/metas"}>
              {t("onpageHP4")}
            </a>
            <span className="block bold">{t("onpageHP6")}</span>
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

export default translate("translations")(Content);
