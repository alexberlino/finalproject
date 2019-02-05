const { checkPassword, hashPass, capital } = require("./Public/hash.js");
const express = require("express");
const app = express();
var i18n = require("i18n");
const hbs = require("hbs");
var hb = require("express-handlebars");
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
const helmet = require("helmet");

app.engine(
    ".hbs",
    hb({
        extname: ".hbs",
        defaultLayout: "main",
        helpers: {
            __: function() {
                return i18n.__.apply(this, arguments);
            },
            __n: function() {
                return i18n.__n.apply(this, arguments);
            }
        }
    })
);
app.set("view engine", ".hbs");

app.use(function(request, response) {
    if (!request.secure) {
        response.redirect("https://" + request.headers.host + request.url);
    }
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

i18n.configure({
    locales: ["en", "de"],
    queryParameter: "lang",
    directory: __dirname + "/locales",
    autoReload: true,
    updateFiles: true,
    api: {
        __: "__", //now req.__ becomes req.__
        __n: "__n" //and req.__n can be called as req.__n
    }
});
app.use(i18n.init);

app.use(express.static("./Public"));
app.use(express.static("./SQL"));

// setup hbs

// init i18n module for this loop

// register hbs helpers in res.locals' context which provides this.locale

let secrets;
if (process.env.NODE_ENV == "production") {
    secrets = process.env;
    // app.use(function(req, res, next) {
    //     if (req.secure) {
    //         next();
    //     } else {
    //         res.redirect("https://" + req.headers.host + req.url);
    //     }
    // });
} else {
    secrets = require("./secrets.json");
}

const cookieSession = require("cookie-session");
app.use(require("cookie-parser")());
app.use(require("body-parser").json());

const cookieSessionMiddleware = cookieSession({
    secret: secrets.COOKIE_PASS,
    maxAge: 100 * 60 * 60 * 24 * 4
});

app.use(cookieSessionMiddleware);

// const spicedPg = require("spiced-pg");

app.set("view engine", "handlebars");

app.engine("handlebars", hb());
app.use(
    require("body-parser").urlencoded({
        extended: false
    })
);

app.use(helmet());

function checkSession(req, res, next) {
    if (!req.session.userId) {
        res.redirect("/en");
    } else {
        next();
    }
}

////////////////////new routes & redirects///////////////////////////

app.get("/", function(req, res, next) {
    if (process.env.NODE_ENV == "production") {
        res.writeHead(301, {
            Location: "https://www.seoberlino.com/en",
            Expires: new Date().toGMTString()
        });
        res.end();
    } else {
        i18n.setLocale(req, "en");

        res.render("home", {
            layout: "main"
        });
    }
});

app.get("/en", (req, res) => {
    i18n.setLocale(req, "en");

    res.render("home", {
        layout: "main"
    });
});

app.get("/de", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("home", {
        layout: "mainDE"
    });
});

app.get("/en/onpage/duplicatecontent", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("duplicatecontent", {
        layout: "main"
    });
});

app.get("/de/onpage/duplicatecontent", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("duplicatecontent", {
        layout: "mainDE"
    });
});

app.get("/en/onpage/images", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("images", {
        layout: "main"
    });
    i18n.setLocale(req, "en");
});

app.get("/de/onpage/images", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("images", {
        layout: "mainDE"
    });
});

app.get("/en/onpage/internallinking", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("internallinking", {
        layout: "main"
    });
    i18n.setLocale(req, "en");
});

app.get("/de/onpage/internallinking", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("internallinking", {
        layout: "mainDE"
    });
});

app.get("/en/onpage/keywordresearch", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("keyword", {
        layout: "main"
    });
    i18n.setLocale(req, "en");
});

app.get("/en/onpage/metas", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("metas", {
        layout: "main"
    });
});

app.get("/de/onpage/metas", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("metas", {
        layout: "mainDE"
    });
});

app.get("/en/onpage/content", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("content", {
        layout: "main"
    });
});

app.get("/de/onpage/content", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("content", {
        layout: "mainDE"
    });
});

app.get("/de/onpage/keywordresearch", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("keyword", {
        layout: "mainDE"
    });
});

app.get("/en/onpage/keywordresearch", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("keyword", {
        layout: "main"
    });
});

app.get("/en/onpage/landingpages", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("landingpages", {
        layout: "main"
    });
    i18n.setLocale(req, "en");
});

app.get("/de/onpage/landingpages", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("landingpages", {
        layout: "mainDE"
    });
});

