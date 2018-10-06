import React, { Component } from "react";
import ReactDOM from "react";
import App from "./App";
import Article from "./article";
import axios from "./axios";
import { BrowserRouter, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";
import i18n from "./i18n";
import { translate, Trans } from "react-i18next";

class BlogArticlePage extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      activeArticle: false,
      mainArticle: null
    };
    this.changeActiveArticle = this.changeActiveArticle.bind(this);
  }

  componentDidMount() {
    axios.get(`/getarticles/`).then(res => {
      this.setState({
        articles: res.data.rows
      });
    });
    happyfun();
  }
  changeActiveArticle(article) {
    this.setState({
      activeArticle: true,
      article: article
    });
    // browserhistory.push("/en/blog/article");
  }

  //dangerously

  render() {
    const { t, i18n } = this.props;

    return (
      <div className="mainBlog">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Blog</title>
        </Helmet>
        <div id="three-js-item" />
        {this.state.activeArticle}

        <div className="leftBlog">
          <h4> {t("bloglatest")}</h4>
        <Blog />
<div className="article">
    {this.state.activeArticle && <Article article={this.state.article} />}






        </div>
      </div>
    );
  }
}

export default translate("translations")(BlogArticlePage);

// const getStateFromRedux = state => {
//   return {
//     messages: state.messages
//   };
// };
//
// export default connect(getStateFromRedux)(Blog);
