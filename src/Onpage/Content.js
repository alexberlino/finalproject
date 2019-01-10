import React, { Component } from "react";
import ReactDOM from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { translate, Trans } from "react-i18next";
import i18n from "../i18n";
import { Helmet } from "react-helmet";
import LinksToPages from "../LinksToPages";

class Content extends Component {
  componentDidMount() {}

  render() {
    const { t, i18n } = this.props;
    console.log(this.props.i18n.language);
    if (window.innerWidth < 1500) {
      window.scrollTo(0, 0);
    }

    return (
      <div className="main2">
        <Helmet>
          <meta charSet="utf-8" />
          <title>
            Onpage SEO Freelancer - Content Optimization | SEO Berlino
          </title>
          <meta
            name="description"
            content="Content and Semantics for SEO. Content is king and of course that applies also for SEO.
            Content should however not be written for SEO but for the clients and add value.

            "
          />
          <link
            rel="canonical"
            href="https://www.seoberlino.com/en/onpage/content"
          />{" "}
        </Helmet>
        <div className="services">
          <img
            src="/auditmainpic/content.jpg"
            title="content, a photo by Romain Vignes"
            alt="content SEO"
            width="80%"
            height="450px"
            className="imageAudit"
          />
          <div className="breadcrumb">
            <a href={"/en"}>> SEO FREELANCER ></a>

            <a href={"/en/resources"}> AUDIT ></a>

            <a href={"/en/onpage"}> ONPAGE </a>
          </div>
          <h1 className="h1services"> On-page SEO: Content & Semantics </h1>
          <div className="serviceTitle">
            {" "}
            What does "content is king" really mean
          </div>
          <div className="serviceText">
            The content is the value you want to create. If you content has no
            value to the user, or if it is duplicate content, your content will
            not be brought forward. Check content quality, good usage of
            semantics, still using the most important keywords and variations in
            the right places, while keeping focus on relevancy for the user and
            not focus on SEO only.
          </div>

          <div className="serviceTitle">
            {" "}
            Content optimization is not keyword stuffing
          </div>
          <div className="serviceText">
            Content is King, but far away are the times when Google got tricked
            with keyword stuffing. As Google bots constantly improve to assess
            your website's content, your site will be penealised in rankings if
            your content doesn't make much sense linguisitcally or for the user.
          </div>
          <img src="/content.svg" className="serviceImage" />
          <div className="serviceTitle">
            {" "}
            The effects of mobile first on content
          </div>
          <div className="serviceText">
            Since mobile first indexation, the content on your mobile version is
            the master one for both mobile and desktop indexation. This means
            the content on the mobile version is the one which counts. Space on
            mobile is more limited than on desktop so choose your content
            carefully: engage your users, don't bore them with too much content,
            but enough to guide google bots.
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

export default translate("translations")(Content);
