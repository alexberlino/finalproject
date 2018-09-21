import React, { Component } from "react";
// import axios from "./axios";
import { Switch } from "react-router";
import { BrowserRouter, Route, Link, Redirect } from "react-router-dom";
import Favicon from "react-favicon";
import Homepage from "./homepage";
import Contact from "./contact";
import Services from "./services";
import Blog from "./blog";
import Resources from "./resources";
import About from "./about";
import Navigation from "./nav";
import Footer from "./footer";
import LangSelector from "./langselector.js";
import { translate, Trans } from "react-i18next";

// import SearchBox from "./searchbox";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }


  render() {
      const { t, i18n } = this.props;
      const changeLanguage = (lng) => {
      i18n.changeLanguage(lng);


    return (
      <div>
        <Favicon url="http://oflisback.github.io/react-favicon/public/img/github.ico" />
        <BrowserRouter>
          <div>
            <Navigation />

            <div>
              <Switch>
                <Route exact path="/" component={Homepage} />
                <Route exact path="/contact" component={Contact} />
                <Route exact path="/services" component={Services} />
                <Route exact path="/blog" component={Blog} />
                <Route exact path="/resources" component={Resources} />
                <Route exact path="/about" component={About} />
                <Redirect path="*" to="/" />
              </Switch>
            </div>

            <Footer />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
