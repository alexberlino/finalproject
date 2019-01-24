import React, { Component } from "react";
import ReactDOM from "react";
import App from "./App";
import { BrowserRouter, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";

class NewsItems extends Component {
  constructor() {
    super();
    this.state = {
      show: null
    };

    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(n) {
    this.setState({
      show: n
    });
  }

  componentWillMount() {}

  render() {
    return (
      <div>
        <div className="infoDate">Last update: October 9th, 2018</div>

        <p>>click on news item to read></p>

        <div className="newsItem" title="clicksfsf">
          <img
            alt="importance"
            className="importancenews"
            src="/redlight.png"
          />
          <p onClick={() => this.handleClick(10)} className="important">
            Indexation for Javascript apps: use Dynamic Rendering
          </p>
          <div>
            {this.state.show == 10 ? (
              <div className="txt4">
                only recently has Google officially given its blessing to
                dynamical rendering and even published documentation for
                optimized deployment. Hence, Google is still struggling to crawl
                and index JavaScript webpages.
                <a
                  className="block bold"
                  href="https://twitter.com/googlewmc/status/1047458977225875456"
                >
                  read_more
                </a>{" "}
              </div>
            ) : null}
          </div>
        </div>
        <div className="newsItem">
          <img
            alt="importance"
            className="importancenews"
            src="/redlight.png"
          />
          <p onClick={() => this.handleClick(11)} className="important">
            Mobile First Enabled for most websites
          </p>
          <div>
            {this.state.show == 11 ? (
              <div className="txt4">
                If you don't have your website optimize for mobile-first, and/or
                you haven't yet received a message of Google telling you that
                it's been rolled out for your site, you are an exception. Since
                April 2018 till only a few weeks, Google has sent to huge
                majority of webmasters the notification of the well anticipated
                change.{" "}
              </div>
            ) : null}
          </div>
        </div>

        <div className="newsItem">
          <img
            alt="importance"
            className="importancenews"
            src="/redlight.png"
          />
          <p onClick={() => this.handleClick(12)} className="important">
            Google's algorithm latest update: August,1 2018
          </p>
          <div>
            {this.state.show == 12 ? (
              <div className="txt4">
                Named "the Medical Core Update" as it mostly affected the health
                an wellness vertical, it somehow affected all vertical. More
                reports on moz{" "}
                <a
                  href="https://moz.com/blog/googles-august-1st-core-update-week-1"
                  className="block bold"
                >
                  read_more
                </a>
              </div>
            ) : null}
          </div>
        </div>
        <div className="newsItem">
          <img
            alt="importance"
            className="importancenews"
            src="/redlight.png"
          />
          <p onClick={() => this.handleClick(13)} className="important">
            Chrome now marks all unencrypted websites as ‘not secure’
          </p>
          <div>
            {this.state.show == 13 ? (
              <div className="txt4">
                If you haven't yet made the transition to https, put it on the
                top of your priority list. Not only will you suffer to rank but
                also for all Chrome users, you will get a massive bounce rate
                because of the "not secure" warning Google has implemented this
                summer
                <a
                  className="block bold"
                  href="https://www.blog.google/products/chrome/milestone-chrome-security-marking-http-not-secure/"
                >
                  read_more
                </a>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItems;

// const getStateFromRedux = state => {
//   return {
//     messages: state.messages
//   };
// };

// export default connect(getStateFromRedux)(Resources);
