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
          <meta type="description" content="" />
          <link rel="canonical" />
        </Helmet>
        <h2 className="h1services"> Local SEO</h2>
        <div className="serviceTitle"> Why it's Important</div>
        <div className="serviceText">
          Especially for local business, it is paramount to align your SEO
          overall strategy to local SEO. It is important to keep in mind that
          the most important factor in personalised search results is location.
        </div>
        <div className="serviceTitle"> To do</div>
        <div className="serviceText">
          In the audit which is affected by both on-page an off-page, local SEO
          factors such as city/ region mention will be taken in account.
        </div>
        <div className="serviceTitle"> Relevant Tools and Resources</div>
        <div className="serviceText">
          <footer>Google's MyBusiness</footer>
        </div>
      </div>
    );
  }
}

export default translate("translations")(LocalSEO);
