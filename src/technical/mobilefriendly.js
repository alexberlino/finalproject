import React, { Component } from "react";
import ReactDOM from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { translate, Trans } from "react-i18next";
import i18n from "../i18n";
import { Helmet } from "react-helmet";
import LinksToPages from "../LinksToPages";

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
      <div className="main2">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Technical SEO Freelancer - Mobile First | SEO Berlino</title>
          <meta
            name="description"
            content="Technical SEO: mobile friendly and why its important in SEO "
          />
          <link
            rel="canonical"
            href="https://www.seoberlino.com/en/technical/mobilefriendly"
          />
        </Helmet>{" "}
        <div className="services">
          <div className="breadcrumb">
            <a href={"/" + this.props.lng}>> SEO FREELANCER ></a>

            <a href={"/" + this.props.lng + "/resources"}> AUDIT ></a>

            <a href={"/" + this.props.lng + "/technical"}> TECHNICAL </a>
          </div>
          <h1 className="h1services">
            {" "}
            Technical SEO Freelancer - Mobile First
          </h1>{" "}
          <div className="serviceTitle"> Why it's (extremely) Important</div>
          <div className="serviceText">
            <p>
              If your website it not mobile friendly, in most cases, you are in
              trouble. Google now uses the mobile version for indexation so
              called mobile first. If you are not sure, you can use Google's
              tool below.
            </p>
            <img
              src="/icons/mobilefirst.png"
              className="imageservices"
              title="mobile-first"
              alt="mobile-first"
              width="100px"
              height="100px"
            />
            <p>
              With mobile-first indexing, Googlebot primarily crawls and indexes
              pages with the smartphone agent. However Google will continue to
              show the device URL that is the most appropriate to users in
              Search results.
            </p>

            <p>
              This means that you for instance text showing on the desktop
              version but not on the mobile one may very likely be ignored for
              indexation and page relavancy. If there is too much text for the
              mobile version use 'show more'.
            </p>

            <p>
              In terms of performance, you need to make sure that your mobile
              version loads fast and in the right format. You can use Google's
              PageSpeed Developer Tool
            </p>
          </div>
          <div className="serviceTitle"> Tools and Resources</div>
          <div className="serviceText">
            <footer>
              <a
                target="_blank"
                href="https://search.google.com/test/mobile-friendly"
              >
                Google's Mobile Friendly Test
              </a>{" "}
            </footer>
          </div>
        </div>{" "}
        <LinksToPages />
      </div>
    );
  }
}
export default translate("translations")(MobileFriendly);
