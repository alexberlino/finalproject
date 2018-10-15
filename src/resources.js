import React, { Component } from "react";
import ReactDOM from "react";
import App from "./App";
import { BrowserRouter, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";

class Resources extends Component {
  render() {
    return (
      <div className="main">
        {" "}
        <Helmet>
          <meta charSet="utf-8" />
          <title>SEO Resources || SEOBerlino</title>
        </Helmet>
        <div>
          <div className="infoTitle"> SEO Resources </div>
          <div className="infoIntro">
            Here are some of the most useful tools to improve your SEO
            monitoring
          </div>
          <div className="infoMain">
            <ul className="block">
              <li> SEO Jargon </li>
              <a href="https://moz.com/beginners-guide-to-seo">
                Moz's Beginners guide to SEO{" "}
              </a>
              <li> Backlink Checks </li>
              <a className="block" href="https://moz.com/link-explorer">
                Moz Link Explorer
              </a>{" "}
              <a className="block" href="https://de.majestic.com/">
                Majestic SEO
              </a>
              <a className="block" href="https://ahrefs.com/de/">
                ahrefs
              </a>
              <li> Keyword Tools </li>
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
              <li>Technical </li>
              <a
                className="block"
                href="https://search.google.com/test/mobile-friendly"
              >
                Google Mobile Friendly Test
              </a>
              <a
                className="block"
                href="https://developers.google.com/speed/pagespeed/insights/?hl=de"
              >
                Google PageSpeed (Insights) Test
              </a>
              <li> Content marketing </li>
              <a href=" https://kwfinder.com/">buzzsumo.com</a>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Resources;

// const getStateFromRedux = state => {
//   return {
//     messages: state.messages
//   };
// };

// export default connect(getStateFromRedux)(Resources);
