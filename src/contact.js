import React, { Component } from "react";
import ReactDOM from "react";
import App from "./App";
import { BrowserRouter, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";
import { translate, Trans } from "react-i18next";
import ReactFormLabel from "./reactform";
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
    console.log(this.props.i18n.language);
    return (
      <div className="mainContact">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Get in touch - John Smith</title>
        </Helmet>
        <div className="leftContact">
          <form onSubmit={this.handleSubmit}>
            <fieldset>
              <ReactFormLabel htmlFor="formName" title={t("fullname")} />

              <input
                id="formName"
                className="form-input"
                name="name"
                type="text"
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
                name="message"
                required
                onChange={this.handleChange}
              />{" "}
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
          className="googleMap"
          width="600"
          height="580"
          frameBorder="0"
          style={{ border: 0 }}
          src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJOVVoB6hPqEcRlJFtDbSsAbo&key=AIzaSyDs1sQ2-6colx4_-iVwhV0rmlAv8uUJEk8"
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
