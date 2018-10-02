import React, { Component } from "react";
import ReactDOM from "react";
import App from "./App";
import { BrowserRouter, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";
import { translate, Trans } from "react-i18next";
import i18n from "./i18n";
import About3 from "./about3";

class About2 extends Component {
  constructor() {
    super();
    this.state = {
      clicked: false,
      categorie: null
    };

    this.state = { categorie: null };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      clicked: true,
      categorie: null
    });
  }

  render() {
    const { t, i18n } = this.props;

    return (
      <div className={this.state.categorie}>
        <div>
          <Helmet>
            <meta charSet="utf-8" />
            <title>About Me</title>
          </Helmet>
        </div>
        <div className="aboutgeneric">
          <div className="hide">
            <div
              onClick={this.handleClick}
              className="swirl-in-fwd  aboutgeneric"
            >
              {t("about8")}
            </div>

            <div
              onClick={this.handleClick}
              className="roll-in-left2 aboutgeneric"
            >
              {t("about9")}
            </div>
          </div>
          {this.state.clicked ? <About3 /> : null}
        </div>{" "}
      </div>
    );
  }
}
export default translate("translations")(About2);

// const getStateFromRedux = state => {
//   return {
//     messages: state.messages
//   };
// };

// export default connect(getStateFromRedux)(About);
