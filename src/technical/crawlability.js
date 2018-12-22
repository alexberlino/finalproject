import React, { Component } from "react";
import ReactDOM from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { translate, Trans } from "react-i18next";
import i18n from "../i18n";
import { Helmet } from "react-helmet";

class Crawlability extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    const { t, i18n } = this.props;
    console.log(this.props.i18n.language);

    return (
      <div className="mainRightServices">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Technical SEO - Crawlability | SEO Berlino</title>
          <meta
            name="description"
            content="Technical SEO: crawlability and why its important in SEO "
          />
          <link
            rel="canonical"
            href="https://www.seoberlino.com/en/technical/crawlability"
          />
        </Helmet>
        <div className="main2">
          <div className="breadcrumb">
            <a href={"/" + this.props.lng}>> HOME ></a>

            <a href={"/" + this.props.lng + "/resources"}> RESOURCES ></a>

            <a href={"/" + this.props.lng + "/technical"}> TECHNICAL </a>
          </div>

          <h2 className="h1services"> Crawlability</h2>
          <div className="serviceTitle"> Why it's Important</div>
          <div className="serviceText">
            Crawlibility goes hand in hand with indexation. In order to adjust
            and optimize indexation, you can improve and guide Google on how it
            crawls your site.
          </div>
          <img
            src="/icons/crawler.png"
            className="imageservices"
            alt="web crawler"
            width="100px"
            height="100px"
          />
          <div className="serviceTitle"> To do</div>
          <div className="serviceText">
            Set-up or Audit of your sitemaps, robots file and robots metas.
            Check server logs.
          </div>
        </div>{" "}
      </div>
    );
  }
}

export default translate("translations")(Crawlability);
