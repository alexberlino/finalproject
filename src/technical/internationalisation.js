import React, { Component } from "react";
import ReactDOM from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { translate, Trans } from "react-i18next";
import i18n from "../i18n";
import { Helmet } from "react-helmet";

class Internationalisation extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    const { t, i18n } = this.props;
    console.log(this.props.i18n.language);

    return (
      <div className="mainRightServices">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Technical SEO - Internationalisation | SEO Berlino</title>
          <meta
            name="description"
            content="Technical SEO: internationalisation and why its important in SEO "
          />
          <link
            rel="canonical"
            href="https://www.seoberlino.com/en/technical/internationalisation"
          />
        </Helmet>

        <div className="breadcrumb">
          <a href={"/" + this.props.lng}>> HOME ></a>

          <a href={"/" + this.props.lng + "/resources"}> RESOURCES ></a>

          <a href={"/" + this.props.lng + "/technical"}> TECHNICAL </a>
        </div>
        <h2 className="h1services"> Internationalisation</h2>
        <div className="serviceTitle"> Why it's Important</div>
        <div className="serviceText">
          There are various options when operating internationally: same root
          domain, different top level domains, subdomains, how to link between
          them, how to simplify the process without negatively affecting your
          SEO.
        </div>
        <img
          src="/icons/world.png"
          className="imageservices"
          alt="world map"
          width="100px"
          height="100px"
        />

        <div className="serviceTitle"> To do</div>
        <div className="serviceText">
          <p>
            If you are using the same root domain for internationalisation, you
            will be concentrating your backlink efforts to one main domain.
            However the complexity is to be dealt with. For instance href lang
            metas need to be implemented, avoid any duplicate content, use
            canonicals when necessary.
          </p>

          <p>
            If you are using different root domains for internationalisation,
            there are pros and cons compared to same root, effectively easing
            complexity and building a local identity with the possibility to
            optimize server location. However, you will need to make sure to
            link them from your "master" domain, and manage different backlink
            startegies for each domain.
          </p>

          <p>
            An Audit and careful planning will help you set-up an effective SEO
            strategy depending on your requirements and resources. Make sure the
            language meta tags and settings the Search console are set-up,
            evaluate any possible SEO damage if using client-side rendering with
            a mixed url structure.
          </p>
        </div>
      </div>
    );
  }
}

export default translate("translations")(Internationalisation);
