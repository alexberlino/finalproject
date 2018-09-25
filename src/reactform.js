import React, { Component } from "react";
import ReactDOM from "react";

class ReactFormLabel extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <label htmlFor={this.props.htmlFor}>{this.props.title}</label>;
  }
}

export default ReactFormLabel;
