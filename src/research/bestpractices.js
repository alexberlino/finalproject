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
            Research & Analytics - SEO Competitor Analysis | SEO Berlino
          </title>
          <meta name="description" content="" />
          <link
            rel="canonical"
            href="https://www.seoberlino.com/en/research/bestpractices"
          />{" "}
        </Helmet>
        <div className="main2">
          <div className="breadcrumb">
            <a href="/en">> SEO FREELANCER ></a>

            <a href={"/en/resources"}> EXPERTISE ></a>

            <a href={"/en/research"}> RESEARCH </a>
          </div>
          <h1 className="h1services"> SEO Competitor Analysis</h1>
          <div className="serviceTitle"> Know who your SEO Competitors are</div>
          <div className="serviceText">
            It is important to keep in mind in terms of SEO Competitor Analysis,
            that you need to identify your *SEO* competitors, those which are
            leading in terms of organic traffic acquisition, domain authority
            and other important SEO factors. These are the websites which rank
            the best and the most consistently for the main keywords you have
            identified, and/or those websites which rank best for long tail
            keywords.
          </div>
          <div className="serviceTitle"> why do a competitor analysis</div>
          <div className="serviceText">
            To improve the way you do business online, it is very difficult to
            be successful if you ignore the competition. The same applies with
            SEO. Knowing how your competitors operate, what they offer helps to
            find out: keywords you are possibly missing one, backlink
            oppportunities, and benchmarks. Copying however is not really a long
            time efficient strategy; the best is to get inspired to offer better
            value to your customers.
          </div>
          <div className="serviceTitle">
            {" "}
            What is their content and how do they organise their website
          </div>
          <div className="serviceText">
            How are is the website organised and structured, including main
            navigation items and the internal linking strategy. What is included
            in their Sitemap(s).
          </div>
          <div className="serviceTitle">How do they get backlinks</div>
          <div className="serviceText">Analyse their backlink profile</div>
          <div className="serviceTitle">How can you do better?</div>
          <div className="serviceText">
            Competitor analysis is great to be aware of what your competitors
            are doing, how their site is structured, how their get their
            backlinks, and check if you are missing out on low hanging fruit.
            But by no means should you copy and paste how they do business. Get
            rather inspired, and plan to do better.
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
