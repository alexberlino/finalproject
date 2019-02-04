const db = require("./SQL/db.js");
const { checkPass, hashPass, capital } = require("./Public/hash.js");
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

app.use(require("body-parser").json());

// init i18n module for this loop

// register hbs helpers in res.locals' context which provides this.locale

let secrets;
if (process.env.NODE_ENV == "production") {
    secrets = process.env;
    app.use(function(req, res, next) {
        if (req.secure) {
            next();
        } else {
            res.redirect("https://" + req.headers.host + req.url);
        }
    });
} else {
    secrets = require("./secrets.json");
}

const csrf = require("csurf");

const cookieSession = require("cookie-session");
app.use(require("cookie-parser")());

const cookieSessionMiddleware = cookieSession({
    secret: secrets.COOKIE_PASS,
    maxAge: 100 * 60 * 60 * 24 * 4
});

app.use(cookieSessionMiddleware);
app.use(csrf({ cookie: true }));

app.use(function(req, res, next) {
    res.cookie("mytoken", req.csrfToken());
    return next();
});

// const spicedPg = require("spiced-pg");

app.set("view engine", "handlebars");

app.engine("handlebars", hb());
app.use(
    require("body-parser").urlencoded({
        extended: false
    })
);

app.use(helmet());

////////////////////new routes & redirects///////////////////////////

