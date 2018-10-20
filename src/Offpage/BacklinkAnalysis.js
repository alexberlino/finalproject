import React, { Component } from "react";
import ReactDOM from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { translate, Trans } from "react-i18next";
import i18n from "../i18n";
import { Helmet } from "react-helmet";

class BacklinkAnalysis extends Component {
  render() {
    const { t, i18n } = this.props;
    console.log(this.props.i18n.language);

    return (
      <div className="main">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Off-page: Backlink Analysis || SEO Berlino</title>
        </Helmet>
        <h1 className="h1services"> Keyword Research </h1>
        <div className="serviceTitle"> Why it's Important</div>
        <div className="serviceText">
          {" "}
          Keyword Research is critical to understand how your potential clients
          are searching for the product or services you are offering.
        </div>
        <div className="serviceTitle"> What I can deliver to you</div>
        <div className="serviceText">
          {" "}
          Provide to you a list of the best keywords for both visibility and
          target niche.
        </div>
      </div>
    );
  }
}

export default translate("translations")(BacklinkAnalysis);
