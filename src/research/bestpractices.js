import React, { Component } from "react";
import ReactDOM from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { translate, Trans } from "react-i18next";
import i18n from "../i18n";
import { Helmet } from "react-helmet";

class BestPractices extends Component {
  render() {
    const { t, i18n } = this.props;
    console.log(this.props.i18n.language);

    return (
      <div className="mainRightServices">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Reseach & Analytics - Competitor Analysis | SEO Berlino</title>
          <meta name="description" content="" />
          <link
            rel="canonical"
            href="https://www.seoberlino.com/en/research/bestpractices"
          />{" "}
        </Helmet>

        <div className="breadcrumb">
          <a href={"/" + this.props.lng}>> HOME ></a>

          <a href={"/" + this.props.lng + "/resources"}> RESOURCES ></a>

          <a href={"/" + this.props.lng + "/research"}> RESEARCH </a>
        </div>
        <h2 className="h1services"> Competitor Analysis</h2>
        <div className="serviceTitle"> Why it's Important</div>
        <div className="serviceText" />
        <div className="serviceTitle"> To do</div>
        <div className="serviceText" />
      </div>
    );
  }
}

export default translate("translations")(BestPractices);
