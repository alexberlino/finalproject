import React, { Component } from "react";
import ReactDOM from "react";
import App from "./App";
import axios from "./axios";
import BlogList from "./BlogList";
import { translate, Trans } from "react-i18next";
import i18n from "./i18n";
import { BrowserRouter, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
// import { translate, Trans } from "react-i18next";
// import i18n from "./i18n";
import { Helmet } from "react-helmet";
import NoMatch from "./NoMatch";
import LinksToPages from "./LinksToPages";

class Article extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false
    };
    this.createMarkup = this.createMarkup.bind(this);
  }

  createMarkup() {
    return { __html: this.state.article };
  }
  componentDidMount() {
    window.scrollTo(0, 0);
    let BE = this.props.page.slice(9);
    axios.get(`/getarticleurl/${BE}`).then(res => {
      if (res.data.rows.length == 0) {
        this.setState({
          error: true
        });
      } else {
        let {
          id,
          title,
          author,
          article,
          imageurl,
          status,
          dat,
          url
        } = res.data.rows[0];

        dat = dat.slice(0, 10);

        this.setState({
          id,
          title,
          author,
          article,
          imageurl,
          status,
          dat,
          url
        });
      }
    });
  }

  render() {
    if (this.state.error) {
      return <NoMatch />;
    }
    const { t, i18n } = this.props;

    return (
      <div className="main">
        <Helmet>
          <meta charSet="utf-8" />
          <title>{this.state.title + " | SEO Berlino Blog"}</title>
          <meta
            name="description"
            content={
              this.state.title +
              ", an article about SEO - Keyword research, onpage and offpage SEO, technical and competitor analysis"
            }
          />
          <link
            rel="canonical"
            href={"/" + this.props.lng + "/article/" + this.state.url}
          />
        </Helmet>
        <img
          src={this.state.imageurl}
          className="imageAudit"
          alt="blog article"
        />
        <div className="services">
          <div className="breadcrumb">
            <img className="iconsmore2" src="/arrow.png" />

            <a href={"/" + this.props.lang}> {t("services")} </a>
            <img className="iconsmore2" src="/arrow.png" />

            <a href={"/" + this.props.lang + "/blog"}> BLOG </a>
          </div>

          <div className="infoTitle">
            <h1 className="h1services">{this.state.title}</h1>
          </div>

          <div className="articleAuthor">{"Author:  " + this.state.author}</div>
          <div className="articleDate">
            {"Date published:  " + this.state.dat}
          </div>
          <div className="articleID">{"#" + this.state.id}</div>

          <div
            className="articleArticle"
            dangerouslySetInnerHTML={this.createMarkup()}
          />
        </div>
      </div>
    );
  }
}

export default translate("translations")(Article);