app.get("/", function(request, response, next) {
    if (process.env.NODE_ENV == "production") {
        response.writeHead(301, {
            Location: "https://www.seoberlino.com/en",
            Expires: new Date().toGMTString()
        });
        response.end();
    } else {
        next();
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
    res.render("backlinkanaylsis", {
        layout: "main"
    });
    i18n.setLocale(req, "en");
});

app.get("/de/offpage/backlinkanalysis", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("backlinkanaylsis", {
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

app.get("/sitemap.xml", (req, res) => {
    res.render("sitemap");
});
app.get("/robots.txt", (req, res) => {
    res.render("robots");
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

app.get("/en/editarticle", checkSession, (req, res, next) => {
    next();
});

app.get("/en/postarticle", checkSession, (req, res, next) => {
    next();
});
app.get("/en/admin", checkSession, (req, res, next) => {
    next();
});

app.post("/en/postarticle", checkSession, (req, res) => {
    db.postArticle(
        req.body.title,
        req.body.author,
        req.body.article,
        req.body.status,
        req.body.imageurl,
        req.body.url
    ).catch(error => {
        console.log("error in upload server", error);
        res.status(500).json({
            success: false
        });
    });
});

app.post("/en/editarticle/:id", checkSession, (req, res) => {
    db.updateArticle(
        req.body.title,
        req.body.author,
        req.body.article,
        req.body.status,
        req.body.imageurl,
        req.params.id,
        req.body.url
    )
        .then(({ rows }) => {
            res.json({
                success: true
            });
        })
        .catch(error => {
            console.log("error in upload server", error);
            res.status(500).json({
                success: false
            });
        });
});

app.get("/getarticles", (req, res) => {
    db.getArticles().then(function(results) {
        res.json(results);
    });
});

app.get("/get3articles", (req, res) => {
    db.get3Articles().then(function(results) {
        res.json(results);
    });
});

app.get("/getarticle/:id", (req, res) => {
    db.getArticle(req.params.id).then(function({ rows }) {
        res.json({ rows });
    });
});

app.get("/getarticleurl/:BE", (req, res) => {
    db.getArticleUrl(req.params.BE).then(function({ rows }) {
        res.json({ rows });
    });
});

app.post("/en/login", (req, res) => {
    let { email, pass } = req.body;
    db.login(email)
        .then(function(result) {
            if (!result) {
                throw new Error();
            } else {
                return checkPassword(pass, result.rows[0].password).then(
                    function(doesMatch) {
                        if (doesMatch) {
                            req.session.userId = result.rows[0].id;
                            res.json({
                                success: true
                            });
                        } else {
                            throw new Error();
                        }
                    }
                );
            }
        })
        .catch(function(e) {
            console.log("error while login");
            res.json({
                success: false
            });
        });
});

app.get("/log-out", (req, res) => {
    req.session = null;
    return res.redirect("/en");
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

app.get("/backlinking-check", function(request, response) {
    response.writeHead(301, {
        Location: "https://www.seoberlino.com/en/offpage",
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/technical-seo", function(request, response) {
    response.writeHead(301, {
        Location: "https://www.seoberlino.com/en/technical",
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/competitor-analysis", function(request, response) {
    response.writeHead(301, {
        Location: "https://www.seoberlino.com/en/research",
        Expires: new Date().toGMTString()
    });
    response.end();
});

app.get("/on-page-audit", function(request, response) {
    response.writeHead(301, {
        Location: "https://www.seoberlino.com/en/onpage",
        Expires: new Date().toGMTString()
    });
    response.end();
});

app.get("/seo-sea-jargon", function(request, response) {
    response.writeHead(301, {
        Location: "https://www.seoberlino.com/en/resources",
        Expires: new Date().toGMTString()
    });
    response.end();
});

////////////////////////////////////////

app.post("/profile", (req, res) => {
    return db
        .addProfileToDb(
            req.session.userId,
            req.body.age,
            req.body.city,
            req.body.personalweb
        )
        .then(function(results) {
            console.log(results);
            res.redirect("/");
        })
        .catch(function() {
            console.log("error");
            res.render("profile", {
                layout: "petitionLog",
                errorMessage: true
            });
        });
});

////////////////////profile///////////////////////////

app.get("/profile/edit", (req, res) => {
    db.infosForEdit(req.session.userId)

        .then(function(results) {
            console.log(results);

            res.render("profile-edit", {
                layout: "petition",
                user: results
            });
        })
        .catch(e => console.log(e));
});
app.post("/profile/edit", (req, res) => {
    const userDb = function() {
        if (req.body.password.length == 0) {
            return db.UpdateUserEditNoPwd(
                req.body.firstname,
                req.body.surname,
                req.body.emailaddress,
                req.session.userId
            );
        } else {
            hashPass(req.body.password)
                .then(pass => {
                    return db.UpdateUserEditPwd(
                        req.body.firstname,
                        req.body.surname,
                        req.body.emailaddress,
                        pass,
                        req.session.userId
                    );
                })
                .catch(function(e) {
                    console.log(e);
                });
        }
    };

    Promise.all([
        userDb(),
        db.UpdateProfile(
            req.session.userId,
            req.body.age,
            req.body.city,
            req.body.personalweb
        )
    ])

        .then(() => {
            //!!!!to do: update session.username etc with a function!!!!
            res.redirect("/thankyou");
        })
        .catch(function(e) {
            console.log(e);
        });
});

app.post("/profile", (req, res) => {
    console.log(
        req.session.userId,
        req.body.age,
        req.body.city,
        req.body.personalweb
    );
    return db
        .addProfileToDb(
            req.session.userId,
            req.body.age,
            req.body.city,
            req.body.personalweb
        )
        .then(function(result) {
            console.log(result);
        })
        .catch(function() {
            console.log("error");
            res.render("profile", {
                layout: "petitionLog",
                errorMessage: true
            });
        });
});

////////////////////login///////////////////////////

app.get("/login", checkSignedIn, function(req, res) {
    res.render("login", {
        layout: "petitionLog"
    });
});

// const emailaddress = req.body.emailaddress;
// let password = req.body.password;
app.post("/login", (req, res) => {
    db.getUserForLogin(req.body.emailaddress)
        .then(function(result) {
            if (!result) {
                throw new Error();
            } else {
                return checkPass(req.body.password, result.rows[0].password)
                    .then(function(doesMatch) {
                        if (doesMatch) {
                            req.session.userId = result.rows[0].id;
                            req.session.firstname = result.rows[0].firstname;
                            req.session.surname = result.rows[0].surname;
                        } else {
                            throw new Error();
                        }
                    })
                    .then(function() {
                        return db
                            .checkSign(req.session.userId)
                            .then(function(response) {
                                if (response == undefined) {
                                    res.redirect("/");
                                } else {
                                    req.session.checked = result.rows[0].id;
                                    res.redirect("/thankyou");
                                }
                            });
                    });
            }
        })

        .catch(function(e) {
            console.log("error catch" + e);
            res.render("login", {
                layout: "petitionLog",
                errorMessage: true
            });
        });
});
/////////////////login///////////////////////////

/////////////////register///////////////////////////

app.get("/register", checkSignedIn, function(req, res) {
    res.render("register", {
        layout: "petitionLog"
    });
});

app.post("/register", (req, res) => {
    hashPass(req.body.password)
        .then(pass => {
            return db.addUserToDb(
                req.body.firstname,
                req.body.surname,
                req.body.emailaddress,
                pass
            );
        })
        .then(result => {
            return (
                (req.session.userId = result.rows[0].id),
                (req.session.firstname = req.body.firstname),
                (req.session.surname = req.body.surname)
            );
        })
        .then(function() {
            console.log(
                req.session.userId,
                req.session.firstname,
                req.session.surname
            );
            res.redirect("/profile");
        })
        .catch(function() {
            console.log("error");
            res.render("register", {
                layout: "petitionLog",
                errorMessage: true
            });
        });
});

/////////////////register///////////////////////////

// app.use(csurf());
///!!!!
//for POST requests(submit) forms
//input name=_csrf value=""{{crsrfToken}} type hidden

// app.use((req, res, next) => {
//     res.locals.csrfToken = req.csrfToken();
//     next();
// });

////////////middleware//////////////////////////////

function checkSession(req, res, next) {
    if (!req.session.checked) {
        res.redirect("/");
    } else {
        next();
    }
}

function checkSignedPet(req, res, next) {
    if (req.session.checked) {
        res.redirect("/thankyou");
    } else {
        next();
    }
}

function checkSignedIn(req, res, next) {
    if (req.session.userId) {
        res.redirect("/");
    } else {
        next();
    }
}

function checkNotSignedIn(req, res, next) {
    if (!req.session.userId) {
        res.redirect("/register");
    } else {
        next();
    }
}

////////////middleware//////////////////////////////

/////////////////petition///////////////////////////

app.post("/", (req, res) => {
    console.log(
        req.session.userId,
        req.session.firstname,
        req.session.surname,
        req.body.signature
    );
    return db
        .addToDatabase(req.session.userId, req.body.signature)
        .then(function(results) {
            req.session.checked = results.rows[0].id;
            res.redirect("/thankyou");
        })
        .catch(function() {
            res.render("main", {
                layout: "petition",
                errorMessage: true
            });
        });
});

/////////////////petition///////////////////////////

/////////////////thankyou///////////////////////////

app.get("/thankyou", checkSession, checkNotSignedIn, (req, res) => {
    // res.cookie("confirmCookie", "done");

    db.getSignatures(req.session.userId)
        .then(function(result) {
            result[0].id == req.session.checked;
            const sign = result[0].signature;
            db.getAllSignatures().then(function(results) {
                res.render("thankyou", {
                    layout: "petition",
                    numberSign: results.length,
                    userSign: sign,
                    firstname: capital(req.session.firstname)
                });
            });
        })
        .catch(function(e) {
            console.log(e);
        });
});

app.post("/thankyou", (req, res) => {
    console.log(req.session.userdId);
    db.deleteSign(req.session.userId).then(function() {
        req.session.checked = req.session.unchecked;
        res.redirect("/");
    });
});

/////////////////thankyou///////////////////////////

app.get("/logout", function(req, res) {
    req.session = null;
    res.redirect("/login");
});
/////////////////signatures///////////////////////////

app.get("/buddylist", checkNotSignedIn, checkSession, (req, res) => {
    db.getSignatures2()
        .then(function(results) {
            console.log(results);

            res.render("buddylist", {
                layout: "petition",
                signs: results
            });
        })
        .catch(e => console.log(e));
});

app.get("/buddylist/:city", (req, res) => {
    db.getSignatures3(req.params.city)
        .then(function(results) {
            console.log(results);
            res.render("buddylist2", {
                layout: "petition",
                signs: results,
                city: capital(req.params.city)
            });
        })
        .catch(e => console.log(e));
});

/////////////////signatures///////////////////////////

app.get("/aboutus", function(req, res) {
    res.render("about", {
        layout: "petitionLog"
    });
});

app.get("/contact", checkNotSignedIn, function(req, res) {
    res.render("contact", {
        layout: "petition"
    });
});

app.get("/contactus", function(req, res) {
    res.render("contact", {
        layout: "petitionLog"
    });
});

app.post("/contactus", function(req, res) {
    res.render("contact", {
        layout: "petitionLog",
        ThanksMessage: true
    });
});

app.post("/contact", function(req, res) {
    res.render("contact", {
        layout: "petition",
        ThanksMessage: true
    });
});

// listening
app.listen(process.env.PORT || 8080, () => console.log("listening"));

////////////////DO NOT TOUCH/////////////////////////
