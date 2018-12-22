import React, { Component } from "react";
import ReactDOM from "react";
import App from "./App";
import { BrowserRouter, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";
import { translate, Trans } from "react-i18next";
import { Form, FormGroup, Button } from "reactstrap";
import i18n from "./i18n";
import LinksToPages from "./LinksToPages";

import axios from "./axios";

class ContactMain extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      message: "",
      success: false,
      error: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  async handleSubmit(e) {
    e.preventDefault();
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
          this.setState({
            success: true
          });
          setTimeout(function() {
            window.location.reload();
          }, 6000);
        } else {
          this.setState({
            error: true
          });
          setTimeout(function() {
            window.location.reload();
          }, 15000);
        }
      });
  }

  render() {
    const { t, i18n } = this.props;
    return (
      <div className="contactpage">
        {this.state.error ? (
          <div className="error">
            There was an error, please send an email to alex.bieth@gmail.com or
            call me.{" "}
          </div>
        ) : null}
        {this.state.success ? (
          <div className="error">
            <div className="error2">
              Success! thank you for your email, I will be in touch with you
              very soon!{" "}
            </div>
          </div>
        ) : null}
        <div className="leftContact">
          <Form onSubmit={this.handleSubmit}>
            <FormGroup>
              <label>{t("fullname")} </label>
              <input
                type="text"
                name="name"
                className="field"
                onChange={this.handleChange}
              />
            </FormGroup>

            <FormGroup>
              <label>Email* </label>
              <input
                type="email"
                name="email"
                className="field"
                onChange={this.handleChange}
              />
            </FormGroup>

            <FormGroup>
              <label>{t("message")} </label>
              <textarea
                type="text"
                name="message"
                className="fieldMessage"
                onChange={this.handleChange}
              />
            </FormGroup>

            <Button className="formButton">{t("sendMessage")} </Button>
          </Form>
        </div>
        <div className="rightContact">
          <iframe
            title="map"
            frameBorder="0"
            className="map"
            src="https://www.google.com/maps/embed/v1/search?q=Kiehlufer%2C%20Berlin%2C%20Germany&key=AIzaSyDs1sQ2-6colx4_-iVwhV0rmlAv8uUJEk8"
            allowFullScreen
          />
        </div>
      </div>
    );
  }
}

export default translate("translations")(ContactMain);

// const getStateFromRedux = state => {
//   return {
//     messages: state.messages
//   };
// };
//
// export default connect(getStateFromRedux)(Contact);
