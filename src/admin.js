import React, { Component } from "react";
import ReactDOM from "react";
import App from "./App";
import { BrowserRouter, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { Helmet } from "react-helmet";

class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="mainlogin">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Admin </title>
        </Helmet>

        <div className="mainBox">
          <span>
            <Link className="infoMain" to={"/en/postarticle"}>
              Create new Blog Post
            </Link>{" "}
          </span>
          <span>
            <Link className="infoMain" to={"/en/editarticle"}>
              Edit a Blog Post
            </Link>
          </span>

          <a className="infoMain" href="/log-out">
            Log out
          </a>
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
