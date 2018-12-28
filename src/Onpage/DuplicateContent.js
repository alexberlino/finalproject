import React, { Component } from "react";
import ReactDOM from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { translate, Trans } from "react-i18next";
import i18n from "../i18n";
import { Helmet } from "react-helmet";

class DuplicateContent extends Component {
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
          <title>Onpage SEO Freelancer - Duplicate Content | SEO Berlino</title>
          <meta
            name="description"
            content="Duplicate Content and Semantics for SEO."
          />{" "}
          <link
            rel="canonical"
            href="https://www.seoberlino.com/en/onpage/duplicatecontent"
          />{" "}
        </Helmet>
        <div className="main2">
          <div className="breadcrumb">
            <a href={"/" + this.props.lng}>> SEO FREELANCER ></a>

            <a href={"/" + this.props.lng + "/resources"}> EXPERTISE ></a>

            <a href={"/" + this.props.lng + "/onpage"}> ONPAGE </a>
          </div>

          <h1 className="h1services">
            {" "}
            On-page SEO: Duplicate Content and Canonicals
          </h1>
          <div className="serviceTitle">
            {" "}
            Duplicate Content, the biggest threat to making content king
          </div>
          <div className="serviceText">
            Search Engines do not like duplicate content indexed. If you have
            many similar pages and you are not flagging them, these pages will
            not rank well.
          </div>
          <img src="/content.svg" className="serviceImage" />

          <div className="serviceTitle"> Indexation audit</div>
          <div className="serviceText">
            Identify duplicate content, assess status and design for the master
            page, deindex unnecessary pages using canonicals, 410s or redirects
            accordingly.
          </div>

          <div className="serviceTitle"> Using Canonicals</div>
          <div className="serviceText">
            Canonicals are best used when you have very similar pages fro
            imstance same t-shirt in different colours. You don't want to index
            the same t-shirt for each colour, although you want to keep the urls
            for the user to browse through the options. Beware though that
            sometimes canonicals are sometimes ignored by Google so it is
            important to monitor the results of canonicals implementation and
            follow up with a new strategy if necessary.
          </div>

          <div className="serviceTitle">
            {" "}
            Same language country, different territory target
          </div>
          <div className="serviceText">
            A possible cause for duplicate content is when targeting different
            territoris (UK and US for instance) with different domains or urls
            but with a very similar content. Make sure then that you have well
            implemented href lang!
          </div>
        </div>
      </div>
    );
  }
}

export default translate("translations")(DuplicateContent);
