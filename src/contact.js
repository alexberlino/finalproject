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
import LinksToPages from "./LinksToPages";
import ContactMain from "./ContactMain";

import axios from "./axios";

class Contact extends Component {
  render() {
    const { t, i18n } = this.props;
    console.log(this.props.i18n.language);
    return (
      <div className="maincontact2">
        <Helmet>
          <meta charSet="utf-8" />
          <title>{t("getintouch_title")}</title>
        </Helmet>

        <h1 className="txt2 txthead"> {t("getintouch")}></h1>
        <h2 className="txt">
          <img src="/telephone.svg" className="iconphone" />015 787 011 932
        </h2>
        <ContactMain />
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
