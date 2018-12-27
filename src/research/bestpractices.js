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
          <title>
            Reseach & Analytics - SEO Competitor Analysis | SEO Berlino
          </title>
          <meta name="description" content="" />
          <link
            rel="canonical"
            href="https://www.seoberlino.com/en/research/bestpractices"
          />{" "}
        </Helmet>
        <div className="main2">
          <div className="breadcrumb">
            <a href={"/" + this.props.lng}>> SEO FREELANCER ></a>

            <a href={"/" + this.props.lng + "/resources"}> EXPERTISE ></a>

            <a href={"/" + this.props.lng + "/research"}> RESEARCH </a>
          </div>
          <h1 className="h1services"> SEO Competitor Analysis</h1>
          <div className="serviceTitle"> Why it's Important</div>
          <div className="serviceText">
            To improve the way you do business online, it is very difficult to
            be successful if you ignore the competition. The same applies with
            SEO. Knowing how your competitors operate, what they offer helps to
            find out: keywords you are possibly missing one, backlink
            oppportunities, and benchmarks. Copying however is not really a long
            time efficient strategy; the best is to get inspired to offer better
            value to your customers.
          </div>
          <div className="serviceTitle"> To do</div>
          <div className="serviceText">
            A Competitor analysis comprises of backlink audit, on-page audit and
            keyword research. Analysing how competitors get most of their
            traffic also helps to establish content creation strategy.
          </div>{" "}
        </div>
      </div>
    );
  }
}

export default translate("translations")(BestPractices);
