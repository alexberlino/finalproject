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
            <ul>
              <li> SEO Jargon </li>

              <a href="https://moz.com/beginners-guide-to-seo">
                Moz's Beginners guide to SEO{" "}
              </a>
              <li> Backlink Checks </li>
              <footer>
                <a href="https://moz.com/link-explorer">Moz Link Explorer</a>{" "}
              </footer>
              <footer>
                <a href="https://de.majestic.com/">Majestic SEO</a>
              </footer>
              <footer>
                <a href="https://ahrefs.com/de/">ahrefs</a>
              </footer>

              <li> Keyword Tools </li>
              <a href="https://kwfinder.com/"> https://kwfinder.com/ </a>

              <li>Technical </li>
              <a href="https://search.google.com/test/mobile-friendly">
                Google Mobile Friendly Test
              </a>
              <footer>
                <a href="https://developers.google.com/speed/pagespeed/insights/?hl=de">
                  Google PageSpeed (Insights) Test
                </a>{" "}
              </footer>
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
