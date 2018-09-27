import React, { Component } from "react";
import ReactDOM from "react";
import App from "./App";
import Article from "./article";
import axios from "./axios";
import { BrowserRouter, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";

class Blog extends Component {
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
    s;
  }

  //dangerously

  render() {
    console.log("THISSTATE", this.state);
    console.log("THISSTATEARTILCES", this.state.articles);
    return (
      <div className="main">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Blog</title>
        </Helmet>
        {this.state.activeArticle || <div id="three-js-item" />}

        <div className="leftBlog">
          <h4> Latest articles</h4>

          <div className="blogWindow">
            <div className="whatever">
              {this.state.articles.map(article => (
                <p
                  className="listArticlesBlog"
                  onClick={() => this.changeActiveArticle(article)}
                >
                  {article.title}
                </p>
              ))}
            </div>
          </div>
        </div>

        <div className="article">
          {this.state.activeArticle && <Article article={this.state.article} />}
        </div>
      </div> //main
    );
  }
}

export default Blog;

// const getStateFromRedux = state => {
//   return {
//     messages: state.messages
//   };
// };
//
// export default connect(getStateFromRedux)(Blog);
