import React, { Component } from "react";
import ReactDOM from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { translate, Trans } from "react-i18next";
import i18n from "../i18n";
import { Helmet } from "react-helmet";

class Indexation extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    const { t, i18n } = this.props;
    console.log(this.props.i18n.language);

    return (
      <div className="mainRightServices">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Technical SEO Freelancer - Indexation | SEO Berlino</title>
          <meta
            name="description"
            content="Technical SEO: indexation and why its important in SEO "
          />
          <link
            rel="canonical"
            href="https://www.seoberlino.com/en/technical/indexation"
          />
        </Helmet>
        <div className="main2">
          <div className="breadcrumb">
            <a href={"/" + this.props.lng}>> HOME ></a>

            <a href={"/" + this.props.lng + "/resources"}> RESOURCES ></a>

            <a href={"/" + this.props.lng + "/technical"}> TECHNICAL </a>
          </div>
          <h1 className="h1services"> Technical SEO Freelancer - Indexation</h1>{" "}
          <div className="serviceTitle"> Why it's Important</div>
          <div className="serviceText">
            <p>
              Efficient Indexation is key in order to get on well with Google's
              spiders. Many believe the more pages indexed the better; that is
              only true to a certain level. If you have many non-valuable,
              not-visited or duplicate pages indexed for example, the bot will
              likely limit your "crawling credit" and discard those pages which
              you value most.
            </p>
            <img
              src="/icons/indexation.png"
              alt="indexation"
              title="indexation"
              className="imageservices"
              width="100px"
              height="100px"
            />
          </div>
          <div className="serviceTitle"> To do</div>
          <div className="serviceText">
            <ul>
              <li>
                Make sure all the important pages are indexed and that those you
                do not want indexed are not. You can check the number of indexed
                pages in the Search Console, and also use Google commands with
                'site:yoursite.com' to check which pages are indexed.
              </li>
              <li>
                Check on duplicate or irrelevant indexed pages and work on a
                plan to have those pages de-indexed. The best way is to return a
                410 status codes for those unwanted pages till they are
                de-indexed.
              </li>
              <li>
                Check on your redirects, make sure you are using the correct
                status codes, limiting the number.
              </li>
              <li>
                If needed, adjust your url structure. They need to be as
                descriptive as possible, with as less numbers and special
                characters as possible.
              </li>
            </ul>
          </div>
        </div>{" "}
      </div>
    );
  }
}

export default translate("translations")(Indexation);
