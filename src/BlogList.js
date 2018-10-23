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

class BlogList extends Component {
  // browserhistory.push("/en/blog/article");

  constructor() {
    super();
    this.state = {
      articles: []
    };
  }
  componentDidMount() {
    axios.get(`/getarticles/`).then(res => {
      this.setState({
        articles: res.data.rows
      });
    });
  }
  render() {
    const { t, i18n } = this.props;

    return (
      <div className="leftBlog">
        <h2 className="listArticlesBlog"> My Blog, {t("bloglatest")}</h2>

        <div className="blogWindow">
          {this.state.articles.map(article => (
            <a href={"/" + this.props.lang + "/blog/" + article.url}>
              <header
                className="listArticlesBlog"
                onClick={() => {
                  {
                    this.props.pageChange("/article/" + article.url);
                  }
                }}
              >
                {article.title}
              </header>
            </a>
          ))}
        </div>
      </div> //main
    );
  }
}

export default translate("translations")(BlogList);
