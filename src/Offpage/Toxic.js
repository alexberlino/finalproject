import React, { Component } from "react";
import ReactDOM from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { translate, Trans } from "react-i18next";
import i18n from "../i18n";
import { Helmet } from "react-helmet";

class Toxic extends Component {
  render() {
    const { t, i18n } = this.props;
    console.log(this.props.i18n.language);

    return (
      <div className="main">
        <Helmet>
          <meta charSet="utf-8" />
          <title>
            Toxic Links Cleaning - Offpage SEO Freelancer | SEO Berlino
          </title>
          <meta type="description" content="" />
          <link
            rel="canonical"
            href={"/" + this.props.lng + "/offpage/toxic"}
          />
        </Helmet>
        <img
          src="/auditmainpic/toxic.jpg"
          title="toxic, a photo by Scott Rodgerson"
          alt="backlinking"
          className="imageAudit"
        />
        <div className="services">
          <div className="breadcrumb">
            <img className="iconsmore2" src="/arrow.png" />

            <a href={"/" + this.props.lng}> {t("services")} </a>
            <img className="iconsmore2" src="/arrow.png" />

            <a href={"/" + this.props.lng + "/resources"}> AUDIT </a>
            <img className="iconsmore2" src="/arrow.png" />

            <a href={"/" + this.props.lng + "/offpage"}> OFFPAGE </a>
          </div>

          <h1 className="h1services"> {t("linkstoavoidtitle")}</h1>
          <div className="serviceTitle"> Quality over quantity</div>
          <div className="serviceText">{t("linkstoavoid1")}</div>
          <div className="serviceTitle">
            {" "}
            You are responsible for the links that point to you
          </div>
          <div className="serviceText">{t("linkstoavoid2")}</div>

          <div className="serviceTitle"> Too many links from one domain</div>
          <div className="serviceText">{t("linkstoavoid3")}</div>

          <div className="serviceTitle">
            {" "}
            Disavow and contact them to remove them
          </div>
          <div className="serviceText">{t("linkstoavoid4")}</div>
          <div className="sideLinks black slide-in-left">
            <a
              className="block"
              href={"/" + this.props.lng + "/offpage/backlinkanalysis"}
            >
              {t("offpageHP1")}, {t("offpageHP2")}
            </a>
            <a
              className="block"
              href={"/" + this.props.lng + "/offpage/brandbuilding"}
            >
              {t("offpageHP3")}, {t("offpageHP4")}
            </a>{" "}
            <span className="block bold">{t("offpageHP5")}</span>
          </div>
        </div>{" "}
      </div>
    );
  }
}

export default translate("translations")(Toxic);
