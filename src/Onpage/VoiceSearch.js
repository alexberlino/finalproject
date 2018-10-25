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
          <title>Voice Search SEO Berlino</title>
          <meta type="description" content="" />
          <link rel="canonical" />
        </Helmet>

        <h1 className="h1services"> Optimization for Voice Search</h1>
        <div className="serviceTitle"> Why it's Important</div>
        <div className="serviceText">
          Voice search is already disrupting online marketing. It already
          represents an important share of the number of searches. In order to
          be ready for it, every website needs to understand how it changes
          classical SEO.
        </div>
        <div className="serviceTitle"> What we can deliver to you</div>
        <div className="serviceText">
          A personalised report on voice searches for your industry and how this
          affect your on-page SEO strategy and your "VIP" Keywords.
        </div>
      </div>
    );
  }
}

export default translate("translations")(VoiceSearch);
