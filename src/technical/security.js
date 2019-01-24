import React, { Component } from "react";
import ReactDOM from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { translate, Trans } from "react-i18next";
import i18n from "../i18n";
import { Helmet } from "react-helmet";

class Security extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    if (window.innerWidth < 1500) {
      window.scrollTo(0, 0);
    }
    const { t, i18n } = this.props;

    return (
      <div className="main">
        <Helmet>
          <meta charSet="utf-8" />
          <title>{t("technicalHP7")} | SEO Berlino</title>
          <meta
            name="description"
            content="Technical SEO: HTTPS and security and why its important in SEO "
          />
          <link
            rel="canonical"
            href={"/" + this.props.lng + "/technical/security"}
          />
        </Helmet>{" "}
        <img
          src="/auditmainpic/security.jpg"
          title="security, a photo by Ibrahim Rifath"
          alt="security SEO"
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
          <h1 className="h1services"> {t("technicalHP7")}</h1>{" "}
          <h2>{t("securityMPT1")}</h2>{" "}
          <div className="serviceText">
            <p>{t("securityMP1")}</p>{" "}
          </div>
          <img
            className="imageservices"
            src="/icons/notsecure.png"
            width="100px"
            height="32px"
          />
          <h2>{t("securityMPT2")}</h2>
          <div className="serviceText">
            <p>{t("securityMP2")}</p>{" "}
          </div>
          <div className="serviceText">
            <p>{t("securityMP3")}</p>
          </div>
          <h2> {t("")}</h2>
          <h2>{t("securityMPT4")}</h2>{" "}
          <div className="serviceText">{t("securityMP4")}</div>{" "}
          <div className="black slide-in-left sideLinks">
            <a
              className="block"
              href={"/" + this.props.lng + "/technical/indexation"}
            >
              {t("technicalHP1")}
            </a>
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
            <a className="block bold">{t("technicalHP7")}</a>
          </div>
        </div>{" "}
      </div>
    );
  }
}

export default translate("translations")(Security);