app.get("/en/onpage/structureddata", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("structureddata", {
        layout: "main"
    });
    i18n.setLocale(req, "en");
});

app.get("/de/onpage/structureddata", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("structureddata", {
        layout: "mainDE"
    });
});

app.get("/en/research/analytics", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("analytics", {
        layout: "main"
    });
    i18n.setLocale(req, "en");
});

app.get("/de/research/analytics", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("analytics", {
        layout: "mainDE"
    });
});

app.get("/en/research/bestpractices", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("competitor", {
        layout: "main"
    });
    i18n.setLocale(req, "en");
});

app.get("/de/research/bestpractices", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("competitor", {
        layout: "mainDE"
    });
});

app.get("/en/technical/crawlability", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("crawlability", {
        layout: "main"
    });
    i18n.setLocale(req, "en");
});

app.get("/de/technical/crawlability", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("crawlability", {
        layout: "mainDE"
    });
});

app.get("/en/technical/indexation", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("indexation", {
        layout: "main"
    });
    i18n.setLocale(req, "en");
});

app.get("/de/technical/indexation", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("indexation", {
        layout: "mainDE"
    });
});
app.get("/en/technical/internationalisation", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("internationalisation", {
        layout: "main"
    });
    i18n.setLocale(req, "en");
});

app.get("/de/technical/internationalisation", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("internationalisation", {
        layout: "mainDE"
    });
});

app.get("/en/technical/pagespeed", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("pagespeed", {
        layout: "main"
    });
    i18n.setLocale(req, "en");
});

app.get("/de/technical/pagespeed", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("pagespeed", {
        layout: "mainDE"
    });
});

app.get("/en/technical/mobilefriendly", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("mobile", {
        layout: "main"
    });
    i18n.setLocale(req, "en");
});

app.get("/de/technical/mobilefriendly", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("mobile", {
        layout: "mainDE"
    });
});

app.get("/en/technical/security", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("https", {
        layout: "main"
    });
    i18n.setLocale(req, "en");
});

app.get("/de/technical/security", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("https", {
        layout: "mainDE"
    });
});

app.get("/en/technical/dynamicrendering", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("javascript", {
        layout: "main"
    });
    i18n.setLocale(req, "en");
});

app.get("/de/technical/dynamicrendering", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("javascript", {
        layout: "mainDE"
    });
});

app.get("/en/offpage/brandbuilding", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("brandbuilding", {
        layout: "main"
    });
    i18n.setLocale(req, "en");
});

app.get("/de/offpage/brandbuilding", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("brandbuilding", {
        layout: "mainDE"
    });
});

app.get("/en/offpage/backlinkanalysis", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("backlinkanalysis", {
        layout: "main"
    });
    i18n.setLocale(req, "en");
});

app.get("/de/offpage/backlinkanalysis", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("backlinkanalisis", {
        layout: "mainDE"
    });
});

app.get("/en/offpage/toxic", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("links", {
        layout: "main"
    });
    i18n.setLocale(req, "en");
});

app.get("/de/offpage/toxic", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("links", {
        layout: "mainDE"
    });
});

app.get("/en/blog", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blog", {
        layout: "main"
    });
    i18n.setLocale(req, "en");
});

app.get("/de/blog", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("blog", {
        layout: "mainDE"
    });
});

app.get("/en/impressum", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("impressum", {
        layout: "main"
    });
    i18n.setLocale(req, "en");
});

app.get("/de/impressum", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("impressum", {
        layout: "mainDE"
    });
});

app.get("/en/seonews", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("seonews", {
        layout: "main"
    });
    i18n.setLocale(req, "en");
});

app.get("/de/seonews", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("seonews", {
        layout: "mainDE"
    });
});

app.get("/en/offpage", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("offpage", {
        layout: "main"
    });
    i18n.setLocale(req, "en");
});

app.get("/de/offpage", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("offpage", {
        layout: "mainDE"
    });
});

app.get("/en/onpage", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("onpage", {
        layout: "main"
    });
    i18n.setLocale(req, "en");
});

app.get("/de/onpage", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("onpage", {
        layout: "mainDE"
    });
});

app.get("/en/onpage/voicesearch", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("voicesearch", {
        layout: "main"
    });
    i18n.setLocale(req, "en");
});

app.get("/de/onpage/voicesearch", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("voicesearch", {
        layout: "mainDE"
    });
});

app.get("/en/research/localseo", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("localseo", {
        layout: "main"
    });
    i18n.setLocale(req, "en");
});

app.get("/de/research/localseo", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("localseo", {
        layout: "mainDE"
    });
});

