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
  constructor() {
    super();
  }
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    const { t, i18n } = this.props;

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

        <div>
          <div className="infoTitle">
            <h1 className="infoTitle"> > SEO RESOURCES</h1>
          </div>

          <div className="resourcesLinks">
            <div className="blockAbout slide-in-left ">
              {" "}
              <a className="block" href={"/" + this.props.lang + "/onpage"}>
                ON PAGE{" "}
              </a>
            </div>
            <div className="blockAbout bounce-in-top">
              <a className="block" href={"/" + this.props.lang + "/offpage"}>
                OFF PAGE
              </a>
            </div>
            <div className="blockAbout slide-in-left">
              <a className="block" href={"/" + this.props.lang + "/technical"}>
                TECHNICAL
              </a>
            </div>
            <div className="blockAbout  slide-in-left">
              <a className="block" href={"/" + this.props.lang + "/research"}>
                RESEARCH ANALYTICS
              </a>
            </div>
            <div className="blockAbout fade-in">
              {" "}
              <a className="block" href={"/" + this.props.lang + "/seonews"}>
                SEO NEWS
              </a>
            </div>
          </div>

          <div>
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
