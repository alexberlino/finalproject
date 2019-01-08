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
          <title>
            SEO Audit Expertise - Search Engine Optimization || SEOBerlino
          </title>
          <meta
            name="description"
            content="SEO Expertise: Onpage SEO, Offpage SEO, Technical SEO, Analytics and SEO Research."
          />
          <link
            rel="canonical"
            href="https://www.seoberlino.com/en/resources"
          />
        </Helmet>

        <div className="main2" />

        <div className="breadcrumb">
          <a href={"/" + this.props.lang}>> SEO FREELANCER ></a>

          <a href={"/" + this.props.lang + "/resources"}> AUDIT ></a>
        </div>

        <div className="infoTitle">
          <h1 className="h1services">SEO Audit</h1>

          <img
            alt="research and analytics"
            src="/magnifier.svg"
            className="logoAnimationServices"
          />
        </div>

        <div>
          <div className="services">
            <div className="black leftServices">
              <table>
                <tr>
                  {" "}
                  <th bgColor="lightblue">
                    <a size="49px" href={"/en/onpage"}>
                      ON PAGE
                    </a>
                  </th>{" "}
                  <th bgColor="beige">
                    {" "}
                    <a href={"/en/offpage"}>OFFPAGE</a>{" "}
                  </th>{" "}
                </tr>

                <tr>
                  {" "}
                  <th bgColor="beige">
                    <a href={"/en/technical"}>TECHNICAL SEO</a>{" "}
                  </th>{" "}
                  <th bgColor="lightblue">
                    {" "}
                    <a href={"/en/research"}>RESEARCH & ANALYTICS</a>{" "}
                  </th>{" "}
                </tr>

                <tr>
                  {" "}
                  <th bgColor="lightblue">
                    {" "}
                    <a href={"/en/seonews"}>SEONEWS</a>{" "}
                  </th>
                </tr>
              </table>
            </div>
          </div>

          <div>
            <div className="marginright">
              <p>
                <a className="resourcesLinks" href={"/en/onpage"}>
                  ON PAGE
                </a>
              </p>
              <p>
                Content of course is the most important, but using the language
                your users like to use thanks to a good Keyword Research with
                quality landing pages, and producing content for users not just
                for SEO. Link internally in an efficient way and don't forget
                voice search.
              </p>
              <p>
                <a className="resourcesLinks" href={"/en/offpage"}>
                  OFFPAGE
                </a>
              </p>
              <p>
                Know where you stand with your backlink profile and plan regular
                and continuous backlink campaign. Your are not looking just for
                any links, but links which make sense and also can bring
                traffic, that means they need to be on websites and pages which
                make sense.{" "}
              </p>
              <p>
                <a className="resourcesLinks" href={"/en/technical"}>
                  TECHNICAL SEO
                </a>
              </p>{" "}
              <p>
                Keeping an eye on indexation is extremely important so that you
                don't waste crawling credits. Avoid however duplicate content
                and to confuse the Google bot with poor indexation messages
                through inappropriate crawling messages. Make sure also your
                mobile version loads fast. Does your website use https? If it
                doesn't migrate it now!{" "}
              </p>
              <p>
                <a className="resourcesLinks" href={"/en/research"}>
                  RESEARCH & ANALYTICS
                </a>
              </p>{" "}
              <p>
                Know your competitors. Go Local (SEO) to secure the market close
                to you and paid search to get those extra visits while you work
                on your SEO.{" "}
              </p>
              <p>
                If you are not using analytics as a tool to closely monitor your
                traffic, you are losing opportunities that will guide you to
                make improvements.{" "}
              </p>
              <p>
                <a className="resourcesLinks" href={"/en/seonews"}>
                  SEONEWS
                </a>
              </p>{" "}
              <p>
                Keep in touch with the latest algorithm updates and news from
                Google{" "}
              </p>
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
