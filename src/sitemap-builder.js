require("babel-register");

const router = require("./browserrouter").default;
const Sitemap = require("../lib").default;

const filterConfig = {
  isValid: false,
  rules: [/\/auth/, /\*/]
};

new Sitemap(router)
  .filterPaths(filterConfig)
  .build("https://www.seoberlino.com", { limitCountPaths: 5000 })
  .save("./sitemap.xml", "/static/");
