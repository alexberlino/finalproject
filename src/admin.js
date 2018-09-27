import React, { Component } from "react";
import ReactDOM from "react";
import App from "./App";
import { BrowserRouter, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { Helmet } from "react-helmet";
import Blog from "./blog";
import Pres from "./pres";

class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="main">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Admin SEO Berlino</title>
        </Helmet>

        <div className="mainBox">
          <p>
            <Link classname="txt" to={"/en/postarticle"}>
              Create new Blog Post
            </Link>{" "}
          </p>
          <p>
            <Link classname="txt" to={"/en/editarticle"}>
              Edit a Blog Post
            </Link>
          </p>
        </div>
      </div> //Main
    );
  }
}

export default Admin;

// const getStateFromRedux = state => {
//   return {
//     messages: state.messages
//   };
// };
//
// export default connect(getStateFromRedux)(Homepage);
