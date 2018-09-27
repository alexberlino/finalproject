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
import Pres from "./pres";

class Offpage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    console.log("LOCATION", location);
  }

  render() {
    const { t, i18n } = this.props;
    console.log(this.props.i18n.language);

    return (
      <div className="main">
        <Helmet>
          <meta charSet="utf-8" />
          <title>SEO Berlino</title>
        </Helmet>
        <div>
          <div className="infoTitle"> Off-page SEO </div>
          <div className="infoIntro">
            Backlinks are for Google a sign of trust from a website to another.
            The more (quality) backlinks you get pointing your site, the more
            popular will your website be rated.
          </div>
          <div className="infoMain">
            1. Auditing your backlink profile (number and quality of current
            backlinks) 2. Checking on how competitors get (quality) backlinks
            and find any opportnities. 3. Taking into account the specificity of
            the industry and the local aspect, will suggest creative
            opportunities to get backlinks 3. Suggesting an action plan to boost
            your backlink profile What we can do for you About Backlinks
            Backlinks still play an important role in SEO and can help your
            website get more visibility. Backlinks are for Google a sign of
            trust from a website to another. The more (quality) backlinks you
            get pointing your site, the more popular will your website be rated.
            Of course many factors come into play: -timing of new backlinks
            -quality of the website pointing the link to yours. These aspects
            are critical in how to positively improve your backlink profile and
            boost your Domain Authority.
          </div>
        </div>
      </div>
    );
  }
}

export default translate("translations")(Offpage);

// const getStateFromRedux = state => {
//   return {
//     messages: state.messages
//   };
// };
//
// export default connect(getStateFromRedux)(Homepage);
