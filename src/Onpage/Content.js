import React, { Component } from "react";
import ReactDOM from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { translate, Trans } from "react-i18next";
import i18n from "../i18n";
import { Helmet } from "react-helmet";

class Content extends Component {
  componentDidMount() {}

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
          <title>On-page:Content & Semantics || SEO Berlino</title>
          <link rel="canonical" />
        </Helmet>

        <h2 className="h1services"> Content & Semantics </h2>
        <div className="serviceTitle"> Why it's Important</div>
        <div className="serviceText">
          Content is King, and far away are the times when Google got tricked
          with keyword stuffing. As Google bots constantly improve to assess
          your website's content, and while mobile first means the content on
          the mobile version counts the most, space is more limited.
        </div>

        <img src="/content.svg" className="serviceImage" />
        <div className="serviceTitle"> To do</div>
        <div className="serviceText">
          Check content quality, good usage of semantics, still using the most
          important keywordsand variations in the right places, while keeping
          focus on relevancy for the user and not focus on Google only.
        </div>
      </div>
    );
  }
}

export default translate("translations")(Content);