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
        <div className="breadcrumb">
          <a href={"/" + this.props.lng}>> SEO FREELANCER ></a>

          <a href={"/" + this.props.lng + "/contact"}> CONTACT ></a>
        </div>

        <h2 className="txt">
          <img src="/telephone.svg" className="iconphone" />
          015 787 011 932
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
