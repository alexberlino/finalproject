require("babel-register");

const router = require("./router").default;
const Sitemap = require("../").default;

new Sitemap(router).build("http://www.seoberlino.com").save("./sitemap.xml");
