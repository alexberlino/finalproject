import React, { Component } from "react";
import ReactDOM from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";
import LinksToPages from "./LinksToPages";

class About2 extends Component {
  constructor() {
    super();
    this.state = {
      show: null,
      hide: null
    };
  }

  componentDidMount() {
    // happyfun();
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="main">
        <Helmet>
          <meta charSet="utf-8" />
          <title>About this website || SEOBerlino</title>
          <meta name="description" content="about this website: SEO Berlino" />
          <link
            rel="canonical"
            href={
              "https://www.seoberlino.com/" +
              this.props.lang +
              "/aboutthiswebsite"
            }
          />{" "}
        </Helmet>

        <div className="infoTitle">
          <h1> About this website </h1>
        </div>

        <div className="infoMain">
          <p className="block">Website live since: October 20th 2018 </p>
          <p className="txthead">Why</p>
          <div className="newsItem">
            <ul>
              <li>
                {" "}
                <p className="block">
                  To experience all the challenges encountered for SEO in web
                  development and web design, and to improve my technical skills
                </p>
              </li>
              <li>
                {" "}
                <p className="block">
                  Practice with React and all I learnt at Spiced during my Full
                  Stack Web Development Bootcamp.
                </p>
              </li>

              <li>
                {" "}
                <p className="block">
                  Because I wasn't happy with my previous website
                </p>
              </li>
            </ul>
          </div>

          <p className="txthead">How</p>
          <div className="newsItem">
            {" "}
            <ul>
              <li>
                {" "}
                <p className="block">
                  *React* for front end, with react-router
                </p>
              </li>
              <li>
                {" "}
                <p className="block">*Helmet* plug-in for SEO</p>
              </li>

              <li>
                {" "}
                <p className="block">*i18n* for the internationalisation</p>
              </li>

              <li>
                {" "}
                <p className="block">*Node.js* and *Express.js* for backend</p>
              </li>
              <li>
                {" "}
                <p className="block">*Heroku* for hosting</p>
              </li>

              <li>
                {" "}
                <p className="block">*Postgresql* for the blog</p>
              </li>
              <li>
                {" "}
                <p className="block">*axios* for ajax requests</p>
              </li>

              <li>
                {" "}
                <p className="block">
                  *Nodemailer* for the contact form sending
                </p>
              </li>
              <li>
                {" "}
                <p className="block">
                  *csurf*, *salt* and *hash* for sessions and admin log-in
                </p>
              </li>
              <li>
                {" "}
                <p className="block">
                  *3js* animation but currently disabled due to performance
                  issues
                </p>
              </li>
              <li>
                {" "}
                <p className="block">*github*, *git*</p>
              </li>
              <li>
                {" "}
                <p className="block">and a lot of *CSS*</p>
              </li>
            </ul>{" "}
          </div>
          <p className="txthead">Next steps</p>
          <div className="newsItem">
            <ul>
              <li>
                {" "}
                <p className="block">
                  Optimize JS payloads delivery for performance improvements.
                </p>{" "}
              </li>

              <li>
                {" "}
                <p className="block">More in-depth content</p>{" "}
              </li>
              <li>
                {" "}
                <p className="block">Dynamic rendering</p>{" "}
              </li>
              <li>
                {" "}
                <p className="block">More translation into German</p>{" "}
              </li>
              <li>
                {" "}
                <p className="block">More languages to follow</p>{" "}
              </li>
              <li>
                {" "}
                <p className="block">More SEO, backlinks needed!</p>{" "}
              </li>
            </ul>
          </div>
        </div>
        <div>
          <LinksToPages />
        </div>
      </div>
    );
  }
}

export default About2;

// const getStateFromRedux = state => {
//   return {
//     messages: state.messages
//   };
// };

// export default connect(getStateFromRedux)(Resources);
