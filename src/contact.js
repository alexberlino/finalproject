import React, { Component } from "react";
import ReactDOM from "react";
import App from "./App";
import { BrowserRouter, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";
import { translate, Trans } from "react-i18next";
import { Form, FormGroup, Input, Label, Button } from "reactstrap";
import i18n from "./i18n";
import ContactMain from "./ContactMain";

import axios from "./axios";

class Contact extends Component {
  render() {
    const { t, i18n } = this.props;

    return (
      <div className="main">
        <Helmet>
          <meta charSet="utf-8" />
          <title>{t("getintouch_title")}</title>
          <meta
            name="description"
            content="Get in touch with SEO Berlino: SEO expert since 2010. Onpage, Offpage SEO,
            Technical SEO, Analytics, Competitor Analysis"
          />
          <link
            rel="canonical"
            href={"https://www.seoberlino.com/" + this.props.lng + "/contact"}
          />{" "}
        </Helmet>
        <ContactMain />
        <br />
        <a className="servicesHP" href={"/" + this.props.lng + "/services"}>
          <button className="servicesHP">{t("servicesL")}</button>
        </a>
        <div>
          <br />
          <br />
          <div className="intro2">
            <div className="introQuarter">
              <img
                alt="monitoring"
                src="/seo-monitoring.jpg"
                className="icon"
              />

              <p className="txt2"> SEO</p>
              <p className="txt2">Analytics </p>
              <p className="txt2">{t("intro5")}</p>

              <p className="txt2"> Search Engine Advertising (Google Ads)</p>
            </div>
            <div className="introQuarter">
              <img alt="programming" src="/programming.svg" className="icon" />

              <p className="txt2"> React, Vue, Handlebars</p>
              <p className="txt2">Javascript, JQuery </p>
              <p className="txt2">Node, Express</p>

              <p className="txt2"> HTML, CSS</p>
              <p className="txt2"> SQL, Postgres</p>
            </div>
            <div className="introQuarter">
              <img alt="programming" src="/me.svg" className="icon" />

              <p className="txt2">{t("intro6")}</p>
              <p className="txt2">{t("intro7")} </p>
              <p className="txt2">{t("intro8")} </p>
            </div>
            <div className="introQuarter ">
              <a
                target="_blank"
                href="https://www.linkedin.com/in/alex-bieth-berlin/"
              >
                <img
                  alt="LinkedIn Profile"
                  src="/linkedinprof.png"
                  className="linkedin"
                  height="100px"
                  width="140px"
                />{" "}
              </a>
            </div>
            <br />
            <br />
          </div>
          <div className="txt3 testimonial">
            "Alex is an SEO expert who proposes concrete action measures based
            on a well-founded analysis and independently implements them. This
            gives me the opportunity to focus on my day-to-day business while
            still keeping my finger on the pulse of the times with my website.
            Thank you for the transparent and professional cooperation!"
            <br />
            <div className="bold">
              <span className="inline2">
                <img
                  height="40px"
                  width="60px"
                  alt="must-be logo"
                  src="/mustbe.png"
                />{" "}
              </span>{" "}
              <span className="inline2">Hendrik Feige - owner at must-be</span>{" "}
            </div>
          </div>
          <br />
          <div className="txt3 testimonial">
            "Thank you for report which was exactly what I was hoping for!"
            <br />
            <div className="bold">
              <span className="inline2">
                <img
                  height="40px"
                  width="45px"
                  src="/teezily.png"
                  alt="teezily logo"
                />{" "}
              </span>{" "}
              <span className="inline2">
                Charles Dilasser - CEO at Teezily{" "}
              </span>
            </div>{" "}
          </div>
          <br />
          <div className="txt3 testimonial">
            "Fast, reliable & professional. Would definitely recommend."
            <br />
            <div className=" bold ">
              <span className="inline2">
                <img
                  height="30px"
                  width="60px"
                  src="/independent.png"
                  alt="independent logo"
                />{" "}
              </span>{" "}
              <span className="inline2">
                Richard Sfez – GM at The Independent Photographer
              </span>{" "}
            </div>{" "}
          </div>{" "}
          <br />
          <div className="txt3 testimonial">
            "Alex always had a superior command of his field of activity and
            very good knowledge of all processes and aspects of the company. He
            was always very successful in expanding his professional knowledge
            on his own initiative. Alex has led several major projects of
            cleaning up our SEO profiles so as to reflect the best practices
            preached by Google as well as pioners. He has been strict in
            following the cleanest and best practices to avoid penalties, but
            continue growth in Spreadshirt's SEO visibility."
            <br />
            <div className="bold">
              <span className="inline2">
                <img
                  height="40px"
                  width="35px"
                  alt="spreadshirt logo"
                  src="/spreadshirt.png"
                />{" "}
              </span>{" "}
              <span className="inline2">Hugo Smoter - CCO at Spreadshirt</span>{" "}
            </div>{" "}
          </div>
        </div>{" "}
      </div>
    );
  }
}

export default translate("translations")(Contact);

// const getStateFromRedux = state => {
//   return {
//     messages: state.messages
//   };
// };
//
// export default connect(getStateFromRedux)(Contact);
