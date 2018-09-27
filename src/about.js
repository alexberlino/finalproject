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
  handleMouseIn() {
    this.setState({ hover: true });
  }

  handleMouseOut() {
    this.setState({ hover: false });
  }

  handleClick() {
    this.setState({ categorie: "text-blur-out" });

    setTimeout(
      function() {
        this.setState({
          clicked: true,
          categorie: null
        });
      }.bind(this),
      1000
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
      <div>
        <div
          className={this.state.categorie}
          onMouseOver={this.handleMouseIn.bind(this)}
          onMouseOut={this.handleMouseOut.bind(this)}
        />

        <div>click to see references!!</div>

        <div>
          <Helmet>
            <meta charSet="utf-8" />
            <title>About John Smith</title>
          </Helmet>
        </div>
        <div onClick={this.handleClick} className="bounce-in-top2">
          {t("about1")}
        </div>
        <div onClick={this.handleClick} className="roll-in-left">
          {t("about2")}
        </div>
        <div onClick={this.handleClick} className="swirl-in-fwd2">
          {t("about3")}
        </div>
        <div onClick={this.handleClick} className="bounce-in-top">
          {t("about4")}
        </div>
        <div onClick={this.handleClick} className="fade-in">
          {t("about5")}
        </div>
        <div onClick={this.handleClick} className="swirl-in-fwd">
          {t("about6")}
        </div>
        <div onClick={this.handleClick} className="roll-in-left2">
          {t("about7")}
        </div>
        <h6 />
        {this.state.clicked ? <About2 /> : null}
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
