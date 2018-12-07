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
          <title>Keyword Research || SEO Berlino</title>
          <meta type="description" content="" />
          <link rel="canonical" />
        </Helmet>

        <h2 className="h1services"> Keyword Research </h2>
        <div className="serviceTitle"> >Why it's (extremely) Important</div>
        <div className="serviceText">
          {" "}
          Keyword Research is critical to understand how your potential clients
          are searching for the products or services you are offering. There is
          often a gap between the language of the users and the one the website
          is using.
        </div>
        <div className="serviceTitle"> >To do</div>
        <div className="serviceText">
          {" "}
          Research using a wide range of sources and provide you a list of the
          best keywords for both broad/related reach and target niche, with
          search volume and conversion potential. This activity is more and more
          complex given that the huge majority of searches now represent a
          maximum of 50 searches per month. Include *voice search*.
        </div>
        <div className="serviceTitle"> >Tools and Resources</div>
        <div className="serviceText">
          <footer>Adwords Keyword Planner </footer>
          <footer> Google's Search Console </footer>
          <footer> SEMRush</footer>
          <footer> Google Trends</footer>
          <footer> ahrefs Keywords Explorer</footer>
          <a className="block" href=" https://soovle.com/">
            Soovle
          </a>
          <a className="block" href="https://keywordtool.io/">
            keywordtool.io
          </a>
          <a className="block" href="https://kwfinder.com/">
            {" "}
            KW Finder{" "}
          </a>
          <a className="block" href=" https://moz.com/explorer">
            {" "}
            Moz Keyword Explorer{" "}
          </a>
          <a className="block" href="https://www.secockpit.com">
            SECockpit
          </a>
          <a className="block" href=" https://kwfinder.com/">
            KWFinder
          </a>
        </div>
      </div>
    );
  }
}

export default translate("translations")(KeywordResearch);
