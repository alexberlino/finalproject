import React, { Component } from "react";
import ReactDOM from "react";
import App from "./App";
import { BrowserRouter, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";
import Blog from "./blog";
import Pres from "./pres";

class Homepage extends Component {
  constructor() {
    super();
    this.state = {};
    this.ToggleFrame = this.ToggleFrame.bind(this);
  }

  getInitialState() {
    return { showHideSidenav: "hidden" };
  }

  ToggleFrame() {
    var css = this.props.showHidePres === "hidden" ? "show" : "hidden";
    this.setState({ showHideSidenav: css });
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
              Close to 10 years experience in SEO, SEA and Analytics.
            </p>
            <p className="txt">
              Full Stack Web Developer (Javascript, Node, React, SQL).
            </p>
            <a
              href="#"
              onClick={this.toggleSidenav}
              className="btn-menu show-on-small"
            >
              <button className="buttonHP">More</button>{" "}
            </a>
            <Pres className={this.props.showHidePres} />
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
