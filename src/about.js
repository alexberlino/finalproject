import React, { Component } from "react";
import ReactDOM from "react";
import App from "./App";
import { BrowserRouter, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";
import { translate, Trans } from "react-i18next";
import About2 from "./about2";
import i18n from "./i18n";

class About extends Component {
  constructor() {
    super();
    this.state = {
      clicked: false,
      categorie: null,
      hover: false
    };

    this.handleClick = this.handleClick.bind(this);
  }
  // handleMouseIn() {
  //   this.setState({ hover: true });
  // }
  //
  // handleMouseOut() {
  //   this.setState({ hover: false });
  // }

  handleClick() {
    this.setState({ categorie: "text-blur-out" });

    setTimeout(
      function() {
        this.setState({
          clicked: true,
          categorie: null
        });
      }.bind(this),
      500
    );
  }
  tooltipStyle() {
    display: this.state.hover ? "block" : "none";
  }

  // this.setState({ categorie: "text-blur-out" });

  // setTimeout(
  //   this.setState({
  //     clicked: true,
  //     categorie: null
  //   }),
  //   1000
  // );

  render() {
    const { t, i18n } = this.props;

    return (
      <div className="main">
        <div className={this.state.categorie} />

        <div>
          <Helmet>
            <meta charSet="utf-8" />
            <title>{t("aboutme")}</title>
          </Helmet>
        </div>

        <div className="aboutgeneric">
          <div
            onClick={this.handleClick}
            className="bounce-in-top2 aboutgeneric"
          >
            {t("about1")}
          </div>

          <div onClick={this.handleClick} className="roll-in-left aboutgeneric">
            {t("about2")}
          </div>
          <div
            onClick={this.handleClick}
            className="swirl-in-fwd2 aboutgeneric"
          >
            {t("about3")}
          </div>
          <div
            onClick={this.handleClick}
            className="bounce-in-top aboutgeneric"
          >
            {t("about4")}
          </div>
          <div onClick={this.handleClick} className="fade-in aboutgeneric">
            {t("about5")}
          </div>
          <div onClick={this.handleClick} className="swirl-in-fwd aboutgeneric">
            {t("about6")}
          </div>
          <div
            onClick={this.handleClick}
            className="roll-in-left2 aboutgeneric"
          >
            {t("about7")}
          </div>

          <div
            onClick={this.handleClick}
            className="roll-in-left3 aboutgeneric"
          >
            <a href="https://www.linkedin.com/in/alex-bieth-berlin/?locale=de_DE">
              {" "}
              LinkedIn Profile
            </a>
          </div>
          <h6 />
          {this.state.clicked ? <About2 /> : null}
        </div>
      </div>
    );
  }
}
export default translate("translations")(About);

// const getStateFromRedux = state => {
//   return {
//     messages: state.messages
//   };
// };

// export default connect(getStateFromRedux)(About);
