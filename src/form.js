import React, { Component } from "react";
import ReactDOM from "react";
import App from "./App";
import { BrowserRouter, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";
import { translate, Trans } from "react-i18next";

import i18n from "./i18n";

class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      subject: "",
      message: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    let newState = {};

    newState[e.target.name] = e.target.value;

    this.setState(newState);
  }

  handleSubmit(e, message) {
    e.preventDefault();

    let formData = {
      formSender: this.state.name,
      formEmail: this.state.email,
      formSubject: this.state.subject,
      formMessage: this.state.message
    };

    if (
      formData.formSender.length < 1 ||
      formData.formEmail.length < 1 ||
      formData.formSubject.length < 1 ||
      formData.formMessage.length < 1
    ) {
      return false;
    }

    this.setState({
      firstName: "",
      lastName: "",
      email: "",
      subject: "",
      message: ""
    });
  }

  render() {
    const { t, i18n } = this.props;
    
    return (
      <div className="mainContact">
        <Helmet>
          <meta charSet="utf-8" />
          <title>{t("getintouch")}</title>
        </Helmet>
        <div className="leftContact">
          <form onSubmit={this.handleSubmit}>
            <div className="contactmeHead"> {t("getintouch")}</div>

            <fieldset>
              <ReactFormLabel htmlFor="formName" title={t("fullname")} />
              <input
                id="formName"
                className="form-input"
                name="name"
                type="text"
                placeholder="Full Name"
                required
                onChange={this.handleChange}
                value={this.state.name}
              />
            </fieldset>

            <fieldset>
              <ReactFormLabel htmlFor="formEmail" title="Email:" />

              <input
                id="formEmail"
                className="form-input"
                name="email"
                type="email"
                placeholder="Email"
                required
                onChange={this.handleChange}
                value={this.state.email}
              />
            </fieldset>

            <fieldset>
              <ReactFormLabel htmlFor="formSubject" title={t("subject")} />

              <input
                id="formSubject"
                className="form-input"
                name="subject"
                type="text"
                placeholder="Subject"
                required
                onChange={this.handleChange}
                value={this.state.subject}
              />
            </fieldset>

            <fieldset>
              <ReactFormLabel htmlFor="formMessage" title={t("message")} />
              <textarea
                id="formMessage"
                className="form-textarea"
                placeholder="Message"
                name="message"
                required
                onChange={this.handleChange}
              />
              <div>
                <button
                  id="formButton"
                  className="btn"
                  placeholder="Send message"
                  value=""
                >
                  {t("sendMessage")}
                </button>
              </div>
            </fieldset>
          </form>
        </div>

        <iframe
          width="600"
          height="580"
          frameBorder="0"
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
