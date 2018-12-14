import React, { Component } from "react";
import ReactDOM from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { translate, Trans } from "react-i18next";
import i18n from "../i18n";
import { Helmet } from "react-helmet";

class MobileFriendly extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    if (window.innerWidth < 1500) {
      window.scrollTo(0, 0);
    }
    const { t, i18n } = this.props;
    console.log(this.props.i18n.language);

    return (
      <div className="mainRightServices">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Technical SEO: MobileFriendly SEO Berlino</title>
          <meta
            name="description"
            content="Technical SEO: mobile friendly and why its important in SEO "
          />
          <link
            rel="canonical"
            href={
              "https://www.seoberlino.com/" +
              this.props.lng +
              "/technical/mobilefriendly"
            }
          />
        </Helmet>

        <div className="breadcrumb">
          <a href={"/" + this.props.lng}>> HOME ></a>

          <a href={"/" + this.props.lng + "/resources"}> RESOURCES ></a>

          <a href={"/" + this.props.lng + "/technical"}> TECHNICAL </a>
        </div>
        <h2 className="h1services"> Mobile Friendly Websites</h2>
        <div className="serviceTitle"> Why it's (extremely) Important</div>
        <div className="serviceText">
          If your website it not mobile friendly, in most cases, you are
          trouble. Google now uses the mobile version for indexation ("mobile
          first"). If you are not sure, you can use Google's tool below.
        </div>

        <div className="serviceTitle"> Tools and Resources</div>
        <div className="serviceText">
          <footer>
            <a href="https://search.google.com/test/mobile-friendly">
              Google's Mobile Friendly Test
            </a>{" "}
          </footer>
        </div>
      </div>
    );
  }
}
export default translate("translations")(MobileFriendly);
