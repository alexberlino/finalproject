import React, { Component } from "react";
import ReactDOM from "react";
import App from "./App";
import { BrowserRouter, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";

class About extends Component {
  constructor() {
    super();
    this.state = { categorie: null };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(index) {
    this.setState({ categorie: "text-blur-out" });
    setTimeout(function() {
      window.location.reload();
    }, 1000);
  }

  render() {
    return (
      <div className={this.state.categorie}>
        <div>
          <Helmet>
            <meta charSet="utf-8" />
            <title>About John Smith</title>
          </Helmet>
        </div>
        <div onClick={this.handleClick} className="bounce-in-top2">
          Experience creating hundreds of Landing Pages workign closely with UX
          and Product Management
        </div>

        <div onClick={this.handleClick} className="roll-in-left">
          Over 5 years work experience as head of SEO, leading a team of up to
          10 using scrumb +350% in organic orders.
        </div>

        <div onClick={this.handleClick} className="swirl-in-fwd2">
          Trained Full Stack Web Developer
        </div>

        <div onClick={this.handleClick} className="bounce-in-top">
          Helped dozens of clients with personalised SEO plans to face modern
          SEO issues
        </div>

        <div onClick={this.handleClick} className="fade-in">
          Experience working on Technical SEO: indexation, crawling, etc
        </div>
        <div onClick={this.handleClick} className="swirl-in-fwd">
          Over 18 months work experience managing a multi-million Adword account
        </div>

        <div onClick={this.handleClick} className="roll-in-left2">
          Creation & organization of SEO Roadmaps, KPIs & Technical Dashboards.
          Creation and management on SEO Analytics reports (Adobe SiteCatalyst
          Omniture)
        </div>
      </div>
    );
  }
}

export default About;

// const getStateFromRedux = state => {
//   return {
//     messages: state.messages
//   };
// };

// export default connect(getStateFromRedux)(About);
