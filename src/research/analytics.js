import React, { Component } from "react";
import ReactDOM from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { translate, Trans } from "react-i18next";
import i18n from "../i18n";
import { Helmet } from "react-helmet";

class Analytics extends Component {
  render() {
    const { t, i18n } = this.props;
    console.log(this.props.i18n.language);

    return (
      <div className="mainRightServices">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Analytics || SEO Berlino</title>
          <meta type="description" content="" />
          <link rel="canonical" />
        </Helmet>
        <h2 className="h1services"> Analytics</h2>
        <div className="serviceTitle"> Why it's (extremely) Important</div>
        <div className="serviceText">
          In order to efficiently work in SEO, especially for on-page work, it
          is crucial to use reliable data, and analytics is key here in
          compiling reports which will enable for instance to identify the
          number of visits/unique visitors and conversions for specific pages
          and site sections, or compare data by device type or browser.
        </div>
        <div className="serviceTitle"> To do</div>
        <div className="serviceText">
          Set-up or fix your Analytics if not implemented or if the data is not
          reliable. Create reports for SEO monitoring and controlling.
        </div>
        <div className="serviceTitle"> Relevant Tools and Resources</div>
        <div className="serviceText">
          <footer>Google Analytics </footer>
          <footer>Site Catalyst / Omniture</footer>
        </div>
      </div>
    );
  }
}

export default translate("translations")(Analytics);
