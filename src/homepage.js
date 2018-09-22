import React, { Component } from "react";
import ReactDOM from "react";
import App from "./App";
import { BrowserRouter, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";
import Blog from "./blog";

class Homepage extends Component {
  constructor() {
    super();
    this.state = {};
    this.ToggleFrame = this.ToggleFrame.bind(this);
  }

  ToggleFrame() {
    return <Blog />;
  }

  render() {
    return (
      <div className="main">
        <Helmet>
          <meta charSet="utf-8" />
          <title>SEO Berlino</title>
        </Helmet>
        <div className="container">
          <div className="filterDiv">
            <h2 />
          </div>
          <div className="intro">
            <p className="txt">Experienced Freelance SEO expert in Berlin. </p>
            <p className="txt">
              Close to 10 years experience in SEO,SEA and Analytics.
            </p>
            <p className="txt">
              Full Stack Web Developer (Javascript, Node, React, SQL).
            </p>
            <a href="./about">
              <button className="buttonHP">More</button>{" "}
            </a>
          </div>
        </div>
      </div> //Main
    );
  }
}

export default Homepage;

// const getStateFromRedux = state => {
//   return {
//     messages: state.messages
//   };
// };
//
// export default connect(getStateFromRedux)(Homepage);
