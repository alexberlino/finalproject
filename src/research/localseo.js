import React, { Component } from "react";
import ReactDOM from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { translate, Trans } from "react-i18next";
import i18n from "../i18n";
import { Helmet } from "react-helmet";

class LocalSEO extends Component {
  render() {
    const { t, i18n } = this.props;
    console.log(this.props.i18n.language);

    return (
      <div className="mainRightServices">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Local SEO|| SEO Berlino</title>
        </Helmet>
        <h1 className="h1services"> Local SEO</h1>
        <div className="serviceTitle"> Why it's Important</div>
        <div className="serviceText">
          Often, companies create Landing pages and then expect it to perform as
          it is.
        </div>
        <div className="serviceTitle"> What I can deliver to you</div>
        <div className="serviceText">
          Check how the Landing page fits within the website, is it optimized
          for its content.
        </div>
        <div className="serviceTitle"> Tools and Resources</div>
        <div className="serviceText">
          <footer>CrazyEgg </footer>
        </div>
      </div>
    );
  }
}

export default translate("translations")(LocalSEO);
