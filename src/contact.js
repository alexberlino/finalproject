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

import axios from "./axios";

class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      message: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  async handleSubmit(e) {
    const { name, email, message } = this.state;

    if (name.length < 1 || email.length < 1 || message.length < 1) {
      return false;
    }

    const form = await axios
      .post(`/en/form`, {
        name,
        email,
        message
      })
      .then(({ data }) => {
        if (data.success) {
          console.log("success");
          this.setState({
            success: true
          });
        } else {
          console.log("error");
          this.setState({
            error: true
          });
        }
      });
  }

  render() {
    const { t, i18n } = this.props;
    console.log(this.props.i18n.language);
    return (
      <div className="main">
        <Helmet>
          <meta charSet="utf-8" />
          <title>{t("getintouch_title")}</title>
        </Helmet>
        {this.state.error && <div className="error">Try again!</div>}
        {this.state.success && <div className="success">Thank you!</div>}
        <div className="leftContact">
          <div className="contactmeHead"> {t("getintouch")}</div>

          <Form onSubmit={this.handleSubmit}>
            <FormGroup>
              <Label for="name">{t("fullname")} </Label>
              <Input
                type="text"
                name="name"
                className="field"
                onChange={this.handleChange}
              />
            </FormGroup>

            <FormGroup>
              <Label for="name">Email* </Label>
              <Input
                type="email"
                name="email"
                className="field"
                onChange={this.handleChange}
              />
            </FormGroup>

            <FormGroup>
              <Label for="name">{t("message")} </Label>
              <textarea
                type="text"
                name="message"
                className="fieldMessage"
                onChange={this.handleChange}
              />
            </FormGroup>

            <Button className="formButton">Submit </Button>
          </Form>
        </div>
        <div className="map">
          <iframe
            width="600"
            height="580"
            frameBorder="0"
            src="https://www.google.com/maps/embed/v1/search?q=Kiehlufer%2C%20Berlin%2C%20Germany&key=AIzaSyDs1sQ2-6colx4_-iVwhV0rmlAv8uUJEk8"
            allowFullScreen
          />
        </div>
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
