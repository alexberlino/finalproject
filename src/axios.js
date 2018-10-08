import axios from "axios";

var instance = axios.create({
  xsrfCookieName: process.env.REACT_APP_cookiename,
  xsrfHeaderName: process.env.REACT_APP_cookiething
});

export default instance;
