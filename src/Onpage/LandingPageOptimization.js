import React, { Component } from "react";
import ReactDOM from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { translate, Trans } from "react-i18next";
import i18n from "../i18n";
import { Helmet } from "react-helmet";
import LinksToPages from "../LinksToPages";

class LandingPageOptimization extends Component {
  render() {
    const { t, i18n } = this.props;
    console.log(this.props.i18n.language);

    return (
      <div className="main2">
        <Helmet>
          <meta charSet="utf-8" />
          <title>
            Onpage SEO Freelancer - Landing Page Optimization | SEO Berlino
          </title>
          <meta
            name="description"
            content="Landing Page Optimization is not just about UX and graphics.
                There are many SEO factors to look into: keywords targeting, content, linking, images and technical issues."
          />
          <link
            rel="canonical"
            href="https://www.seoberlino.com/en/onpage/landingpages"
          />{" "}
        </Helmet>
        <div className="services">
          <img
            src="/auditmainpic/landing.jpg"
            title="landing, a photo by chuttersnap"
            alt="landing page optimization"
            width="80%"
            height="450px"
            className="imageAudit"
          />
          <div className="breadcrumb">
            <a href={"/" + this.props.lng}>> SEO FREELANCER ></a>

            <a href={"/" + this.props.lng + "/resources"}> AUDIT ></a>

            <a href={"/" + this.props.lng + "/onpage"}> ONPAGE </a>
          </div>

          <h1 className="h1services">
            On-page SEO: Landing Page Optimization{" "}
          </h1>
          <div className="serviceTitle"> Why it's Important</div>
          <div className="serviceText">
            Often, companies create Landing pages and then expect it to perform
            as it is. There are actually many factors that will make a landing
            page work, from design & UX to SEO.
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
        </div>{" "}
        <LinksToPages />
      </div>
    );
  }
}

export default translate("translations")(LandingPageOptimization);
