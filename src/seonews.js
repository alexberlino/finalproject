import React, { Component } from "react";
import ReactDOM from "react";
import App from "./App";
import { BrowserRouter, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";
import NewsItems from "./NewsItems";
import ContactMain from "./ContactMain";
import { translate, Trans } from "react-i18next";
import i18n from "./i18n";

class SEONews extends Component {
  constructor() {
    super();
    this.state = {
      show: null,
      hide: null
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleClickClose = this.handleClickClose.bind(this);
  }
  handleClick(n) {
    this.setState({
      show: n,
      hide: "hide"
    });
  }
  handleClickClose() {
    this.setState({
      hide: "show"
    });
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
          <title>SEO News || SEOBerlino</title>
          <meta
            name="description"
            content="SEO News: everything to know about the latest news in SEO"
          />
          <link
            rel="canonical"
            href={"https://www.seoberlino.com/" + this.props.lng + "/seonews"}
          />
        </Helmet>
        <img
          src="/auditmainpic/seonews.jpg"
          title="news, a photo by raw pixel"
          alt="SEO News"
          height="450px"
          className="imageAudit"
        />
        <div className="services">
          <div className="breadcrumb">
            <img className="iconsmore2" src="/arrow.png" />

            <a href={"/" + this.props.lang}> {t("services")}</a>
            <img className="iconsmore2" src="/arrow.png" />

            <a href={"/" + this.props.lang + "/resources"}> SEO </a>
            <img className="iconsmore2" src="/arrow.png" />

            <a href={"/" + this.props.lang + "/seonews"}> SEONEWS </a>
          </div>

          <h1 className="h1services">SEONews</h1>

          <div>
            {" "}
            <NewsItems />
            <div className="newsItem">
              <p onClick={() => this.handleClick(1)} className="low">
                Google+ to close down.
              </p>
            </div>
            <div>
              {this.state.show == 1 ? (
                <div className="txt3">
                  There have many talks about using Google+ for SEO. Despite
                  being a flop especially in Europe, it was still a Google
                  product but now finally after so much resistance, it's being
                  deactivated and therefore ends any hesitation to use it to
                  please Google.{" "}
                </div>
              ) : null}
            </div>
            <div className="newsItem">
              <img
                alt="importance"
                className="importancenews"
                src="/orangelight.webp"
              />
              <p onClick={() => this.handleClick(2)} className="medium">
                Google admits personalised search results limited
              </p>
            </div>
            <div>
              {this.state.show == 2 ? (
                <div className="txt3">
                  Of course location is a still big factor in search results,
                  but other than that and searches done just before, there is
                  hardly any other personalisation.
                  <a
                    target="_blank"
                    className="block bold"
                    href="https://www.cnbc.com/2018/09/17/google-tests-changes-to-its-search-algorithm-how-search-works.html"
                  >
                    read_more
                  </a>
                </div>
              ) : null}
            </div>
            <div className="newsItem">
              <img
                alt="importance"
                className="importancenews"
                src="/orangelight.webp"
              />
              <p onClick={() => this.handleClick(3)} className="medium">
                Search Console and query data that may make the overall numbers
                look worse
              </p>
              <div>
                {this.state.show == 3 ? (
                  <div className="txt3">
                    since this summer, Google has made changes to how it filters
                    reports, removing some query data.
                    <a
                      target="_blank"
                      className="block bold"
                      href="https://twitter.com/googlewmc/status/1034703153470599168"
                    >
                      read_more
                    </a>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
          <div />
        </div>
      </div>
    );
  }
}

export default translate("translations")(SEONews);

// const getStateFromRedux = state => {
//   return {
//     messages: state.messages
//   };
// };

// export default connect(getStateFromRedux)(Resources);
