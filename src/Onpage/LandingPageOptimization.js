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
      <div className="mainRightServices">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Landing Page Optimization || SEO Berlino</title>
          <meta type="description" content="" />
          <link rel="canonical" />
        </Helmet>

        <h1 className="h1services"> Landing Page Optimization </h1>
        <div className="serviceTitle"> Why it's Important</div>
        <div className="serviceText">
          Often, companies create Landing pages and then expect it to perform as
          it is. There are actually many factors that will make a landing page
          work, from design & UX to SEO.
        </div>
        <div className="serviceTitle"> To do</div>
        <div className="serviceText">
          Check how the Landing page(s) fit(s) within your website, its
          connection to other pages and the landing page, internal and external
          links pointing to it, content and semantics, technical aspects, image
          optimization, and other relevancy factors.
        </div>
      </div>
    );
  }
}

export default translate("translations")(LandingPageOptimization);
