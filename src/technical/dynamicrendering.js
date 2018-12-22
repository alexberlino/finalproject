import React, { Component } from "react";
import ReactDOM from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { translate, Trans } from "react-i18next";
import i18n from "../i18n";
import { Helmet } from "react-helmet";

class DynamicRendering extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
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
          <title>Technical SEO - Dynamic Rendering | SEO Berlino</title>
          <meta
            name="description"
            content="Technical SEO: dynamic rendering and why its important in SEO "
          />
          <link
            rel="canonical"
            href="https://www.seoberlino.com/en/technical/dynamicrendering"
          />
        </Helmet>
        <div className="main2">
          <div className="breadcrumb">
            <a href={"/" + this.props.lng}>> HOME ></a>

            <a href={"/" + this.props.lng + "/resources"}> RESOURCES ></a>

            <a href={"/" + this.props.lng + "/technical"}> TECHNICAL </a>
          </div>
          <h2 className="h1services"> Dynamic Rendering</h2>
          <div className="serviceTitle"> Why it's Important</div>
          <div className="serviceText">
            For JavaScript apps such as React, Angular or View, search engines
            such as Google still struggle to properly crawl and index all pages.
            Although they say they can achieve this over time after many visits,
            they do recommend for most sites to use dynamic rendering.
          </div>
          <img
            src="/icons/javascript.png"
            className="imageservices"
            alt="javascript icon"
            width="100px"
            height="100px"
          />
          <div className="serviceTitle">To do</div>
          <div className="serviceText">
            Find what solution is best for you: pre-rendering, server side
            rendering or dynamic rendering.
          </div>{" "}
        </div>
      </div>
    );
  }
}

export default translate("translations")(DynamicRendering);
