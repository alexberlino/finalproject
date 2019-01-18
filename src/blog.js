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
    window.scrollTo(0, 0);
  }

  render() {
    const { t, i18n } = this.props;
    console.log(this.props);

    return (
      <div className="main">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Blog SEO Berlino - SEO Expert in Berlin</title>
          <meta
            name="description"
            content="SEO Berlino Blog, about SEO topics: on-page, off-page, technical SEO, competitor analysis and Brandbuilding."
          />
          <link rel="canonical" href="https://www.seoberlino.com/en/blog" />{" "}
        </Helmet>
        <div className="services">
          <div className="breadcrumb">
            <a href={"/" + this.props.lng}> SEO FREELANCER </a>

            <a href={"/" + this.props.lng + "/blog"}> BLOG ></a>
          </div>
          <img
            src="/auditmainpic/technical.jpg"
            title="technical, a photo by Markus Spiske"
            alt="Technical SEO"
            className="imageAudit"
            height="250px"
            width="100%"
          />
          <div className="infoTitle">
            <h1 className="h1services">SEO Blog</h1>
          </div>{" "}
          <BlogList lang={this.props.lang} pageChange={this.changePage} />
        </div>{" "}
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
