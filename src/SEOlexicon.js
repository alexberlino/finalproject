import React, { Component } from "react";
import ReactDOM from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";
import LinksToPages from "./LinksToPages";

class SeoLexicon extends Component {
  constructor() {
    super();
    this.state = {
      show: null,
      hide: null
    };
  }

  componentDidMount() {
    // happyfun();
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="main">
        <Helmet>
          <meta charSet="utf-8" />
          <title>German - English SEO Lexicon || SEOBerlino</title>
          <meta
            name="description"
            content="SEO terms English and English translation"
          />
          <link
            rel="canonical"
            href="https://www.seoberlino.com/en/english-german-seo-lexicon"
          />
        </Helmet>

        <div className="infoTitle">
          <h1> German - English SEO Lexicon </h1>
        </div>

        <div className="infoMain">
          <table>
            <tr className="mainrow">
              {" "}
              <th>english</th>
              <th>german</th>
            </tr>
            <tr>
              {" "}
              <th>above the fold</th>
              <th>über dem Falz</th>
            </tr>
            <tr>
              {" "}
              <th>accessibility</th>
              <th>Erreichbarkeit</th>
            </tr>
            <tr>
              {" "}
              <th>algorithm</th>
              <th>Algorithmus</th>
            </tr>
            <tr>
              {" "}
              <th>image alt attribute</th>
              <th>alt-Attribut der img-tags</th>
            </tr>
            <tr>
              {" "}
              <th>(web) analytics</th>
              <th>Webanalyse</th>
            </tr>
            <tr>
              {" "}
              <th>anchor text</th>
              <th>Ankertext</th>
            </tr>
            <tr>
              {" "}
              <th>page and domain authority</th>
              <th>Seiten- und Domänenautorität</th>
            </tr>
            <tr>
              {" "}
              <th>backlink</th>
              <th>Rückverweis</th>
            </tr>
            <tr>
              {" "}
              <th>black hat SEO</th>
              <th>black hat SEO</th>
            </tr>
            <tr>
              {" "}
              <th>bounce rate</th>
              <th>Absprungrate</th>
            </tr>
            <tr>
              {" "}
              <th>brand building</th>
              <th>german</th>
            </tr>
            <tr>
              {" "}
              <th>breadcrumb</th>
              <th>Brotkrumen, Brotkrümel</th>
            </tr>
            <tr>
              {" "}
              <th>broken link</th>
              <th>german</th>
            </tr>
            <tr>
              {" "}
              <th>cache</th>
              <th>Versteck</th>
            </tr>

            <tr>
              {" "}
              <th>canonical tag</th>
              <th>Canonical tag</th>
            </tr>
            <tr>
              <th>content</th>
              <th>Inhalt</th>
            </tr>
            <tr>
              {" "}
              <th>crawler / spider</th>
              <th>Webcrawler </th>
            </tr>
            <tr>
              {" "}
              <th>CTR Clickthrough rate </th>
              <th>Klickrate</th>
            </tr>
            <tr>
              {" "}
              <th>directory page</th>
              <th>german</th>
            </tr>
            <tr>
              {" "}
              <th>duplicate content</th>
              <th>doppelter Inhalt</th>
            </tr>
            <tr>
              {" "}
              <th>link juice</th>
              <th>german</th>
            </tr>
            <tr>
              {" "}
              <th>heading tag</th>
              <th>head-tag</th>
            </tr>
            <tr>
              <th>impression</th>
              <th>german</th>
            </tr>
            <tr>
              <th>indexed Pages</th>
              <th>german</th>
            </tr>
            <tr>
              <th>internal linking</th>
              <th>german</th>
            </tr>
            <tr>
              <th>keyword - key phrase</th>
              <th>german</th>
            </tr>
            <tr>
              <th>keyword cannibalization </th>
              <th>german</th>
            </tr>
            <tr>
              <th>keyword density</th>
              <th>german</th>
            </tr>
            <tr>
              <th>keyword research </th>
              <th>german</th>
            </tr>
            <tr>
              <th>landing page </th>
              <th>Landeseiten</th>
            </tr>
            <tr>
              <th>link bait </th>
              <th>german</th>
            </tr>
            <tr>
              <th>link building </th>
              <th>german</th>
            </tr>
            <tr>
              <th>link juice </th>
              <th>german</th>
            </tr>
            <tr>
              <th>meta description </th>
              <th>meta description </th>
            </tr>
            <tr>
              <th>META tags </th>
              <th>Metatags</th>
            </tr>
            <tr>
              <th>off-page optimization </th>
              <th>Offpage-Optimierung</th>
            </tr>
            <tr>
              <th>on-page optimization </th>
              <th>Onpage-Optimierung</th>
            </tr>
            <tr>
              <th>page title</th>
              <th>seitentitel</th>
            </tr>
            <tr>
              <th>redirects </th>
              <th>Weiterleitungen</th>
            </tr>
            <tr>
              <th>SEO </th>
              <th>Suchmaschine- optimierung</th>
            </tr>
          </table>
        </div>
        <div>
          <LinksToPages />
        </div>
      </div>
    );
  }
}

export default SeoLexicon;

// const getStateFromRedux = state => {
//   return {
//     messages: state.messages
//   };
// };

// export default connect(getStateFromRedux)(Resources);
