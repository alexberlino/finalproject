import React, { Component } from "react";
import ReactDOM from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { translate, Trans } from "react-i18next";
import i18n from "../i18n";
import { Helmet } from "react-helmet";

class Crawlability extends Component {
  render() {
    const { t, i18n } = this.props;
    console.log(this.props.i18n.language);

    return (
      <div className="mainRightServices">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Technical SEO: Crawlability SEO Berlino</title>
          <meta type="description" content="" />
          <link rel="canonical" />
        </Helmet>

        <h2 className="h1services"> Crawlability</h2>
        <div className="serviceTitle"> Why it's Important</div>
        <div className="serviceText">
          Crawlibility goes hand in hand with indexation. In order to adjust and
          optimize indexation, you can improve and guide Google on how it crawls
          your site.
        </div>
        <div className="serviceTitle"> To do</div>
        <div className="serviceText">
          Set-up or Audit of your sitemaps, robots file and robots metas. Check
          server logs.
        </div>
      </div>
    );
  }
}

export default translate("translations")(Crawlability);
