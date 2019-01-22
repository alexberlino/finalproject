import React, { Component } from "react";
import ReactDOM from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { translate, Trans } from "react-i18next";
import i18n from "../i18n";
import { Helmet } from "react-helmet";

class VoiceSearch extends Component {
  render() {
    const { t, i18n } = this.props;
    console.log(this.props.i18n.language);
    if (window.innerWidth < 1500) {
      window.scrollTo(0, 0);
    }

    return (
      <div className="main">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Voice Search - Onpage SEO Freelancer | SEO Berlino</title>
          <meta name="description" content="" />
          <link
            rel="canonical"
            href={"/" + this.props.lng + "/onpage/voicesearch"}
          />{" "}
        </Helmet>
        <img
          src="/auditmainpic/voice.jpg"
          title="voice, a photo by Jason Rosewell"
          alt="voice search SEO"
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
          <h1 className="h1services">
            On-page SEO: Optimization for Voice Search
          </h1>
          <h2 className="serviceTitle">
            {" "}
            What is Voice Search and why it's Important to be ready for it
          </h2>
          <div className="serviceText">
            Google Assistant, Alexa are just of those devices which are
            transforming search. Instead of typing searches, users now more and
            more ask for their need vocally. Voice search is already disrupting
            online marketing. It already represents an important share of the
            number of searches. In order to be ready for it, every website needs
            to understand how it changes classical SEO.
          </div>
          <h2 className="serviceTitle"> Questions</h2>
          <div className="serviceText">
            The main difference with traditional search is that many voice
            search requests are questions, so they begin with where, how, what,
            etc.
          </div>
          <h2 className="serviceTitle"> Longer Search terms</h2>
          <div className="serviceText">
            The second main difference is that the "keywords" are longer, mostly
            because the requests are questions and because users are more
            descriptive when voally expressing their needs, compared to typing.{" "}
          </div>
          <h2 className="serviceTitle"> Increasing Search Volume</h2>
          <div className="serviceText">
            Search volumes for such searches are still lower than the classical
            searches equivalent, but the volumes are continuously increasing and
            the keywords are more segmented, meaning there are more questions
            for the equivalent classical search term
          </div>
          <h2 className="serviceTitle"> Featured Snippet</h2>
          <div className="serviceText">
            One of the main advantage to be ready and optimized for search term
            is that you can be featured at "position 0" with the featured
            snippet, answering directly to the question of the search.
          </div>{" "}
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
            <a className="block bold">{t("onpageHP10")}</a>
          </div>{" "}
        </div>
      </div>
    );
  }
}

export default translate("translations")(VoiceSearch);
