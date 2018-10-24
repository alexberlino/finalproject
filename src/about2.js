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
        </Helmet>

        <div className="infoTitle">
          <h1> About this website </h1>
        </div>

        <div className="infoMain">
          <p className="block2">Website live since: October 20th 2018 </p>
          <p className="txthead">Why</p>
          <div className="newsItem">
            <ul>
              <li>
                {" "}
                <p className="block2">
                  To experience live all the problems encountered for SEO in web
                  design and improve my technical skills
                </p>
              </li>
              <li>
                {" "}
                <p className="block2">
                  Practice with React and all I learnt at Spiced during my Full
                  Stack Web Development Bootcamp.
                </p>
              </li>

              <li>
                {" "}
                <p className="block2">
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
                <p className="block2">
                  *React* for front end, with react-router
                </p>
              </li>
              <li>
                {" "}
                <p className="block2">*Helmet* plug-in for SEO</p>
              </li>

              <li>
                {" "}
                <p className="block2">*i18n* for the internationalisation</p>
              </li>

              <li>
                {" "}
                <p className="block2">*Node.js* and *Express.js* for backend</p>
              </li>
              <li>
                {" "}
                <p className="block2">*Heroku* for hosting</p>
              </li>

              <li>
                {" "}
                <p className="block2">*Postgresql* for the blog</p>
              </li>
              <li>
                {" "}
                <p className="block2">*axios* for ajax requests</p>
              </li>

              <li>
                {" "}
                <p className="block2">
                  *Nodemailer* for the contact form sending
                </p>
              </li>
              <li>
                {" "}
                <p className="block2">
                  *csurf*, *salt* and *hash* for sessions and admin log-in
                </p>
              </li>
              <li>
                {" "}
                <p className="block2">
                  *3js* animation but currently disabled due to performance
                  issues
                </p>
              </li>
              <li>
                {" "}
                <p className="block2">*github*, *git*</p>
              </li>
              <li>
                {" "}
                <p className="block2">and a lot of *CSS*</p>
              </li>
            </ul>{" "}
          </div>
          <p className="txthead">Next steps</p>
          <div className="newsItem">
            <ul>
              <li>
                {" "}
                <p className="block2">
                  Optimize JS payloads delivery for performance improvements.
                </p>{" "}
              </li>

              <li>
                {" "}
                <p className="block2">More in-depth content</p>{" "}
              </li>
              <li>
                {" "}
                <p className="block2">Dynamic rendering</p>{" "}
              </li>
              <li>
                {" "}
                <p className="block2">More translation into German</p>{" "}
              </li>
              <li>
                {" "}
                <p className="block2">More languages to follow</p>{" "}
              </li>
              <li>
                {" "}
                <p className="block2">More SEO, backlinks needed!</p>{" "}
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
