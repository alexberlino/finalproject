import React, { Component } from "react";
import ReactDOM from "react";
import App from "./App";
import { BrowserRouter, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { translate, Trans } from "react-i18next";
import i18n from "./i18n";
import { Helmet } from "react-helmet";
import Blog from "./blog";

class Audit extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    const { t, i18n } = this.props;
    console.log(this.props.i18n.language);

    return (
      <div className="main">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Audit at SEO Berlino</title>
        </Helmet>
        <div>
          <div className="infoTitle"> SEO Audit </div>
          <div className="infoIntro">
            Using the most important SEO factors, we will do an in-depth
            analysis of your competitors to find quick wins!
          </div>
          <div className="infoMain">
            ​ ​ ​ ​ ​ What are my competitors ranking ahead of me doing that I
            am not, and that I could test? Who is linking to my competitors and
            why not to me? But don't copy, do better! ​ Know what your
            competitors are up to Contact Us Content of Competitor Analysis: ​
            Main SEO Competitors Identification Backlink profile Keyword
            Analysis, main landing pages organisation and site structure
            Indexation Page load time comparition and other technical checks
            Internationalisation and more
          </div>
        </div>
      </div>
    );
  }
}

export default translate("translations")(Audit);

// const getStateFromRedux = state => {
//   return {
//     messages: state.messages
//   };
// };
//
// export default connect(getStateFromRedux)(Homepage);
