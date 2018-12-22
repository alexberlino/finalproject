import React, { Component } from "react";
import ReactDOM from "react";
import App from "./App";
import { BrowserRouter, Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import i18n from "./i18n";
import { translate, Trans } from "react-i18next";
import Backdrop from "./Backdrop";

// require("react-bootstrap/lib/NavbarHeader";

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedEN: "",
      selectedFR: "",
      selectedDE: ""
    };
  }
  componentDidMount() {
    if (this.props.lang == "en") {
      this.state.selectedEN = "langselected";
    } else if (this.props.lang == "fr") {
      this.state.selectedFR = "langselected";
    } else if (this.props.lang == "de") {
      this.state.selectedDE = "langselected";
    }
  }

  //location.pathname.slice(4)

  render() {
    const { t, i18n } = this.props;

    return (
      <header className="toolbar">
        <nav className="toolbar_navigation">
          <div>
            <a name="back to Homepage" href={"/" + this.props.lang}>
              <img
                alt="logo"
                className="toolbar_logo"
                src="/logonew.png"
                onClick={() => this.props.pageChange("/")}
              />
            </a>
          </div>

          <div className="languageBtn">
            <Link
              className={"languageBtnEN " + this.state.selectedDE}
              onClick={() =>
                this.props.languageChange("de") ||
                this.setState({
                  selectedDE: "langselected",
                  selectedEN: "",
                  selectedFR: ""
                })
              }
              to={"/de" + this.props.page}
            >
              DE
            </Link>
            <Link
              className={"languageBtnEN " + this.state.selectedEN}
              to={"/en" + this.props.page}
              onClick={() =>
                this.props.languageChange("en") ||
                this.setState({
                  selectedDE: "",
                  selectedEN: "langselected",
                  selectedFR: ""
                })
              }
            >
              EN
            </Link>

            <Link
              className={"languageBtnEN " + this.state.selectedFR}
              onClick={() =>
                this.props.languageChange("fr") ||
                this.setState({
                  selectedDE: "",
                  selectedEN: "",
                  selectedFR: "langselected"
                })
              }
              to={"/fr" + this.props.page}
            >
              FR
            </Link>
          </div>

          <div className="toolbar_navigation_items navEntries" />
          <div className="toolbar_toggle_button">
            <img
              src="/hamburger.svg"
              className="toggleMan"
              alt="hamburger menu"
              height="40px"
              width="40px"
              onClick={this.props.drawerClickHandler}
            />
          </div>
        </nav>
      </header>
    );
  }
}

export default translate("translations")(Navigation);
