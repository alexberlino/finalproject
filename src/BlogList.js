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
      <div>
        <table className="blogArticles">
          {this.state.articles.map(article => (
            <tr className="blogItem">
              <a href={"/" + this.props.lang + "/article/" + article.url}>
                <th>
                  <img
                    className="imageBlog"
                    src={article.imageurl}
                    height="120px"
                    width="160px"
                    alt="blog article"
                  />
                </th>

                <th
                  className="listArticlesBlog"
                  onClick={() => {
                    {
                      this.props.pageChange("/article/" + article.url);
                    }
                  }}
                >
                  {article.title}
                </th>
              </a>
            </tr>
          ))}
        </table>
      </div>
    );
  }
}

export default translate("translations")(BlogList);
