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
      <div className="mainRightServices">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Onpage SEO -Voice Search | SEO Berlino</title>
          <meta name="description" content="" />
          <link
            rel="canonical"
            href="https://www.seoberlino.com/en/onpage/voicesearch"
          />{" "}
        </Helmet>
        <div className="breadcrumb">
          <a href={"/" + this.props.lng}>> HOME ></a>

          <a href={"/" + this.props.lng + "/resources"}> RESOURCES ></a>

          <a href={"/" + this.props.lng + "/onpage"}> ONPAGE </a>
        </div>

        <h1 className="h1services"> Optimization for Voice Search</h1>

        <h2 className="serviceTitle"> What is Voice Search</h2>

        <h2 className="serviceTitle">
          {" "}
          Why it's Important to be ready for Voice Search
        </h2>
        <div className="serviceText">
          Voice search is already disrupting online marketing. It already
          represents an important share of the number of searches. In order to
          be ready for it, every website needs to understand how it changes
          classical SEO.
        </div>

        <h2 className="serviceTitle"> Questions</h2>

        <h2 className="serviceTitle"> Longer Search terms</h2>

        <h2 className="serviceTitle"> Increasing Search Volume</h2>

        <h2 className="serviceTitle"> Featured Snippet</h2>

        <h2 className="serviceTitle"> Quora</h2>
      </div>
    );
  }
}

export default translate("translations")(VoiceSearch);
