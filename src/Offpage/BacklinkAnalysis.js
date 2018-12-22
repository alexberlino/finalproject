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
          <title>Offpage SEO - Backlink Analysis | SEO Berlino</title>
          <meta type="description" content="" />
          <link
            rel="canonical"
            href="https://www.seoberlino.com/en/offpage/backlinkanalysis"
          />{" "}
        </Helmet>
        <div className="breadcrumb">
          <a href={"/" + this.props.lng}>> HOME ></a>

          <a href={"/" + this.props.lng + "/resources"}> RESOURCES ></a>

          <a href={"/" + this.props.lng + "/offpage"}> OFFPAGE </a>
        </div>
        <div className="mainRightServices">
          <h1 className="h1services"> Backlink Analysis</h1>
          <div className="serviceText">
            <li>Analyse your backlink profile and of your competitors.</li>
            <li>
              Create a report with your profile's pros and cons, including
              *toxic links*. Follow and no-follow, quality of links, anchor
              text.
            </li>
            <li>
              Based on your industry and your competition, make some
              recommendations with an action plan, focusing on *brand building*.
            </li>
          </div>
          <div className="serviceTitle">
            {" "}
            Backlinks are still very important in 2019
          </div>
          <div className="serviceText">
            It is crucial to understand where you stand, plan, execute and
            control your backlinks activities.
          </div>
          <h2 className="serviceTitle">Quality over quantity</h2>
          <h2 className="serviceTitle">
            Analyse your site's profile but don't forget to check your
            competitors
          </h2>
          <h2 className="serviceTitle">Anchor text</h2>
          <h2 className="serviceTitle">
            Refering Domains: page authority over domain authority
          </h2>
          <h2 className="serviceTitle"> Related Tools and Resources</h2>
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
          </div>{" "}
        </div>
      </div>
    );
  }
}

export default translate("translations")(BacklinkAnalysis);
