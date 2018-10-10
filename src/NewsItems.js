import React, { Component } from "react";
import ReactDOM from "react";
import App from "./App";
import { BrowserRouter, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";

class NewsItems extends Component {
  render() {
    return (
      <div>
        <div className="infoDate">Last update: October 9th, 2018</div>

        <p>Red Hot</p>

        <div className="newsItem">
          <img className="importancenews" src="/redlight.png" />
          <p className="important">
            Indexation for Javascript apps: use Dynamic Rendering
          </p>
        </div>
        <div className="newsItem">
          <img className="importancenews" src="/redlight.png" />
          <p className="important">Mobile First Enabled for most websites</p>
        </div>

        <div className="newsItem">
          <img className="importancenews" src="/redlight.png" />
          <p className="important">Google's algorithm latest updates</p>
        </div>
        <div className="newsItem">
          <img className="importancenews" src="/redlight.png" />
          <p className="important">
            Chrome now marks all unencrypted websites as ‘not secure’
          </p>
        </div>
      </div>
    );
  }
}

export default NewsItems;

// const getStateFromRedux = state => {
//   return {
//     messages: state.messages
//   };
// };

// export default connect(getStateFromRedux)(Resources);
