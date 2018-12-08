import React, { Component } from "react";
import ReactDOM from "react";
import App from "./App";
import { BrowserRouter, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";
import NewsItems from "./NewsItems";
import LinksToPages from "./LinksToPages";
import ContactMain from "./ContactMain";

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
    happyfun();
    window.scrollTo(0, 0);
  }

  render() {
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
            href={"https://www.seoberlino.com/" + this.props.lang + "/seonews"}
          />
        </Helmet>

        <div id="three-js-item" />

        <div className="infoTitle">
          <h1 className="infoTitle"> SEO NEWS</h1>
        </div>

        <div className="infoMain">
          {" "}
          <NewsItems />
          <div className="newsItem">
            <img
              alt="important"
              className="importancenews"
              src="/greenlight.png"
            />

            <p onClick={() => this.handleClick(1)} className="low">
              Google+ to close down.
            </p>
          </div>
          <div>
            {this.state.show == 1 ? (
              <div className="txt4">
                There have many talks about using Google+ for SEO. Despite being
                a flop especially in Europe, it was still a Google product but
                now finally after so much resistance, it's being deactivated and
                therefore ends any hesitation to use it to please Google.{" "}
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
              <div className="txt4">
                Of course location is a still big factor in search results, but
                other than that and searches done just before, there is hardly
                any other personalisation.
                <a
                  className="blockbold"
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
                <div className="txt4">
                  since this summer, Google has made changes to how it filters
                  reports, removing some query data.
                  <a
                    className="blockbold"
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
    );
  }
}

export default SEONews;

// const getStateFromRedux = state => {
//   return {
//     messages: state.messages
//   };
// };

// export default connect(getStateFromRedux)(Resources);
