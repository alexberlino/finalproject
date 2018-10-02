import React, { Component } from "react";
import ReactDOM from "react";
import App from "./App";
import { BrowserRouter, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
// import { translate, Trans } from "react-i18next";
// import i18n from "./i18n";
import { Helmet } from "react-helmet";
import Blog from "./blog";

class Article extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.createMarkup = this.createMarkup.bind(this);
  }

  createMarkup() {
    return { __html: this.props.article.article };
  }

  render() {
    // const { t, i18n } = this.props;

    return (
      <div className="blogArticleWindow">
        <Helmet>
          <meta charSet="utf-8" />
          <title>{this.props.article.title + " | SEO Berlino Blog"}</title>
        </Helmet>

        <div className="articleTitle">{this.props.article.title}</div>
        <div className="articleAuthor">
          {"Author:  " + this.props.article.author}
        </div>

        <div className="articleDate">
          {"Date published:  " + this.props.article.dat.slice(0, 10)}
        </div>
        <div className="articleID">{"#" + this.props.article.id}</div>
        <img src={this.props.article.imageurl} className="articlePic" />

        <div
          className="articleArticle"
          dangerouslySetInnerHTML={this.createMarkup()}
        />
      </div>
    );
  }
}

export default Article;
