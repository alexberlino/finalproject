import React, { Component } from "react";
import ReactDOM from "react";
import App from "./App";
import { BrowserRouter, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";
import { translate, Trans } from "react-i18next";
import i18n from "./i18n";

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
    window.location.reload();
  }

  render() {
    const { t, i18n } = this.props;

    return (
      <div className={this.state.categorie}>
        <div>
          <Helmet>
            <meta charSet="utf-8" />
            <title>About John Smith</title>
          </Helmet>
        </div>
        <div className="hide">
          <div onClick={this.handleClick} className="swirl-in-fwd">
            {t("about8")}
          </div>

          <div onClick={this.handleClick} className="roll-in-left2">
            {t("about9")}
          </div>

          <div onClick={this.handleClick} className="bounce-in-top2">
            {t("about10")}
          </div>
          <div onClick={this.handleClick} className="bounce-in-top">
            {t("about11")}
          </div>
        </div>
        {this.state.clicked ? <About2 /> : null}
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
