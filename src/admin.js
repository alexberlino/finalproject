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
      <div className="main">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Admin | SEO Berlino </title>
          <meta type="description" content="" />
          <meta name="robots" content="noindex, nofollow" />
          <link rel="canonical" />
        </Helmet>

        <div className="services3 black">
          <span>
            <br /> <br /> <br /> <br /> <br />
            <Link className=" block black" to={"/en/postarticle"}>
              Create new Blog Post
            </Link>{" "}
            <br /> <br /> <br /> <br /> <br />
          </span>
          <span>
            <Link className=" block black" to={"/en/editarticle"}>
              Edit a Blog Post
            </Link>{" "}
            <br /> <br /> <br /> <br /> <br />
          </span>
          <br />
          <a className=" block black" href="/log-out">
            Log out
          </a>{" "}
          <br /> <br /> <br /> <br /> <br />
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
