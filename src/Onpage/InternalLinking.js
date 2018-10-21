import React, { Component } from "react";
import ReactDOM from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { translate, Trans } from "react-i18next";
import i18n from "../i18n";
import { Helmet } from "react-helmet";

class InternalLinking extends Component {
  render() {
    const { t, i18n } = this.props;
    console.log(this.props.i18n.language);

    return (
      <div className="mainRightServices">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Internal Linking SEO Berlino</title>
        </Helmet>

        <h1 className="h1services"> Internal Linking </h1>
        <div className="serviceTitle"> Why it's (extermely) Important</div>
        <div className="serviceText">
          Internal Linking is core for on-page SEO, especially for big websites.
          Link juice redistribution, prioritization of key pages or site
          sections to name a few reasons.
        </div>
        <div className="serviceTitle"> What we can deliver to you</div>
        <div className="serviceText">
          Check how the Landing page fits within the website, is it optimized
          for its content.
        </div>
      </div>
    );
  }
}

export default translate("translations")(InternalLinking);
