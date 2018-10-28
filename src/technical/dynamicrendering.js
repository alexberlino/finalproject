import React, { Component } from "react";
import ReactDOM from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { translate, Trans } from "react-i18next";
import i18n from "../i18n";
import { Helmet } from "react-helmet";

class DynamicRendering extends Component {
  render() {
    if (window.innerWidth < 1500) {
      window.scrollTo(0, 0);
    }
    const { t, i18n } = this.props;
    console.log(this.props.i18n.language);

    return (
      <div className="mainRightServices">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Technical SEO: Dynamic Rendering || SEO Berlino</title>
          <meta type="description" content="" />
          <link rel="canonical" />
        </Helmet>
        <h1 className="h1services"> Dynamic Rendering</h1>
        <div className="serviceTitle"> Why it's Important</div>
        <div className="serviceText">
          For JavaScript apps (such as this one), search engines such as Google
          still struggle to properly crawl and index all pages. Although they
          say they can achieve this overtime, after many "visits", they do
          recommend for most sites to use dynamic rendering.
        </div>
        <div className="serviceTitle">To do</div>
        <div className="serviceText">
          Help you efficiently implement dynamic rendering, if your site
          actually needs it.
        </div>
      </div>
    );
  }
}

export default translate("translations")(DynamicRendering);
