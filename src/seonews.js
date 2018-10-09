import React, { Component } from "react";
import ReactDOM from "react";
import App from "./App";
import { BrowserRouter, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";

class SEONews extends Component {
  render() {
    return (
      <div className="main">
        {" "}
        <Helmet>
          <meta charSet="utf-8" />
          <title>SEO News || SEOBerlino</title>
        </Helmet>
        <div>
          <div className="infoTitle"> Latest SEO News - tl;dr </div>
          <div className="infoIntro">
            Most important SEO news these last 3 months
          </div>
          <div className="infoDate">Last update: October 9th, 2018</div>
          <div className="infoMain">
            <div className="newsItem">
              <img className="importancenews" src="/greenlight.png" />
              <p className="low">Google+ to close down.</p>
            </div>
            <div className="newsItem">
              <img className="importancenews" src="/redlight.png" />
              <p className="important">
                Indexation for Javascript apps: use Dynamic Rendering
              </p>
            </div>
            <div className="newsItem">
              <img className="importancenews" src="/redlight.png" />
              <p className="important">
                Mobile First Enabled for most websites
              </p>
            </div>
            <div className="newsItem">
              <img className="importancenews" src="/orangelight.jpg" />
              <p className="medium">
                Google admits personalised search results limited
              </p>
            </div>
            <div className="newsItem">
              <img className="importancenews" src="/orangelight.jpg" />
              <p className="medium">Search Console changes</p>
            </div>
            <div className="newsItem">
              <img className="importancenews" src="/orangelight.jpg" />
              <p className="medium">
                Google advises to uses 301 when migrating to HTTPS
              </p>
            </div>
            <div className="newsItem">
              <img className="importancenews" src="/redlight.png" />
              <p className="important">Google's algorithm latest updates</p>
            </div>
            <div className="newsItem">
              <img className="importancenews" src="/redlight.png" />
              <p className="important">
                Chrome now marks all unencrypted websites as ‘not secure’
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SEONews;

// const getStateFromRedux = state => {
//   return {
//     messages: state.messages
//   };
// };

// export default connect(getStateFromRedux)(Resources);
