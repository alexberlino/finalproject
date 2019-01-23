import React, { Component } from "react";
import ReactDOM from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { translate, Trans } from "react-i18next";
import i18n from "../i18n";
import { Helmet } from "react-helmet";

class DynamicRendering extends Component {
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
          <title>
            Dynamic Rendering - Technical SEO Freelancer | SEO Berlino
          </title>
          <meta
            name="description"
            content="Technical SEO Freelancer: dynamic rendering and why its important in SEO "
          />
          <link
            rel="canonical"
            href={"/" + this.props.lng + "/technical/dynamicrendering"}
          />
        </Helmet>
        <img
          src="/auditmainpic/java.jpg"
          title="script code, a photo by Markus Spiske"
          alt="javascript and dynamic rendering SEO"
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
          <h1 className="h1services"> Dynamic Rendering</h1>{" "}
          <div className="serviceText">
            For JavaScript apps such as React, Angular or View, search engines
            such as Google still struggle to properly crawl and index all pages.
            Although they say they can achieve this over time after many visits,
            they do recommend for most sites to use dynamic rendering. Get
            started with dynamic rendering. Currently, it's difficult to process
            JavaScript and not all search engine crawlers are able to process it
            successfully or immediately.
          </div>
          <br />
          <div className="serviceText">
            Dynamic rendering means switching between client-side rendered and
            pre-rendered content for specific user agents. Dynamic rendering is
            good for indexable, public JavaScript-generated content that changes
            rapidly, or content that uses JavaScript features that aren't
            supported by the crawlers you care about. Not all sites need to use
            dynamic rendering, and it's worth noting that dynamic rendering is a
            workaround for crawlers. Dynamic rendering requires your web server
            to detect crawlers for example by checking the user agent.
          </div>
          <br />
          <img
            src="/icons/javascript.png"
            className="imageservices"
            alt="javascript icon"
            width="100px"
            height="100px"
          />
          <div className="serviceText">
            Requests from crawlers are routed to a renderer, requests from users
            are served normally. Where needed, the dynamic renderer serves a
            version of the content that's suitable to the crawler, for example,
            it may serve a static HTML version.
          </div>
          <br />
          <div className="serviceText">
            To setup dynamic rendering for your content, install and configure a
            dynamic renderer to transform your content into static HTML that's
            easier for crawlers to consume. Some common dynamic renderers are
            Puppeteer, Rendertron, and prerender.io. Choose the user agents that
            you think should receive your static HTML and refer to your specific
            configuration details on how to update or add user agents.
          </div>
          <br />
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
            <a className="block bold">{t("technicalHP6")}</a>
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

export default translate("translations")(DynamicRendering);
