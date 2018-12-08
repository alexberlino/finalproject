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

        <div>
          <div className="infoTitle">
            <h1 className="infoTitle"> SEO RESOURCES</h1>
          </div>

          <div className="infoMain">
            <div className="resourcesLinks">
              <a className="block" href={"/" + this.props.lang + "/onpage"}>
                ON PAGE{" "}
              </a>
              <a className="block" href={"/" + this.props.lang + "/offpage"}>
                OFF PAGE
              </a>
              <a className="block" href={"/" + this.props.lang + "/technical"}>
                TECHNICAL
              </a>
              <a className="block" href={"/" + this.props.lang + "/research"}>
                RESEARCH ANALYTICS
              </a>
              <a className="block" href={"/" + this.props.lang + "/seonews"}>
                SEO NEWS
              </a>
            </div>
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
