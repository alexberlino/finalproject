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
    console.log(this.props.i18n.language);

    return (
      <div className="main">
        <Helmet>
          <meta charSet="utf-8" />
          <title>
            Landing Pages Optimization - Onpage SEO Freelancer | SEO Berlino
          </title>
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

          <h1 className="h1services">Landing Pages</h1>
          <div className="serviceTitle"> Why it's Important</div>
          <div className="serviceText">
            Often, companies create Landing pages and then expect it to perform
            as it is. There are actually many factors that will make a landing
            page work, from design & UX to SEO. Users need to easily understand
            your website. They should be able to find what they want in a
            heartbeat. They should know where to click and how to navigate
            through your site. And it should be fast! A beautifully designed
            website is nice, but you should definitely make it your top priority
            to create a user-friendly website first!
          </div>
          <div className="serviceTitle"> To do</div>
          <div className="serviceText">
            <ul>
              <li>
                check how the page fits within the website, does it make sense
                in the user journey?
              </li>
              <li>keyword targeting</li>
              <li> outcoming links </li>

              <li>how is the page linked internally and externally</li>
              <li>content and semantics, out</li>
              <li>technical aspects including pagespeed</li>
              <li>image optimization</li>
            </ul>
          </div>
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
