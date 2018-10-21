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
        </Helmet>

        <h1 className="h1services"> Keyword Research </h1>
        <div className="serviceTitle"> >Why it's (extremely) Important</div>
        <div className="serviceText">
          {" "}
          Keyword Research is critical to understand how your potential clients
          are searching for the products or services you are offering. There is
          often a gap between the language of the users and the one the website
          is using.
        </div>
        <div className="serviceTitle"> >What we can deliver to you</div>
        <div className="serviceText">
          {" "}
          Research using a wide range of sources and provide you a list of the
          best keywords for both broad/related reach and target niche, with
          search volume and conversion potential.
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
