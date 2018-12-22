import React, { Component } from "react";
import ReactDOM from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { translate, Trans } from "react-i18next";
import i18n from "../i18n";
import { Helmet } from "react-helmet";

class Toxic extends Component {
  render() {
    const { t, i18n } = this.props;
    console.log(this.props.i18n.language);

    return (
      <div className="mainRightServices">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Offpage SEO - Toxic Links Cleaning | SEO Berlino</title>
          <meta type="description" content="" />
          <link
            rel="canonical"
            href="https://www.seoberlino.com/en/offpage/toxic"
          />
        </Helmet>
        <div className="main2">
          <div className="breadcrumb">
            <a href={"/" + this.props.lng}>> HOME ></a>

            <a href={"/" + this.props.lng + "/resources"}> RESOURCES ></a>

            <a href={"/" + this.props.lng + "/offpage"}> OFFPAGE </a>
          </div>
          <h2 className="h1services"> Cleaning Toxic Links </h2>
          <div className="serviceTitle"> Why it's Important</div>
          <div className="serviceText">
            Many think the more the better but it doesn't actually work that
            way. Too many low quality and/or spammy links and your website will
            lose "Google credibility" and therefore visibility.
          </div>
          <div className="serviceTitle"> To do</div>
          <div className="serviceText">
            Since a few years already, you as website owner are responsible for
            the backlinks pointing to your site, so you need to constantly
            monitor, identify bad links and clean up your backlink profile.
            First step using the disavow tool then to try pro-actively to remove
            them.
          </div>
          <div className="serviceTitle"> Related Tools and Resources</div>
          <div className="serviceText">
            <footer>Disavow Links - Google Search Console </footer>
          </div>
        </div>
      </div>
    );
  }
}

export default translate("translations")(Toxic);
