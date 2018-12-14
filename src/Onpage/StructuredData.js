import React, { Component } from "react";
import ReactDOM from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { translate, Trans } from "react-i18next";
import i18n from "../i18n";
import { Helmet } from "react-helmet";

class StructuredData extends Component {
  render() {
    const { t, i18n } = this.props;
    console.log(this.props.i18n.language);
    if (window.innerWidth < 1500) {
      window.scrollTo(0, 0);
    }

    return (
      <div className="mainRightServices">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Structured Data SEO Berlino</title>
          <meta type="description" content="" />
          <link rel="canonical" />
        </Helmet>
        <div className="breadcrumb">
          <a href={"/" + this.props.lng}>> HOME ></a>

          <a href={"/" + this.props.lng + "/resources"}> RESOURCES ></a>

          <a href={"/" + this.props.lng + "/onpage"}> ONPAGE </a>
        </div>

        <h2 className="h1services"> Structured Data </h2>
        <div className="serviceTitle"> Why it's Important</div>
        <div className="serviceText">
          Google, Bing, Yandex and Yahoo agreed on a standardised format:
          schema.org for providing information about a page and to classify its
          content. using Structured Data will enable you to improve the way your
          pages are displayed.
        </div>
        <div className="serviceTitle"> To do</div>
        <div className="serviceText">
          You can use Structured Data to provide additional information about
          creative work, events, organisation, a person, a place or a product.
          Here is a list of the most common used of Structured Data: *
          Organization information * Local business Markup * Product and Offer *
          Breadcrumb * Ratings * Site navigation
        </div>
      </div>
    );
  }
}

export default translate("translations")(StructuredData);
