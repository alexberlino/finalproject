import React, { Component } from "react";
import ReactDOM from "react";
import App from "./App";
import { BrowserRouter, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { translate, Trans } from "react-i18next";
import i18n from "./i18n";
import Helmet from "react-helmet";
import ContactMain from "./ContactMain";

class Services extends Component {
  constructor() {
    super();
    this.state = {};
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
          <title>SEO Services | SEO Expert Consultant || SEO Berlino</title>
          <meta
            name="description"
            content="SEO Services Audit Ad-hoc - SEO Consultant in Berlin"
          />
          <link rel="canonical" href="https://www.seoberlino.com/en/services" />
        </Helmet>
        <div className="services">
          <div className="breadcrumb">
            <a href={"/" + this.props.lng}> SEO FREELANCER </a>

            <a href={"/" + this.props.lng + "/services"}> SERVICES </a>
          </div>
          <img
            src="/auditmainpic/crawl.jpg"
            alt="SEO Services"
            className="imageAudit"
          />
          <div className="infoTitle">
            <h1 className="h1services">SEO Services</h1>
          </div>
          <div className="intro20">
            <div className="introQuarter">
              {" "}
              <h2>Mini-Audit (16-22 hours*)</h2>
              <p className="txt2"> Executive Summary</p>
              <p className="txt2"> Keyword Research</p>
              <p className="txt2">
                Website Crawl: prioritized List main issues
              </p>
              <p className="txt2">Backlink profile Audit</p>
              <p className="txt2">
                Technical SEO: pageSpeed & mobile friendliness & Crawlability
              </p>
              <p className="txt2"> Competitor Analysis (1 main competitor)</p>
            </div>
            <div className="introQuarter">
              <h2>Full Audit (30-40 hours*)</h2>
              <p className="txt2"> Executive Summary</p>

              <p className="txt2"> In-depth Keyword Research</p>
              <p className="txt2">On-page: internal linking, </p>

              <p className="txt2">WebSite Crawl: In-depth Prioritized List </p>
              <p className="txt2">
                In-depth Backlink profile Audit including toxic link analysis,
                best types of links
              </p>
              <p className="txt2">
                Competitor Analysis (up to 3 main competitors), including best
                types of links
              </p>

              <p className="txt2">
                {" "}
                Technical SEO: pageSpeed & mobile friendliness, indexation &
                Crawlability
              </p>
            </div>

            <div className="introQuarter">
              {" "}
              <h2>Website Crawl (4-8 hours*)</h2>
              <p className="txt2"> Executive Summary</p>
              <p className="txt2">
                Website Crawl: prioritized List main issues
              </p>
              <h2>Backlink Profile Audit (4-8 hours)</h2>
              <p className="txt2"> Executive Summary</p>
              <p className="txt2"> Backlink Profile Audit</p>
              <p className="txt2"> Competitor's Backlink Profile Audit</p>
              <h2>Keyword Research (4-8 hours)</h2>
              <p className="txt2"> In-depth Keyword Reasearch</p>
              <p className="txt2"> Voice Search (Questions)</p>
            </div>

            <div className="introQuarter">
              <h2>Ad-hoc</h2>
              <p className="txt2">
                Keywords for content creation, extra traffic (including
                questions for Voice Search)
              </p>
              <p className="txt2">Analytics </p>
              <p className="txt2">KW Reseach</p>
              <p className="txt2"> Local SEO</p>
              <p className="txt2"> Any Offpage / Backlink SEO</p>
              <p className="txt2"> Any On-page</p>
              <p className="txt2"> SEA</p>
            </div>
          </div>{" "}
          <p className="marginright">* depending on size of the website </p>
        </div>
      </div>
    );
  }
}

export default translate("translations")(Services);

// const getStateFromRedux = state => {
//   return {
//     messages: state.messages
//   };
// };
//
// export default connect(getStateFromRedux)(Homepage);
