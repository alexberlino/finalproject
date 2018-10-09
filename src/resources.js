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
              <li> Backlink tools </li>
              <li> Speed Checking tools </li>
              <li> Keyword Tools </li>
              <li> SEO Jargon </li>
              <li> Beginners guide to SEO </li>
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
