import React, { Component } from "react";
import ReactDOM from "react";
import App from "./App";
import { BrowserRouter, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";
import { translate, Trans } from "react-i18next";
import i18n from "./i18n";
import LinksToPages from "./LinksToPages";
import ContactMain from "./ContactMain";

class Resources extends Component {
  componentDidMount() {
    // happyfun();
    window.scrollTo(0, 0);
  }
  render() {
    const { t, i18n } = this.props;
    console.log(this.props);

    return (
      <div className="main">
        <Helmet>
          <meta charSet="utf-8" />
          <title>SEO Resources || SEOBerlino</title>
          <meta
            name="description"
            content="SEO Resources, about SEO resources: useful links"
          />
          <link
            rel="canonical"
            href={
              "https://www.seoberlino.com/" + this.props.lang + "/resources"
            }
          />
        </Helmet>

        <div id="three-js-item" />
        <div>
          <div className="infoTitle">
            <h1 className="infoTitle"> SEO RESOURCES</h1>
          </div>

          <div className="infoMain">
            <ul className="block">
              <li className="txthead4"> > SEO Jargon </li>
              <a href="https://moz.com/beginners-guide-to-seo">
                Moz's Beginners guide to SEO{" "}
              </a>
              <li className="txthead4"> >Backlink Checks </li>
              <a className="block" href="https://moz.com/link-explorer">
                Moz Link Explorer
              </a>{" "}
              <a className="block" href="https://de.majestic.com/">
                Majestic SEO
              </a>
              <a className="block" href="https://ahrefs.com/de/">
                ahrefs
              </a>
              <li className="txthead4"> >Keyword Tools </li>
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
              <li className="txthead4"> >Technical </li>
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
              <li className="txthead4"> > Content marketing </li>
              <a href=" https://kwfinder.com/">buzzsumo.com</a>
            </ul>
          </div>
          <div>
            <div className="contactmob">
              <h2 className="txthead"> Get in touch></h2>
              <h2 className="txt">
                <img
                  alt="telephone"
                  src="/telephone.svg"
                  className="iconphone"
                />015 787 011 932
              </h2>

              <ContactMain />
            </div>
            <LinksToPages />
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
