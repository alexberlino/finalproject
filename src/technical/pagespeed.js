import React, { Component } from "react";
import ReactDOM from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { translate, Trans } from "react-i18next";
import i18n from "../i18n";
import { Helmet } from "react-helmet";

class PageSpeed extends Component {
  render() {
    const { t, i18n } = this.props;
    console.log(this.props.i18n.language);

    return (
      <div className="mainRightServices">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Technical SEO: PageSpeed || SEO Berlino</title>
          <meta type="description" content="" />
          <link rel="canonical" />
        </Helmet>
        <h2 className="h1services"> PageSpeed</h2>
        <div className="serviceTitle"> Why it's Important</div>
        <div className="serviceText">
          If your pages are slow to load, Google will figure it out and will
          categorize your website as poor user experience, therefore suffering
          in terms of organic visibility. If you haven't done it yet, I strongly
          advise you to use the PageSpeed Insights tool (link below){" "}
        </div>

        <div className="serviceTitle"> Tools and Resources</div>
        <div className="serviceText">
          <footer>
            <a href="https://developers.google.com/speed/pagespeed/insights/?hl=de">
              Google PageSpeed Insights
            </a>{" "}
            <div className="block"> Lighthouse</div>
          </footer>
        </div>
      </div>
    );
  }
}

export default translate("translations")(PageSpeed);
