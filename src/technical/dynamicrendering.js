import React, { Component } from "react";
import ReactDOM from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { translate, Trans } from "react-i18next";
import i18n from "../i18n";
import { Helmet } from "react-helmet";
import LinksToPages from "../LinksToPages";

class DynamicRendering extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    if (window.innerWidth < 1500) {
      window.scrollTo(0, 0);
    }
    const { t, i18n } = this.props;
    console.log(this.props.i18n.language);

    return (
      <div className="main2">
        <Helmet>
          <meta charSet="utf-8" />
          <title>
            Technical SEO Freelancer - Dynamic Rendering | SEO Berlino
          </title>
          <meta
            name="description"
            content="Technical SEO Freelancer: dynamic rendering and why its important in SEO "
          />
          <link
            rel="canonical"
            href="https://www.seoberlino.com/en/technical/dynamicrendering"
          />
        </Helmet>
        <div className="services">
          <img
            src="/auditmainpic/java.jpg"
            title="script code, a photo by Markus Spiske"
            alt="javascript and dynamic rendering SEO"
            width="80%"
            height="450px"
            className="imageAudit"
          />
          <div className="breadcrumb">
            <a href={"/" + this.props.lng}>> SEO FREELANCER ></a>

            <a href={"/" + this.props.lng + "/resources"}> AUDIT ></a>

            <a href={"/" + this.props.lng + "/technical"}> TECHNICAL </a>
          </div>
          <h1 className="h1services">
            {" "}
            Technical SEO Freelancer - Dynamic Rendering
          </h1>
          <div className="serviceTitle"> Why it's Important</div>
          <div className="serviceText">
            For JavaScript apps such as React, Angular or View, search engines
            such as Google still struggle to properly crawl and index all pages.
            Although they say they can achieve this over time after many visits,
            they do recommend for most sites to use dynamic rendering.
          </div>
          <img
            src="/icons/javascript.png"
            className="imageservices"
            alt="javascript icon"
            width="100px"
            height="100px"
          />
          <div className="serviceTitle">To do</div>
          <div className="serviceText">
            Find what solution is best for you: pre-rendering, server side
            rendering or dynamic rendering.
          </div>{" "}
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
        </div>{" "}
        <LinksToPages />
      </div>
    );
  }
}

export default translate("translations")(DynamicRendering);
