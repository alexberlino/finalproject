import React, { Component } from "react";
import ReactDOM from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { translate, Trans } from "react-i18next";
import i18n from "../i18n";
import { Helmet } from "react-helmet";

class Metas extends Component {
  render() {
    const { t, i18n } = this.props;
    console.log(this.props.i18n.language);

    return (
      <div className="mainRightServices">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Onpage SEO - Meta optimization | SEO Berlino</title>
          <meta type="description" content="" />
          <link
            rel="canonical"
            href="https://www.seoberlino.com/en/onpage/metas"
          />{" "}
        </Helmet>
        <div className="main2">
          <div className="breadcrumb">
            <a href={"/" + this.props.lng}>> HOME ></a>

            <a href={"/" + this.props.lng + "/resources"}> RESOURCES ></a>

            <a href={"/" + this.props.lng + "/onpage"}> ONPAGE </a>
          </div>

          <h2 className="h1services"> Metas Tags and headers </h2>
          <div className="serviceTitle"> Why it's Important</div>
          <div className="serviceText">
            Basic aspect of SEO, they are somehow often neglected. The two main
            ones: meta title and description can also have a negative impact on
            CTR (Click-through-rate) when incorrectly implemented.
          </div>
          <div className="serviceTitle"> To do</div>
          <div className="serviceText">
            Crawling through your website to analyse and identify opportunities
            such duplicate metas, length, problematic use variables, phrasing,
            consistency, etc. Metas to be checked: title, description, viewport
            and when needed: robots and language.
          </div>
          <div className="serviceTitle"> Tools and Resources</div>
          <div className="serviceText">
            <footer>Screaming Frog </footer>
          </div>
        </div>{" "}
      </div>
    );
  }
}

export default translate("translations")(Metas);
