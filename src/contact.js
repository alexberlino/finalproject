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
    console.log(this.props.i18n.language);
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
        <a className="servicesHP" href="/en/services">
          <button className="servicesHP">Services</button>
        </a>

        <iframe
          title="map"
          frameBorder="0"
          className="map"
          src="https://www.google.com/maps/embed/v1/search?q=Kiehlufer%2C%20Berlin%2C%20Germany&key=AIzaSyDs1sQ2-6colx4_-iVwhV0rmlAv8uUJEk8"
          allowFullScreen
        />
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
