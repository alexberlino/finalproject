import React, { Component } from "react";
import ReactDOM from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { translate, Trans } from "react-i18next";
import i18n from "../i18n";
import { Helmet } from "react-helmet";

class KeywordResearch extends Component {
  render() {
    const { t, i18n } = this.props;
    console.log(this.props.i18n.language);

    return (
      <div className="mainRightServices">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Onpage SEO - Keyword Research | SEO Berlino</title>
          <meta
            name="description"
            content="Keyword research is one the most important first steps in SEO.
              If you are not targeting the right ones, your whole strategy is at risk"
          />
          <link
            rel="canonical"
            href="https://www.seoberlino.com/en/onpage/keywordresearch"
          />{" "}
        </Helmet>
        <div className="breadcrumb">
          <a href={"/" + this.props.lng}>> HOME ></a>

          <a href={"/" + this.props.lng + "/resources"}> RESOURCES ></a>

          <a href={"/" + this.props.lng + "/onpage"}> ONPAGE </a>
        </div>

        <h1 className="h1services"> Keyword Research </h1>
        <h2 className="serviceTitle"> Why it's (extremely) Important</h2>
        <div className="serviceText">
          Keyword Research is critical to understand how your potential clients
          are searching for the products or services you are offering.
          <p className="italic">
            The keywords you are using for your site are possibly not the ones
            your potential clients are using to look for your services.
          </p>
        </div>
        <h2 className="serviceTitle"> To do</h2>
        <div className="serviceText">
          Good keyword research starts with gathering data:
          <ul>
            <li>keywords currently bringing traffic</li>
            <li>keywords with impressions but no clicks</li>

            <li>ppc data if any</li>

            <li>keywords used by competitors</li>

            <li>Keyword tools</li>
          </ul>
          <div className="italic">
            which keywords have the most value for you?{" "}
          </div>
          <p>
            Search Volume is not the most important factor, but if there is no
            seach volume for the terms you want to optimize your site for, you
            are already making your life difficult.
          </p>
          <p>
            Equally, targeting high competitive keywords with very high Search
            Volumes, or Keywords not related to products or services which you
            offer will cause problems.
          </p>
          <p>
            Set up a list of keywords: main keywords, broad terms, related
            terms, long tail, each type of keywords having different objectives
            the huge majority of searches now represent a maximum of 50 searches
            per month.
          </p>
          <p>
            <a
              className="linkServices"
              href={"/" + this.props.lng + "/onpage/voicesearch"}
            >
              Voice search
            </a>{" "}
            is creating a lof of disruption in terms of keywords research since
            people use different phrases depending on whether they type of
            speak. In general voice search keywords are longer and they are in
            the form of a question.
          </p>
        </div>
        <h2 className="serviceTitle"> Tools and Resources</h2>
        <div className="serviceText">
          <a target="blank" className="block" href=" https://adwords.com/">
            Adwords Keyword Planner{" "}
          </a>
          <a
            target="blank"
            className="block"
            href=" https://searchconsole.com/"
          >
            Google's Search Console{" "}
          </a>
          <a target="blank" className="block" href=" https://semrush.com/">
            SEMRush
          </a>
          <a target="blank" className="block" href=" https://googletrends.com/">
            Google Trends
          </a>
          <a target="blank" className="block" href=" https://soovle.com/">
            ahrefs Keywords Explorer
          </a>
          <a target="blank" className="block" href=" https://soovle.com/">
            Soovle
          </a>
          <a target="blank" className="block" href="https://keywordtool.io/">
            keywordtool.io
          </a>
          <a target="blank" className="block" href="https://kwfinder.com/">
            {" "}
            KW Finder{" "}
          </a>
          <a target="blank" className="block" href=" https://moz.com/explorer">
            {" "}
            Moz Keyword Explorer{" "}
          </a>
          <a target="blank" className="block" href="https://www.secockpit.com">
            SECockpit
          </a>
          <a target="blank" className="block" href=" https://kwfinder.com/">
            KWFinder
          </a>
        </div>
      </div>
    );
  }
}

export default translate("translations")(KeywordResearch);
