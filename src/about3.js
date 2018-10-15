import React, { Component } from "react";
import ReactDOM from "react";
import App from "./App";
import { BrowserRouter, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";
import { translate, Trans } from "react-i18next";
import i18n from "./i18n";

class About3 extends Component {
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
    window.location.reload();
  }

  render() {
    const { t, i18n } = this.props;

    return (
      <div className={this.state.categorie + "main"}>
        <div>
          <Helmet>
            <meta charSet="utf-8" />
            <title>{t("aboutme")}</title>
          </Helmet>
        </div>
        <div className="hide">
          <div className="aboutgeneric">
            <div
              onClick={this.handleClick}
              className="swirl-in-fwd  aboutgeneric"
            >
              {t("about10")}
            </div>

            <div
              onClick={this.handleClick}
              className="roll-in-left2 aboutgeneric"
            >
              {t("about11")}
            </div>
          </div>
          {this.state.clicked ? <About /> : null}
        </div>{" "}
      </div>
    );
  }
}
export default translate("translations")(About3);

// const getStateFromRedux = state => {
//   return {
//     messages: state.messages
//   };
// };

// export default connect(getStateFromRedux)(About);
