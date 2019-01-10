import React, { Component } from "react";
import ReactDOM from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { translate, Trans } from "react-i18next";
import i18n from "../i18n";
import { Helmet } from "react-helmet";
import LinksToPages from "../LinksToPages";

class InternalLinking extends Component {
  render() {
    const { t, i18n } = this.props;
    console.log(this.props.i18n.language);

    return (
      <div className="main">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Internal Linking - Onpage SEO Freelancer| SEO Berlino</title>
          <meta type="description" content="" />
          <link
            rel="canonical"
            href="https://www.seoberlino.com/en/onpage/internallinking"
          />{" "}
        </Helmet>
        <div className="services">
          <img
            src="/auditmainpic/internal.jpg"
            title="arrow, a photo by Scott Rodgerson"
            alt="internal linking SEO"
            width="80%"
            height="450px"
            className="imageAudit"
          />
          <div className="breadcrumb">
            <a href={"/" + this.props.lng}>> SEO FREELANCER ></a>

            <a href={"/" + this.props.lng + "/resources"}> AUDIT ></a>

            <a href={"/" + this.props.lng + "/onpage"}> ONPAGE </a>
          </div>

          <h1 className="h1services"> On-page SEO: Internal Linking </h1>
          <div className="serviceTitle"> Why it's (extermely) Important</div>
          <div className="serviceText">
            Internal Linking is core for on-page SEO, especially for big
            websites. Link juice redistribution, prioritization of key pages or
            site sections to name a few reasons.
          </div>
          <div className="serviceTitle"> To do</div>
          <div className="serviceText">
            Review and audit your current internal linking settings, including
            navigation, sub-navigations, breadcrumb and tags, taking into
            account business prioritization. Report action plan with main
            priority points and explanations for each points.
          </div>

          <div className="serviceTitle"> Some relevant tools</div>
          <div className="serviceText">Screaming Frog</div>
          <div className="black slide-in-left sideLinks">
            <a className="block" href="/en/onpage/keywordresearch">
              {t("onpageHP1")}
            </a>
            <a className="block" href="/en/onpage/landingpages">
              {t("onpageHP2")}
            </a>
            <a className="block" href="/en/onpage/internallinking">
              {t("onpageHP3")} {t("onpageHP5")}
            </a>{" "}
            <a className="block" href="/en/onpage/metas">
              {t("onpageHP4")}
            </a>
            <a className="block" href="/en/technical/mobilefriendly">
              <a className="block" href="/en/onpage/content">
                {t("onpageHP6")}
              </a>
            </a>
            <a className="block" href="/en/onpage/images">
              {t("onpageHP7")}
            </a>
            <a className="block" href="/en/onpage/structureddata">
              {t("onpageHP8")}
            </a>{" "}
            <a className="block" href="/en/onpage/duplicatecontent">
              {t("onpageHP9")}
            </a>
            <a className="block" href="/en/onpage/voicesearch">
              {t("onpageHP10")}
            </a>
          </div>
        </div>
        <LinksToPages />
      </div>
    );
  }
}

export default translate("translations")(InternalLinking);
