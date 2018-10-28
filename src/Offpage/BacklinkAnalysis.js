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
      <div className="mainRightServices">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Off-page: Backlink Analysis || SEO Berlino</title>
          <meta type="description" content="" />
          <link rel="canonical" />
        </Helmet>

        <h1 className="h1services"> Backlink Analysis</h1>
        <div className="serviceTitle"> Why it's Important</div>
        <div className="serviceText">
          Links are still very important in SEO. It is therefore crucial to
          understand where you stand, plan, execute and control your backlinks
          activities.
        </div>
        <div className="serviceTitle"> To do</div>
        <div className="serviceText">
          <li>Analyse your backlink profile and of your competitors.</li>
          <li>
            Create a report with your profile's pros and cons, including *toxic
            links*. Follow and no-follow, quality of links, anchor text.
          </li>
          <li>
            Based on your industry and your competition, make some
            recommendations with an action plan, focusing on *brand building*.
          </li>
        </div>
        <div className="serviceTitle"> Related Tools and Resources</div>
        <div className="serviceText">
          <a className="block" href="https://moz.com/link-explorer">
            Moz Link Explorer
          </a>{" "}
          <a className="block" href="https://de.majestic.com/">
            Majestic SEO
          </a>
          <a className="block" href="https://ahrefs.com/de/">
            ahrefs
          </a>{" "}
        </div>
      </div>
    );
  }
}

export default translate("translations")(BacklinkAnalysis);
