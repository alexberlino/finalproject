import React, { Component } from "react";
import PropTypes from "prop-types";

class But extends Component {
  // Info on React PropTypes:
  // https://facebook.github.io/react/docs/typechecking-with-proptypes.html

  constructor(props) {
    super(props);
    this.state = {
      isClicked: false
    };
    this.logFormDataToConsole = this.logFormDataToConsole.bind(this);
  }

  logFormDataToConsole(event) {
    console.log("Form Values", this.props.formValues);
    this.setState({ isClicked: true });
  }

  render() {
    const recipient = `mailto:${this.props.email}`;
    const subject = `?subject?Interested%20Client`;
    const body = `body=${this.props.formValues.message}`;
    return (
      <button
        href={`${recipient}${subject}${body}`}
        disabled={this.state.isClicked}
        onClick={this.logFormDataToConsole}
      >
        Contact Us
      </button>
    );
  }
}

But.propTypes = {
  formValues: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired
  }).isRequired
};

export default But;
