import React, { Component } from "react";
import ReactDOM from "react";
import App from "./App";
import Article from "./article";
import axios from "./axios";
import { BrowserRouter, Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";
import i18n from "./i18n";
import { translate, Trans } from "react-i18next";
import BlogList from "./BlogList.js";

class Blog extends Component {
  constructor() {
    super();
    this.state = {
      articles: []
    };
  }

  componentDidMount() {
    happyfun();
  }

  render() {
    const { t, i18n } = this.props;

    return (
      <div className="mainBlog">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Blog SEO Berlino - SEO Freelancer</title>
        </Helmet>
        <div id="three-js-item" />

        <BlogList lang={this.props.lang} pageChange={this.changePage} />
      </div>
    );
  }
}

export default translate("translations")(Blog);

//     messages: state.messages
//   };
// };
//
// export default connect(getStateFromRedux)(Blog);
