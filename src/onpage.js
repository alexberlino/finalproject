import React, { Component } from "react";
import ReactDOM from "react";
import App from "./App";
import { BrowserRouter, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { translate, Trans } from "react-i18next";
import i18n from "./i18n";
import { Helmet } from "react-helmet";

class Onpage extends Component {
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
          <div className="infoTitle"> On-page SEO </div>
          <div className="infoIntro">
            Keyword research ​ Important first step, keyword research is the
            process of understanding how your target users search for your
            product(s) or service(s).{" "}
          </div>
          <div className="infoMain">
            It has to be done before starting the on-page work. Competitor
            Analysis help to expand the research and make sure no important
            keyword is omitted. ​ Although since Hummingbird, Google is more
            semantically driven to assess the website's content, and focussed on
            Voice search and entities, knowing your important keywords is still
            important when structuring content and metadata. ​ ​ On-page
            SEOBerlino will then do an audit of your website checking content
            for each important landing page, site structure, metadata, images. ​
            Additional important checks will cover structured data
            implementation and other technical aspects.{" "}
          </div>
        </div>
      </div> //Main
    );
  }
}

export default translate("translations")(Onpage);

// const getStateFromRedux = state => {
//   return {
//     messages: state.messages
//   };
// };
//
// export default connect(getStateFromRedux)(Homepage);