app.get("/en/research/sea", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("sea", {
        layout: "main"
    });
    i18n.setLocale(req, "en");
});

app.get("/de/research/sea", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("sea", {
        layout: "mainDE"
    });
});

app.get("/en/technical", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("technical", {
        layout: "main"
    });
    i18n.setLocale(req, "en");
});

app.get("/de/technical", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("technical", {
        layout: "mainDE"
    });
});

app.get("/en/research", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("research", {
        layout: "main"
    });
    i18n.setLocale(req, "en");
});

app.get("/de/research", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("research", {
        layout: "mainDE"
    });
});

app.get("/en/resources", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("resources", {
        layout: "main"
    });
    i18n.setLocale(req, "en");
});

app.get("/de/resources", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("resources", {
        layout: "mainDE"
    });
});

app.get("/en/freeaudit", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("freeaudit", {
        layout: "main"
    });
});

app.get("/de/freeaudit", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("freeaudit", {
        layout: "mainDE"
    });
});

app.get("/en/partnership", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("partnership", {
        layout: "main"
    });
});

app.get("/de/partnership", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("partnership", {
        layout: "mainDE"
    });
});

app.get("/en/contact", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("contact", {
        layout: "main"
    });
});

app.get("/de/contact", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("contact", {
        layout: "mainDE"
    });
});

app.get("/en/services", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("services", {
        layout: "main"
    });
    i18n.setLocale(req, "en");
});

app.get("/de/services", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("services", {
        layout: "mainDE"
    });
});

app.get("/en/article/linkbuilding-in-2019", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blog1", {
        layout: "main"
    });
});

app.get("/en/article/beyond-mobile-first", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blog2", {
        layout: "main"
    });
});

app.get("/en/article/voice-search-challenges", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blog5", {
        layout: "main"
    });
});

app.get("/en/article/why-you-need-implement-structured-data", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blog6", {
        layout: "main"
    });
});

app.get("/en/article/link-building-to-brandbuilding", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blog7", {
        layout: "main"
    });
});

app.get("/en/article/how-to-get-those-first-links", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blog8", {
        layout: "main"
    });
});

app.get("/sitemap.xml", (req, res) => {
    res.render("sitemap");
});

function checkSession(req, res, next) {
    if (!req.session.userId) {
        res.redirect("/en");
    } else {
        next();
    }
}

app.get("/setcookiesession", (req, res) => {
    req.session.checked = true;

    res.json({
        success: true
    });
});

app.get("/checknotice", (req, res, next) => {
    if (req.session.checked) {
        res.json({
            success: true
        });
    } else {
        next();
    }
});

/////////////redirects and 410///////////////////////

app.get("/archives/208 ", function(request, response) {
    response.writeHead(301, {
        Location: "https://www.seoberlino.com/en",
        Expires: new Date().toGMTString()
    });
    response.end();
});

app.get("/archives/70 ", function(request, response) {
    response.writeHead(301, {
        Location: "https://www.seoberlino.com/en",
        Expires: new Date().toGMTString()
    });
    response.end();
});

app.get("/archives/195", function(request, response) {
    response.writeHead(301, {
        Location: "https://www.seoberlino.com/en",
        Expires: new Date().toGMTString()
    });
    response.end();
});

app.get("/archives/99", function(request, response) {
    response.writeHead(301, {
        Location: "https://www.seoberlino.com/en",
        Expires: new Date().toGMTString()
    });
    response.end();
});

app.get("/single-post/*", function(request, response) {
    response.writeHead(301, {
        Location: "https://www.seoberlino.com/en/blog",
        Expires: new Date().toGMTString()
    });
    response.end();
});

app.get("/ad/*", function(request, response) {
    response.writeHead(410);
    response.end();
});

app.get("/admin", function(request, response) {
    response.writeHead(410);
    response.end();
});

app.get("/login", function(request, response) {
    response.writeHead(410);
    response.end();
});

app.get("/lo/*", function(request, response) {
    response.writeHead(410), response.end();
});

app.get("/fr/*", function(request, response) {
    response.writeHead(410);
    response.end();
});

app.get("/endefined/*", function(request, response) {
    response.writeHead(410);
    response.end();
});

app.get("/un/*", function(request, response) {
    response.writeHead(410);
    response.end();
});

app.get("/undefined/*", function(request, response) {
    response.writeHead(410);
    response.end();
});

// listening
app.listen(process.env.PORT || 8080, () => console.log("listening"));

////////////////DO NOT TOUCH/////////////////////////
