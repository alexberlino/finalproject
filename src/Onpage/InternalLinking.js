import React, { Component } from "react";
import ReactDOM from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { translate, Trans } from "react-i18next";
import i18n from "../i18n";
import { Helmet } from "react-helmet";

class InternalLinking extends Component {
  render() {
    const { t, i18n } = this.props;
    console.log(this.props.i18n.language);

    return (
      <div className="mainRightServices">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Onpage SEO Freelancer- Internal Linking | SEO Berlino</title>
          <meta type="description" content="" />
          <link
            rel="canonical"
            href="https://www.seoberlino.com/en/onpage/internallinking"
          />{" "}
        </Helmet>
        <div className="main2">
          <div className="breadcrumb">
            <a href={"/" + this.props.lng}>> HOME ></a>

            <a href={"/" + this.props.lng + "/resources"}> RESOURCES ></a>

            <a href={"/" + this.props.lng + "/onpage"}> ONPAGE </a>
          </div>

          <h1 className="h1services"> On-page SEO: Internal Linking </h1>
          <div className="serviceTitle"> Why it's (extermely) Important</div>
          <div className="serviceText">
            Internal Linking is core for on-page SEO, especially for big
            websites. Link juice redistribution, prioritization of key pages or
            site sections to name a few reasons.
          </div>
          <div className="serviceTitle"> To do</div>
          <div className="serviceText">
            Review and audit your current internal linking settings, including
            navigation, sub-navigations, breadcrumb and tags, taking into
            account business prioritization. Report action plan with main
            priority points and explanations for each points.
          </div>

          <div className="serviceTitle"> Some relevant tools</div>
          <div className="serviceText">Screaming Frog</div>
        </div>{" "}
      </div>
    );
  }
}

export default translate("translations")(InternalLinking);
